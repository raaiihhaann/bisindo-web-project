// composables/useGestureModel.js
import * as tf from '@tensorflow/tfjs'

const LABELS = ['a', 'e', 'i', 'o', 'u']
const THRESHOLD = 0.5

let model = null
let isLoaded = false

export async function loadGestureModel() {
  if (isLoaded) {
    console.log('ℹ️ Model already loaded')
    return
  }

  try {
    console.log('📦 Loading TensorFlow.js version:', tf.version.tfjs)
    console.log('📦 Loading CNN model from /mediapipe/models/model.json...')
    
    model = await tf.loadLayersModel('/mediapipe/models/model.json')
    
    console.log('✅ Model loaded successfully')
    console.log('📊 Model input shape:', model.inputs[0].shape)
    console.log('📊 Model output shape:', model.outputs[0].shape)
    model.summary()

    // Warmup
    console.log('🔥 Warming up model...')
    const warmupInput = tf.zeros([1, 126, 1])
    const warmupOutput = model.predict(warmupInput)
    console.log('✅ Warmup output shape:', warmupOutput.shape)
    warmupOutput.dispose()
    warmupInput.dispose()
    
    isLoaded = true
    console.log('✅ CNN model ready')
    
  } catch (error) {
    console.error('❌ Failed to load model:', error)
    console.error('Error details:', error.stack)
    throw new Error(`Gagal memuat model CNN: ${error.message}`)
  }
}

export function predictGesture(landmarks126) {
  if (!model) {
    console.warn('⚠️ Model not loaded yet')
    return null
  }

  if (landmarks126.length !== 126) {
    console.warn(`⚠️ Invalid landmarks length: ${landmarks126.length}, expected 126`)
    return null
  }

  return tf.tidy(() => {
    // 🔥 SHAPE: [1, 126, 1]
    const input = tf.tensor(landmarks126, [1, 126, 1], 'float32')

    const prediction = model.predict(input)
    const probs = prediction.dataSync()

    // Find max probability
    let maxIdx = 0
    let maxVal = probs[0]

    for (let i = 1; i < probs.length; i++) {
      if (probs[i] > maxVal) {
        maxVal = probs[i]
        maxIdx = i
      }
    }

    // Debug log
    console.log('🎯 Prediction:', LABELS[maxIdx], `(${(maxVal * 100).toFixed(2)}%)`)

    if (maxVal < THRESHOLD) {
      return {
        label: 'Tidak dikenali',
        confidence: maxVal
      }
    }

    return {
      label: LABELS[maxIdx].toUpperCase(),
      confidence: maxVal
    }
  })
}

export function isModelLoaded() {
  return isLoaded
}

export function getLabels() {
  return LABELS
}

export function getThreshold() {
  return THRESHOLD
}