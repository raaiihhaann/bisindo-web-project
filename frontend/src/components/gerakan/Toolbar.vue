<template>
  <section class="toolbar">
    <!-- LEFT: Tabs -->
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: tab === modelValue }]"
        @click="$emit('update:modelValue', tab)"
      >
        {{ tab }}
      </button>
    </div>

    <!-- RIGHT: Filter -->
    <button
      class="filter-btn"
      @click="showModal = true"
    >
      <img
        src="@/assets/img/filter-icon.svg"
        alt="Filter"
        class="filter-icon"
      />
      <span class="filter-text">Filter</span>
    </button>
  </section>

  <!-- Modal -->
  <div v-if="showModal" class="modal-overlay" @click="showModal = false">
    <div class="modal-content" @click.stop>
      <button class="modal-close-x" @click="showModal = false">×</button>
      <div class="modal-icon">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" stroke="#FFC107" stroke-width="4" fill="none"/>
          <path d="M32 20V36" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
          <circle cx="32" cy="44" r="2.5" fill="#FFC107"/>
        </svg>
      </div>
      <h3 class="modal-title">Oops!</h3>
      <p class="modal-text">Fitur sedang dalam masa pengembangan!</p>
      <button class="modal-button" @click="showModal = false">Mengerti</button>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue', 'open-filter'])

const tabs = ['Huruf', 'Angka', 'Kata']

const showModal = ref(false)

const handleEscape = (e) => {
  if (e.key === 'Escape' && showModal.value) {
    showModal.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  font-size: clamp(0.8rem, 2vw, 1.15rem);
}

.tabs {
  display: flex;
  gap: 2.5rem;
}

.tab {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  position: relative;
  font-size: inherit;
}

.tab.active {
  color: #111;
  font-weight: 600;
}

.tab.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: #111;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: none;
  border: 1px solid transparent; 
  border-radius: 8px;

  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-size: inherit;

  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.filter-btn:hover {
  border-color: #111;
}

.filter-icon {
  width: clamp(16px, 2vw, 24px);
  height: clamp(16px, 2vw, 24px);
}

.ml-auto {
  margin-left: auto;
}

.filter-text {
    font-weight: 600;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  position: relative;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close-x {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  line-height: 1;
  padding: 0;
}

.modal-close-x:hover {
  background-color: #f0f0f0;
  color: #000;
  transform: rotate(90deg);
}

.modal-icon {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-icon svg {
  width: 64px;
  height: 64px;
}

.modal-title {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000;
  margin: 0 0 0.5rem 0;
}

.modal-text {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1rem;
  color: #666;
  margin: 0 0 2rem 0;
  line-height: 1.5;
}

.modal-button {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 2.5rem;
  border: none;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 200px;
}

.modal-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .filter-text {
    display: none;
  }

  .modal-content {
    margin: 0 1rem;
    padding: 2rem 1.5rem;
  }

  .modal-title {
    font-size: 1.3rem;
  }

  .modal-text {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .modal-icon svg {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1024px) {
    
}

</style>