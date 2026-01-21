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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="footer-link">
            <span>Facebook</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-link">
            <span>Linked In</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="footer-link">
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
          <a href="#" class="footer-link">
            <span>DPC Gerkatin</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#" class="footer-link">
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
      <a href="#" class="footer-bottom-link">Kebijakan Privasi</a>
      <a href="#" class="footer-bottom-link">Ketentuan Pengguna</a>
    </div>
  </footer>
</template>

<script setup>

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