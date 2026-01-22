<template>
  <!-- Navbar Component -->
  <nav class="navbar">
    <div class="navbar-container">

      <!-- Brand Logo -->
      <RouterLink to="/" class="navbar-brand">
        <h1 class="navbar-brand-text">Bisyarat</h1>
        <img
          src="@/assets/img/logo.svg"
          alt="Bisyarat"
          class="navbar-brand-logo"
        />
      </RouterLink>

      <!-- Navigation Items -->
      <div class="navbar-menu">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="navbar-item"
          active-class="active"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- Call to Action Button -->
      <div class="navbar-cta">
        <button class="btn-contact" @click="showModal = true">
          <span class="btn-contact-text">Hubungi Kami!</span>
          <img
            src="@/assets/img/call-us.svg"
            alt="Hubungi Kami"
            class="btn-contact-icon"
          />
        </button>
      </div>

    </div>
  </nav>

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
import { RouterLink } from 'vue-router'

const navItems = [
  { name: 'GERAKAN', path: '/gerakan' },
  { name: 'DETEKSI', path: '/deteksi' },
]

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

<style>
  .navbar {
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  cursor: pointer;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.navbar-brand:hover {
  transform: scale(1.02);
}

.navbar-brand h1 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  color: var(--black);
  margin: 0;
}

.navbar-brand-text {
  display: block;
}

.navbar-brand-logo {
  display: none;
  height: 2rem;
  width: auto;
}

.navbar-menu {
  display: flex;
  gap: 6rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.navbar-item {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
  border: none;
  background: transparent;
  color: var(--silver);
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  white-space: nowrap;
}

.navbar-item:hover {
  color: var(--black);
}

.navbar-item.active {
  color: var(--black);
}

.navbar-cta {
  display: flex;
  flex-shrink: 0;
}

.btn-contact {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  width: 200px;
  height: 61px;
  border: none;
  border-radius: 12px;
  background-color: var(--black);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-contact-text {
  display: inline;
}

.btn-contact-icon {
  display: none;
  height: 1.5rem;
  width: auto;
}

.btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-contact:active {
  transform: translateY(0);
}

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
  background-color: var(--white);
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
  color: var(--black);
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
  color: var(--black);
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
  background-color: var(--black);
  color: var(--white);
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

/* Responsive */
@media (max-width: 1024px) {
  .navbar {
    margin: 20px 30px 0;
  }

  .navbar-container {
    padding: 1rem 2rem;
  }

  .navbar-menu {
    gap: 4rem;
  }

  .btn-contact {
    width: 3rem;
    height: 3rem;
    padding: 0;
    background-color: transparent;
    border: 1px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
  
  .btn-contact-text {
    display: none;
  }
  
  .btn-contact-icon {
    display: inline;
    height: 1.4rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    margin: 10px 15px 0;
  }

  .navbar-container {
    padding: 1rem 1rem;
  }

  .navbar-brand h1 {
    font-size: 1.5rem;
  }

  .navbar-menu {
    position: static;
    transform: none;
    gap: 2rem;
  }

  .navbar-item {
    font-size: 0.85rem;
    padding: 0.4rem 0;
  }

  /* MOBILE: Brand jadi logo */
  .navbar-brand-text {
    display: none;
  }
  
  .navbar-brand-logo {
    display: block;
    height: 1.8rem;
  }

  .btn-contact {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 8px;
  }
  
  .btn-contact-icon {
    height: 1.2rem;
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

@media (max-width: 480px) {
  .navbar {
    margin: 0;
  }

  .navbar-container {
    padding: 0.75rem 1rem;
  }

  .navbar-menu {
    gap: 1.2rem;
  }

  .navbar-item {
    font-size: 0.75rem;
    letter-spacing: 0.3px;
  }

  .navbar-brand-logo {
    height: 1.5rem;
  }

  /* Button icon ukuran kecil */
  .btn-contact {
    width: 2.2rem;
    height: 2.2rem;
  }

  .btn-contact-icon {
    height: 1rem;
  }
}

/* Extra small devices */
@media (max-width: 360px) {
  .navbar {
    margin: 5px 5px 0;
  }

  .navbar-container {
    padding: 0.5rem 0.5rem;
  }

  .navbar-menu {
    gap: 0.8rem;
  }

  .navbar-item {
    font-size: 0.7rem;
  }

  .btn-contact {
    width: 2rem;
    height: 2rem;
  }

  .btn-contact-icon {
    height: 0.9rem;
  }
}
</style>