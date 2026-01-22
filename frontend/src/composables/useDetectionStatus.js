// composables/useDetectionStatus.js
import { computed } from 'vue'

export function useDetectionStatus(refs) {
  // ============================================
  // COMPUTED
  // ============================================
  const isFullyReady = computed(() => {
    return refs.isReady.value && 
           refs.modelLoaded.value && 
           !refs.isInitializing.value && 
           !refs.isModelLoading.value
  })

  const statusText = computed(() => {
    if (refs.error.value || refs.modelError.value) return '✕ Error'
    if (refs.isInitializing.value) return '⟳ Memuat sistem...'
    if (!refs.isReady.value) return '⟳ Memuat MediaPipe...'
    if (refs.isModelLoading.value) return '⟳ Memuat Model CNN...'
    if (!refs.modelLoaded.value) return '⟳ Menunggu Model CNN...'
    if (refs.isProcessing.value) return '⟳ Mengaktifkan kamera...'
    if (refs.isCameraActive.value) return '● Kamera aktif'
    return '✓ Siap'
  })

  const statusClass = computed(() => {
    if (refs.error.value || refs.modelError.value) return 'status-error'
    if (!isFullyReady.value || refs.isProcessing.value) return 'status-loading'
    if (refs.isCameraActive.value) return 'status-active'
    return 'status-ok'
  })

  const footerText = computed(() => {
    if (refs.isCameraActive.value) {
      return 'Deteksi aktif - Tunjukkan isyarat BISINDO Anda'
    }
    if (refs.isProcessing.value) {
      return 'Mohon tunggu, sedang memproses...'
    }
    if (refs.isInitializing.value) {
      return 'Memuat sistem...'
    }
    if (!refs.isReady.value) {
      return 'Memuat MediaPipe...'
    }
    if (refs.isModelLoading.value) {
      return 'Memuat Model CNN...'
    }
    if (!refs.modelLoaded.value) {
      return 'Menunggu Model CNN...'
    }
    return 'Klik "Buka Kamera" untuk memulai deteksi'
  })

  const placeholderText = computed(() => {
    if (refs.isProcessing.value) return 'Memproses...'
    if (refs.isInitializing.value) return 'Memuat sistem...'
    if (!refs.isReady.value) return 'Memuat MediaPipe...'
    if (refs.isModelLoading.value) return 'Memuat Model CNN...'
    if (!refs.modelLoaded.value) return 'Menunggu Model CNN...'
    return 'Aktifkan kamera untuk memulai'
  })

  // ============================================
  // API
  // ============================================
  return {
    isFullyReady,
    statusText,
    statusClass,
    footerText,
    placeholderText
  }
}