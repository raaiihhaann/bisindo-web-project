<template>
  <section class="deteksi-layout">
    <div class="deteksi-container">
      <div class="deteksi-card">
        <!-- Header Info -->
        <div class="card-header">
          <div class="info-row">
            <span class="info-label">Isyarat</span>
            <span class="info-separator">:</span>
            <span class="info-value">{{ currentGesture || '-' }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Akurasi</span>
            <span class="info-separator">:</span>
            <span class="info-value">{{ confidence || '-' }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Status</span>
            <span class="info-separator">:</span>
            <span class="info-value" :class="statusClass">{{ statusText }}</span>
          </div>
        </div>

        <!-- Error Alert -->
        <div v-if="error || modelError" class="error-alert">
          <span class="error-icon">⚠️</span>
          <span class="error-text">{{ error || modelError }}</span>
        </div>

        <!-- Camera Preview Area -->
        <div class="camera-preview">
          <div v-if="!isCameraActive" class="camera-placeholder">
            <div class="camera-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <p class="placeholder-text">{{ placeholderText }}</p>
          </div>

          <video
            ref="videoElement"
            class="camera-stream"
            :class="{ 'is-active': isCameraActive }"
            autoplay
            playsinline
            muted
          ></video>

          <canvas
            ref="canvasElement"
            class="camera-canvas"
            :class="{ 'is-active': isCameraActive }"
          ></canvas>
        </div>

        <!-- Footer Section -->
        <div class="card-footer">
          <p class="format-info">
            <span class="format-dot" :class="{ 'is-active': isCameraActive }"></span>
            {{ footerText }}
          </p>

          <div class="action-buttons">
            <button
              @click="handleStartCamera"
              class="btn btn-primary"
              :disabled="!isFullyReady || isCameraActive || isProcessing"
            >
              <span class="btn-icon">▶</span>
              {{ isProcessing ? 'Memuat...' : 'Buka Kamera' }}
            </button>

            <button
              @click="handleStopCamera"
              class="btn btn-secondary"
              :disabled="!isCameraActive || isProcessing"
            >
              <span class="btn-icon">⬛</span>
              Tutup Kamera
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMediapipe } from '@/composables/useMediapipe'
import { useGestureDetection } from '@/composables/useGestureDetection'
import { useDetectionStatus } from '@/composables/useDetectionStatus'
import { useCameraControl } from '@/composables/useCameraControl'
import { useSystemInit } from '@/composables/useSystemInit'

// ============================================
// COMPOSABLES
// ============================================
const mediapipe = useMediapipe()
const systemInit = useSystemInit(mediapipe)
const gestureDetection = useGestureDetection()

// Status composable
const statusHelpers = useDetectionStatus({
  isReady: mediapipe.isReady,
  modelLoaded: systemInit.isModelLoaded,  
  isModelLoading: systemInit.isModelLoading,  
  isInitializing: systemInit.isInitializing,
  isCameraActive: mediapipe.isCameraActive,
  isProcessing: mediapipe.isProcessing,
  error: mediapipe.error,
  modelError: systemInit.modelError
})
// ============================================
// REFS
// ============================================
const videoElement = ref(null)
const canvasElement = ref(null)

// ============================================
// CAMERA CONTROL
// ============================================
const cameraControl = useCameraControl(mediapipe, {
  videoElement,
  canvasElement,
  onLandmarksDetected: gestureDetection.handleLandmarksDetected,
  onStop: gestureDetection.resetGestureDisplay
})

// ============================================
// DESTRUCTURE COMPOSABLES
// ============================================
const { isReady, isCameraActive, isProcessing, error } = mediapipe
const { modelLoaded, modelError, isInitializing } = systemInit
const { currentGesture, confidence } = gestureDetection
const { isFullyReady, statusText, statusClass, footerText, placeholderText } = statusHelpers
const { handleStartCamera, handleStopCamera } = cameraControl

// ============================================
// LIFECYCLE
// ============================================
onMounted(async () => {
  console.log('🎯 Component mounted')
  await systemInit.initializeSystem()
})
</script>

<style scoped>
.deteksi-layout {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.deteksi-container {
  width: 100%;
  max-width: 600px;
}

.deteksi-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  overflow: hidden;
}

/* Header Info */
.card-header {
  padding: 1rem;
  border-bottom: 1px solid #e5e5e5;
}

.info-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.info-row:last-child {
  margin-bottom: 0;
}

.info-label {
  color: #666;
  min-width: 70px;
}

.info-separator {
  color: #666;
}

.info-value {
  color: #333;
  font-weight: 500;
}

.status-ok {
  color: #10b981;
}

.status-error {
  color: #ef4444;
}

.status-loading {
  color: #f59e0b;
}

.status-active {
  color: #10b981;
}

/* Error Alert */
.error-alert {
  background: #fee;
  border: 1px solid #fcc;
  padding: 0.75rem 1rem;
  margin: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #c00;
}

.error-icon {
  font-size: 1.25rem;
}

.error-text {
  flex: 1;
}

/* Camera Preview */
.camera-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.camera-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #999;
  text-align: center;
  padding: 2rem;
}

.camera-icon {
  color: #ccc;
}

.placeholder-text {
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
  max-width: 200px;
}

.camera-stream,
.camera-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}

.camera-stream.is-active,
.camera-canvas.is-active {
  display: block;
}

.camera-stream {
  object-fit: cover;
}

.camera-canvas {
  pointer-events: none;
}

/* Footer */
.card-footer {
  border-top: 1px solid #e5e5e5;
}

.format-info {
  padding: 0.75rem 1rem;
  margin: 0;
  font-size: 0.75rem;
  color: #999;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.format-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ccc;
  margin-right: 0.5rem;
}

.format-dot.is-active {
  background: #10b981;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
}

.btn {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: #5b47d6;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #4a38b5;
}

.btn-secondary {
  background: white;
  color: #333;
  border: 1px solid #ddd;
}

.btn-secondary:hover:not(:disabled) {
  background: #f5f5f5;
}

.btn-icon {
  font-size: 1rem;
}

/* Responsive - Mobile */
@media (max-width: 480px) {
  .card-header {
    padding: 0.75rem;
  }

  .info-row {
    font-size: 0.8125rem;
  }

  .action-buttons {
    padding: 0.75rem;
    gap: 0.5rem;
  }

  .btn {
    padding: 0.625rem 0.75rem;
    font-size: 0.8125rem;
  }

  .btn-icon {
    font-size: 0.875rem;
  }

  .format-info {
    padding: 0.625rem 0.75rem;
  }
}

/* Responsive - Tablet */
@media (min-width: 640px) {
  .deteksi-card {
    border-radius: 16px;
  }

  .card-header {
    padding: 1.5rem;
  }

  .info-row {
    font-size: 0.9375rem;
  }

  .action-buttons {
    padding: 1.5rem;
  }

  .btn {
    padding: 0.875rem 1.25rem;
    font-size: 0.9375rem;
  }

  .format-info {
    padding: 1rem 1.5rem;
    font-size: 0.8125rem;
  }
}

/* Responsive - Desktop */
@media (min-width: 1024px) {
  .camera-preview {
    aspect-ratio: 16 / 9;
  }
}
</style>