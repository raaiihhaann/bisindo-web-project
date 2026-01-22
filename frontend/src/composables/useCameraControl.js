// composables/useCameraControl.js
export function useCameraControl(mediapipe, options) {
  const { videoElement, canvasElement, onLandmarksDetected, onStop } = options

  // ============================================
  // METHODS
  // ============================================
  const handleStartCamera = async () => {
    if (!videoElement.value || !canvasElement.value) {
      console.error('❌ Video or canvas element not found')
      throw new Error('Video atau canvas element tidak ditemukan')
    }

    try {
      console.log('🎬 Starting camera...')
      
      await mediapipe.startCamera(
        videoElement.value,
        canvasElement.value,
        onLandmarksDetected
      )

      console.log('✅ Camera started successfully')
    } catch (err) {
      console.error('❌ Camera error:', err)
      throw err
    }
  }

  const handleStopCamera = () => {
    console.log('🛑 Stopping camera...')

    mediapipe.stopCamera()

    // Trigger callback if provided
    if (onStop) {
      onStop()
    }

    console.log('✅ Camera stopped')
  }

  // ============================================
  // API
  // ============================================
  return {
    handleStartCamera,
    handleStopCamera
  }
}