<template>
  <section class="feature-section">
    <div class="title-container">
      <h1>Deteksi Secara Instan</h1>
      <p>Langkah awal dalam mengenali elemen dasar bahasa isyarat.</p>
    </div>

    <div class="cards-container">

      <div class="cards">
        <h3 class="card-label">Akurasi Presisi</h3>
        <div class="card-icon icon-accent">
          <img src="@/assets/img/accuration-icon.svg" alt="Akurasi Presisi" />
        </div>
      </div>

      <div class="cards">
        <h3 class="card-label">Hasil Kilat</h3>
        <div class="card-icon">
          <img src="@/assets/img/fast-icon.svg" alt="Hasil Kilat" class="fast-icon" />
        </div>
      </div>

      <div class="cards">
        <h3 class="card-label">Privasi Aman</h3>
        <div class="card-icon">
          <img src="@/assets/img/secure-icon.svg" alt="Keamanan Terjaga" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
    .cards-container {
        margin: 0 0 5rem 0;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        gap: 1rem;
    }

    .cards {
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1 / 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 25px;
        
        box-shadow: 10px 10px 0 #000;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .card-icon {
        position: relative;
        display: inline-block;
    }

    .icon-accent::before {
        content: "";
        position: absolute;
        background: #59DDBE;
        border-radius: 50%;
        z-index: -1;
    }

    .icon-accent img {
        position: relative;
        z-index: 1;
        display: block;
    }

    .card-label {
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0 0 2.5rem 0;
    }

    .cards:hover {
        transform: translate(-2px, -2px);
        box-shadow: 12px 12px 0 rgba(0,0,0,0.9);
    }

/* =========================
   HP (<= 767px) - DIPERLUAS
   ========================= */
@media (max-width: 767px) {
  .cards-container {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }

  .cards {
    max-width: 130px;
    box-shadow: 6px 6px 0 #000;
    border-radius: 18px;
  }

  .card-label {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }

  .card-icon img {
    width: 45px;
    height: 45px;
  }

  .icon-accent::before {
    width: 45px;
    height: 45px;
    top: 0;
    left: 0;
    transform: translate(8px, 8px);
  }
}

/* =========================
   TABLET (>= 768px)
   ========================= */
@media (min-width: 768px) {
  .cards-container {
    gap: 2rem;
  }

  .cards {
    max-width: 260px;
    box-shadow: 8px 8px 0 #000;
  }

  .card-label {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  .card-icon img {
    width: 70px;
    height: 70px;
  }

  .icon-accent::before {
    width: 70px;
    height: 70px;
    top: 0;
    left: 0;
    transform: translate(12px, 12px);
  }
}

/* =========================
   LAPTOP / PC (>= 1024px)
   ========================= */
@media (min-width: 1024px) {
  .cards-container {
    gap: 2.5rem;
  }

  .cards {
    max-width: 300px;
    box-shadow: 10px 10px 0 #000;
  }

  .card-label {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  .card-icon img {
    width: 90px;
    height: 90px;
  }

  .icon-accent::before {
    width: 90px;
    height: 90px;
    top: 0;
    left: 0;
    transform: translate(15px, 15px);
  }
}
</style>