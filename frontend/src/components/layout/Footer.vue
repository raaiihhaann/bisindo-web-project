<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Brand Section -->
      <div class="footer-section brand-section">
        <div class="brand-logo">
          <img src="@/assets/img/logo.svg" alt="BISINDO Logo" />
        </div>
        <p class="brand-tagline">Telusuri BISINDO dengan bisyarat.</p>
        <p class="copyright">© Bisyarat 2024-2025. Semua hak dilindungi</p>
      </div>

      <!-- Social Media Section -->
      <div class="footer-section">
        <h3 class="section-title">Sosial Media</h3>
        <nav class="footer-nav">
          <a href="#" @click.prevent="showModal = true" class="footer-link">
            <span>Facebook</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#" @click.prevent="showModal = true" class="footer-link">
            <span>Linked In</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#" @click.prevent="showModal = true" class="footer-link">
            <span>Whatsapp</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </nav>
      </div>

      <!-- Partners Section -->
      <div class="footer-section">
        <h3 class="section-title">Mitra</h3>
        <nav class="footer-nav">
          <a href="#" @click.prevent="showModal = true" class="footer-link">
            <span>DPC Gerkatin</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#" @click.prevent="showModal = true" class="footer-link">
            <span>DPC Gerkatin Bandung</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </nav>
      </div>
    </div>

    <!-- Bottom Links -->
    <div class="footer-bottom">
      <a href="#" @click.prevent="showModal = true" class="footer-bottom-link">Kebijakan Privasi</a>
      <a href="#" @click.prevent="showModal = true" class="footer-bottom-link">Ketentuan Pengguna</a>
    </div>
  </footer>

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
.footer {
  background-color: #000;
  color: #fff;
  padding: 3rem 2rem 1.5rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

/* Brand Section */
.brand-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-logo img {
  width: 80px;
  height: auto;
  filter: brightness(0) invert(1); /* Make logo white if needed */
}

.brand-tagline {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.copyright {
  font-size: 0.875rem;
  color: #999;
  margin: 0;
  margin-top: auto;
}

/* Footer Sections */
.footer-section {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

.footer-link:hover {
  color: #FACC15;
  transform: translateX(5px);
}

.footer-link svg {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.footer-link:hover svg {
  transform: translateX(5px);
}

/* Footer Bottom */
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid #333;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.footer-bottom-link {
  color: #999;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #fff;
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

/* Tablet */
@media (max-width: 768px) {
  .footer {
    padding: 2.5rem 1.5rem 1.5rem;
  }

  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .brand-section {
    grid-column: 1 / -1;
    text-align: center;
    align-items: center;
  }

  .brand-logo img {
    width: 70px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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

/* Mobile */
@media (max-width: 480px) {
  .footer {
    padding: 2rem 1rem 1rem;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .brand-section {
    grid-column: 1;
  }

  .section-title {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  .footer-link {
    font-size: 0.9375rem;
  }

  .brand-logo img {
    width: 60px;
  }

  .brand-tagline {
    font-size: 0.9375rem;
  }

  .copyright {
    font-size: 0.8125rem;
  }
}
</style>