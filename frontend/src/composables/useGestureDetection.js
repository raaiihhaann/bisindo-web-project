// composables/useGestureDetection.js
import { ref } from 'vue'
import { predictGesture } from './useGestureModel'

export function useGestureDetection() {
  // ============================================
  // STATE
  // ============================================
  const currentGesture = ref('')
  const confidence = ref('')

  // ============================================
  // METHODS
  // ============================================
  const handleLandmarksDetected = (landmarks126, handsDetected) => {
    // Jika tidak ada tangan terdeteksi
    if (!handsDetected || handsDetected === 0) {
      currentGesture.value = 'Tangan Tidak Terdeteksi'
      confidence.value = '-'
      return
    }

    if (!landmarks126 || landmarks126.length !== 126) {
      console.warn('⚠️ Invalid landmarks length:', landmarks126?.length)
      currentGesture.value = 'Tangan Tidak Terdeteksi'
      confidence.value = '-'
      return
    }

    try {
      const result = predictGesture(landmarks126)
      
      if (!result) {
        currentGesture.value = 'Tangan Tidak Terdeteksi'
        confidence.value = '-'
        return
      }

      currentGesture.value = result.label
      confidence.value = `${(result.confidence * 100).toFixed(2)}%`
      
    } catch (err) {
      console.error('❌ Prediction error:', err)
      currentGesture.value = 'Error'
      confidence.value = '-'
    }
  }

  const resetGestureDisplay = () => {
    currentGesture.value = ''
    confidence.value = ''
  }

  // ============================================
  // API
  // ============================================
  return {
    currentGesture,
    confidence,
    handleLandmarksDetected,
    resetGestureDisplay
  }
}