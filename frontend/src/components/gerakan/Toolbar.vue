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
      @click="$emit('open-filter')"
    >
      <img
        src="@/assets/img/filter-icon.svg"
        alt="Filter"
        class="filter-icon"
      />
      <span class="filter-text">Filter</span>
    </button>
  </section>
</template>


<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue', 'open-filter'])

const tabs = ['Huruf', 'Angka', 'Kata']
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

@media (max-width: 768px) {
  .filter-text {
    display: none;
  }
}

@media (max-width: 1024px) {
    
}

</style>
