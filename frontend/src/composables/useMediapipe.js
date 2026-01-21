// composables/useMediapipe.js
import { ref, onUnmounted } from 'vue'
import { HandLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision'

export function useMediapipe() {
  // ============================================
  // STATE
  // ============================================
  const isReady = ref(false)
  const isCameraActive = ref(false)
  const isProcessing = ref(false)
  const error = ref(null)

  // ============================================
  // PRIVATE VARIABLES
  // ============================================
  let handLandmarker = null
  let stream = null
  let animationFrameId = null
  let videoElement = null
  let canvasElement = null
  let canvasCtx = null
  let lastVideoTime = -1

  // ============================================
  // MEDIAPIPE INITIALIZATION
  // ============================================
  const initialize = async () => {
    if (isReady.value) return 

    try {
      console.log('🔄 Initializing MediaPipe...')
      
      const vision = await FilesetResolver.forVisionTasks(
        '/mediapipe/wasm'
      )

      // Try GPU first, fallback to CPU
      try {
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: '/mediapipe/models/hand_landmarker.task',
            delegate: 'GPU'
          },
          runningMode: 'VIDEO',
          numHands: 2,
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5
        })
        console.log('✅ MediaPipe initialized (GPU)')
      } catch (gpuError) {
        console.warn('⚠️ GPU failed, trying CPU...', gpuError)
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: '/mediapipe/models/hand_landmarker.task',
            delegate: 'CPU'
          },
          runningMode: 'VIDEO',
          numHands: 2,
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5
        })
        console.log('✅ MediaPipe initialized (CPU)')
      }

      isReady.value = true
      error.value = null
    } catch (err) {
      console.error('❌ MediaPipe initialization failed:', err)
      error.value = 'Gagal memuat MediaPipe. Silakan refresh halaman.'
      isReady.value = false
    }
  }

  // ============================================
  // LANDMARK EXTRACTION (126 FLOAT) - FIXED
  // ============================================
  const extractLandmarks = (results) => {
    if (!results?.landmarks?.length) {
      console.log('⚠️ No landmarks detected')
      return null
    }

    console.log(`👋 Detected ${results.landmarks.length} hand(s)`)

    // Process up to 2 hands
    const hands = []
    
    for (let i = 0; i < Math.min(2, results.landmarks.length); i++) {
      const hand = results.landmarks[i]
      
      // Flatten x, y, z for all 21 landmarks
      const flat = hand.flatMap(p => [p.x, p.y, p.z])
      
      // Calculate average x for sorting (left to right)
      const xAvg = hand.reduce((sum, p) => sum + p.x, 0) / hand.length
      
      hands.push({ xAvg, flat })
    }

    // Sort hands from left to right (by x position)
    hands.sort((a, b) => a.xAvg - b.xAvg)

    // Build output array
    const output = []
    
    // Add first hand (or zeros if no hand)
    if (hands.length > 0) {
      output.push(...hands[0].flat)
    } else {
      output.push(...new Array(63).fill(0))
    }
    
    // Add second hand (or zeros if no second hand)
    if (hands.length > 1) {
      output.push(...hands[1].flat)
    } else {
      output.push(...new Array(63).fill(0))
    }

    console.log(`✅ Landmarks extracted: ${output.length} values`)
    
    // Debug: show first few values
    console.log('📊 First 6 values:', output.slice(0, 6).map(v => v.toFixed(3)))

    return output // Should be 126 floats
  }

  // ============================================
  // REALTIME DETECTION LOOP
  // ============================================
  const detectGesture = (onLandmarksDetected) => {
    if (!handLandmarker || !isCameraActive.value || !videoElement) {
      return
    }

    const startTimeMs = performance.now()

    // Only detect if video time has changed (new frame)
    if (videoElement.currentTime !== lastVideoTime) {
      lastVideoTime = videoElement.currentTime

      try {
        const results = handLandmarker.detectForVideo(videoElement, startTimeMs)

        // Clear canvas
        if (canvasCtx && canvasElement) {
          canvasCtx.save()
          canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)

          // Jika tidak ada tangan terdeteksi
          if (!results.landmarks?.length) {
            onLandmarksDetected(null, 0)
            canvasCtx.restore()
          } else {
            // Draw landmarks if detected
            const drawer = new DrawingUtils(canvasCtx)

            for (const landmarks of results.landmarks) {
              drawer.drawConnectors(
                landmarks,
                HandLandmarker.HAND_CONNECTIONS,
                { color: '#00FF00', lineWidth: 2 }
              )
              drawer.drawLandmarks(landmarks, {
                color: '#FF0000',
                lineWidth: 1,
                radius: 3
              })
            }

            // Extract and send landmarks
            const landmarks126 = extractLandmarks(results)
            
            if (landmarks126 && landmarks126.length === 126) {
              onLandmarksDetected(landmarks126, results.landmarks.length)
            } else {
              console.warn(`⚠️ Invalid landmarks: ${landmarks126?.length || 0}`)
              onLandmarksDetected(null, results.landmarks.length)
            }

            canvasCtx.restore()
          }
        }
      } catch (err) {
        console.error('❌ Detection error:', err)
      }
    }

    // Continue loop
    if (isCameraActive.value) {
      animationFrameId = requestAnimationFrame(() => detectGesture(onLandmarksDetected))
    }
  }

  // ============================================
  // CAMERA CONTROL
  // ============================================
  const startCamera = async (video, canvas, onLandmarksDetected) => {
    if (!isReady.value) {
      throw new Error('MediaPipe belum siap. Silakan tunggu...')
    }

    if (isCameraActive.value) {
      console.warn('⚠️ Camera already active')
      return
    }

    if (!video || !canvas) {
      throw new Error('Video atau canvas element tidak valid')
    }

    isProcessing.value = true
    error.value = null

    try {
      // Store references
      videoElement = video
      canvasElement = canvas
      canvasCtx = canvas.getContext('2d')

      // Request camera access
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      })

      video.srcObject = stream

      // Wait for video metadata to load
      await new Promise((resolve, reject) => {
        video.onloadedmetadata = () => {
          video.play()
            .then(resolve)
            .catch(reject)
        }
        video.onerror = reject
      })

      // Set canvas size to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      console.log(`📹 Camera started: ${video.videoWidth}x${video.videoHeight}`)

      isCameraActive.value = true
      lastVideoTime = -1

      // Start detection loop
      detectGesture(onLandmarksDetected)
    } catch (err) {
      console.error('❌ Camera start failed:', err)
      
      // Cleanup on error
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
        stream = null
      }

      let errorMessage = 'Gagal mengakses kamera.'
      if (err.name === 'NotAllowedError') {
        errorMessage = 'Akses kamera ditolak. Silakan izinkan akses kamera.'
      } else if (err.name === 'NotFoundError') {
        errorMessage = 'Kamera tidak ditemukan.'
      } else if (err.name === 'NotReadableError') {
        errorMessage = 'Kamera sedang digunakan aplikasi lain.'
      }

      error.value = errorMessage
      throw new Error(errorMessage)
    } finally {
      isProcessing.value = false
    }
  }

  const stopCamera = () => {
    console.log('🛑 Stopping camera...')

    // Cancel animation loop
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }

    // Stop all tracks
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop()
        console.log(`⏹️ Stopped track: ${track.kind}`)
      })
      stream = null
    }

    // Clear video
    if (videoElement) {
      videoElement.srcObject = null
      videoElement = null
    }

    // Clear canvas
    if (canvasCtx && canvasElement) {
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
    }
    canvasElement = null
    canvasCtx = null

    isCameraActive.value = false
    lastVideoTime = -1
    
    console.log('✅ Camera stopped')
  }

  // ============================================
  // CLEANUP
  // ============================================
  onUnmounted(() => {
    console.log('🧹 Cleaning up MediaPipe...')
    stopCamera()
    if (handLandmarker) {
      handLandmarker.close()
      handLandmarker = null
    }
  })

  // ============================================
  // API
  // ============================================
  return {
    isReady,
    isCameraActive,
    isProcessing,
    error,
    initialize,
    startCamera,
    stopCamera
  }
}