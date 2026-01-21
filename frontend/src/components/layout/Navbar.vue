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
        <button class="btn-contact">
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
</template>

<script setup>
import { RouterLink } from 'vue-router'

const navItems = [
  { name: 'GERAKAN', path: '/gerakan' },
  { name: 'DETEKSI', path: '/deteksi' },
]
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

/* KIRI - Brand Logo */
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

/* Default: Tampilkan text, sembunyikan logo */
.navbar-brand-text {
  display: block;
}

.navbar-brand-logo {
  display: none;
  height: 2rem;
  width: auto;
}

/* TENGAH - Menu Navigation */
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

/* KANAN - CTA Button */
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

/* Default: Tampilkan text, sembunyikan icon */
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

  /* TABLET & HP: Button jadi icon */
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

  /* Button icon ukuran sedang */
  .btn-contact {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 8px;
  }
  
  .btn-contact-icon {
    height: 1.2rem;
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
