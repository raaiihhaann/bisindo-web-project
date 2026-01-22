// composables/useSystemInit.js
import { ref } from 'vue'
import { useGestureModel } from './useGestureModel'

export function useSystemInit(mediapipeInstance) {
  // ============================================
  // STATE
  // ============================================
  const isInitializing = ref(true)
  
  // ⭐ Get model state from useGestureModel (persistent)
  const { isModelLoaded, modelError, isModelLoading, loadGestureModel } = useGestureModel()

  // ============================================
  // METHODS
  // ============================================
  const initializeSystem = async () => {
    console.log('🎯 Initializing system...')
    isInitializing.value = true
    
    try {
      // Step 1: Load MediaPipe
      console.log('📦 [1/2] Loading MediaPipe...')
      await mediapipeInstance.initialize()
      console.log('✅ MediaPipe loaded:', mediapipeInstance.isReady.value)
      
      // Step 2: Load CNN Model (only if not loaded)
      if (!isModelLoaded.value && !isModelLoading.value) {
        console.log('📦 [2/2] Loading CNN Model...')
        await loadGestureModel()
        console.log('✅ CNN Model loaded')
      } else if (isModelLoaded.value) {
        console.log('✅ [2/2] CNN Model already loaded, skipping...')
      } else {
        console.log('⏳ [2/2] CNN Model is loading...')
      }
      
      console.log('✅ All systems ready!')
      return true
      
    } catch (err) {
      console.error('❌ Initialization error:', err)
      return false
      
    } finally {
      isInitializing.value = false
    }
  }

  // ============================================
  // API
  // ============================================
  return {
    isModelLoaded,      // ⭐ From useGestureModel (persistent)
    modelError,         // ⭐ From useGestureModel (persistent)
    isModelLoading,     // ⭐ From useGestureModel (persistent)
    isInitializing,
    initializeSystem
  }
}