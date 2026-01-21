<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-container">

      <!-- Hero Content -->
      <div class="hero-content">
        <h1 class="hero-title">
          Kenali Bahasa Isyarat dengan AI
        </h1>

        <p class="hero-subtitle">
          Teknologi CNN untuk mendeteksi gerakan BISINDO secara real-time dan akurat
        </p>

        <!-- CTA Buttons (Coba Demo) -->
        <div class="hero-cta">
          <RouterLink
            to="/deteksi"
            class="btn-primary"
          >
            <span class="btn-text">Coba Demo</span>
            <img
              src="@/assets/img/right-arrow.svg"
              alt="arrow"
              class="btn-icon"
            />
          </RouterLink>

          <RouterLink
            to="/gerakan"
            class="btn-secondary"
          >
            <span>Lihat Gerakan</span>
          </RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
  .hero {
  position: relative;
  background-color: var(--white);
  padding: 6rem 3rem 12rem 3rem;
  overflow: hidden;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Hero Content */
.hero-content {
  text-align: center;
  max-width: full;
  margin: 0 auto;
}

.hero-title {
  margin: 0 0 0.7rem 0;
}

.hero-subtitle {
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--black);
  opacity: 0.85;
  margin: 0 0 3rem 0;
}

/* CTA Buttons */
.hero-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap; 
}

.btn-primary {
  font-family: 'Be Vietnam Pro', sans-serif;
  width: 281px;
  height: 85px;
  border: none;
  font-size: 25px;
  border-radius: 20px;
  background: var(--indigo-velvet);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  justify-content: center;
  gap: 2rem;
  box-shadow: 9px 9px 0px 0px #000000;
}

.btn-text {
  transition: transform 0.4s ease;
  white-space: nowrap;
}

.btn-icon {
  width: 1.2em;
  height: 1.2em;
  flex-shrink: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.btn-primary:hover .btn-text {
  transform: translateX(calc((2rem + 1.2em) / 2)); /* Gap + icon width dibagi 2 */
}

.btn-primary:hover .btn-icon {
  transform: translateX(2em); /* Icon keluar ke kanan */
  opacity: 0;
}

.btn-secondary {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 25px;
  width: 281px;
  height: 85px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: var(--white);
  color: var(--black);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 9px 9px 0px 0px #000000;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 9px 11px 0px 0px #000000;
}

.btn-secondary:active {
  transform: translateY(0);
  box-shadow: 9px 9px 0px 0px #000000;
}

/* Wave Background */
.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.hero-wave svg {
  display: block;
  width: 100%;
  height: auto;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero {
    padding: 5rem 2.5rem 11rem 2.5rem;
  }

  .hero-cta {
    gap: 1.2rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 250px;
    height: 75px;
    font-size: 22px;
    box-shadow: 8px 8px 0px 0px #000000;
  }

  .btn-primary:hover .btn-text {
    transform: translateX(calc((2rem + 1.1em) / 2)); /* Gap 2rem + icon 1.1em */
  }

  .btn-icon {
    width: 1.1em;
    height: 1.1em;
  }
}

@media (max-width: 968px) {
  .hero {
    padding: 4rem 2rem 10rem 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .hero-cta {
    gap: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 220px;
    height: 68px;
    font-size: 20px;
    box-shadow: 7px 7px 0px 0px #000000;
  }

  .btn-icon {
    width: 1em;
    height: 1em;
  }

  .btn-primary:hover .btn-text {
    transform: translateX(calc((2rem + 1em) / 2)); /* Gap 2rem + icon 1em */
  }

  .btn-primary:hover .btn-icon {
    transform: translateX(2em);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1.5rem 8rem 1.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .hero-cta {
    flex-direction: row !important; /* Paksa tetap horizontal */
    gap: 0.8rem;
    padding: 0 1rem;
  }

  .btn-primary,
  .btn-secondary {
    flex: 1; /* Bagi ruang sama rata */
    min-width: 0; /* Allow shrinking */
    width: auto;
    height: 56px;
    font-size: 16px;
    border-radius: 12px;
    box-shadow: 5px 5px 0px 0px #000000;
  }

  .btn-primary {
    gap: 0.8rem;
  }

  .btn-icon {
    width: 0.9em;
    height: 0.9em;
  }

  .btn-primary:hover .btn-text {
    transform: translateX(1.2em);
  }

  .btn-secondary:hover {
    box-shadow: 5px 7px 0px 0px #000000;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2.5rem 1rem 7rem 1rem;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .hero-cta {
    gap: 0.6rem;
    padding: 0 0.5rem;
  }

  .btn-primary,
  .btn-secondary {
    height: 50px;
    font-size: 14px;
    border-radius: 10px;
    box-shadow: 4px 4px 0px 0px #000000;
  }

  .btn-primary {
    gap: 0.6rem;
  }

  .btn-icon {
    width: 0.85em;
    height: 0.85em;
  }

  .btn-primary:hover .btn-text {
    transform: translateX(calc((0.6rem + 0.85em) / 2)); /* Gap 0.6rem + icon 0.85em */
  }

  .btn-primary:hover .btn-icon {
    transform: translateX(1.2em);
    opacity: 0;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 2rem 0.75rem 6rem 0.75rem;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }

  .hero-cta {
    gap: 0.5rem;
    padding: 0 0.25rem;
  }

  .btn-primary,
  .btn-secondary {
    height: 46px;
    font-size: 13px;
    border-radius: 8px;
    box-shadow: 3px 3px 0px 0px #000000;
  }

  .btn-primary {
    gap: 0.5rem;
  }

  .btn-icon {
    width: 0.8em;
    height: 0.8em;
  }

  .btn-primary:hover .btn-text {
    transform: translateX(0.9em);
  }

  .btn-secondary:hover {
    box-shadow: 3px 5px 0px 0px #000000;
  }
}
</style>
