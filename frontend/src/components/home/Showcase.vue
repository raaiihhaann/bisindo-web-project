<template>
    <section class="showcase">
        <div class="title-container">
            <h1>Bagaimana Menggunakannya?</h1>
            <p>
                Berikut ini cara penggunaan sistem deteksi bahasa isyarat BISINDO berbasis AI secara singkat!
            </p>
        </div>

        <div class="card-container">
            <div class="how-it-works">
                <div class="feature-card square">
                    <span class="badge">01</span>
                    <div class="icon">
                        <img src="@/assets/img/camera-icon.svg" alt="camera icon">
                    </div>
                    <p class="label">Buka Kamera</p>
                </div>

                <div class="feature-card square">
                    <span class="badge">02</span>
                    <div class="icon">
                        <img src="@/assets/img/palm-icon.svg" alt="palm icon">
                    </div>
                    <p class="label">Isyarat</p>
                </div>

                <div class="feature-card square">
                    <span class="badge">03</span>
                    <div class="icon">
                        <img src="@/assets/img/detection-icon.svg" alt="detection icon">
                    </div>
                    <p class="label">Deteksi AI</p>
                </div>

                <div class="feature-card square">
                    <span class="badge">04</span>
                    <div class="icon">
                        <img src="@/assets/img/result-icon.svg" alt="result icon">
                    </div>
                    <p class="label">Hasil Deteksi</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style>
.showcase {
    background-color: var(--indigo-velvet);
    margin-inline: clamp(1rem, 5vw, 6rem);
    border-radius: 1.5rem;
    color: white;
}

/* ==================================================
   SQUARE UTILITY
================================================== */
.square {
    aspect-ratio: 1 / 1;
    width: 100%;
}

/* ==================================================
   TITLE
================================================== */
.title-container {
    text-align: center;
    padding-block: clamp(3rem, 6vw, 4rem);
    padding-inline: clamp(1rem, 5vw, 2rem);
}

.title-container h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.75rem, 4vw, 3.75rem);
}

.title-container p {
    font-size: clamp(1rem, 2.2vw, 1.5rem);
    font-weight: 300;
    opacity: 0.85;
    max-width: 48rem;
    margin-inline: auto;
    line-height: 1.6;
}

/* ==================================================
   MAIN LAYOUT
================================================== */
.card-container {
    display: grid;
    padding-bottom: clamp(3rem, 6vw, 4rem);
}

/* ==================================================
   FEATURE GRID (AUTO RESPONSIVE)
================================================== */
.how-it-works {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(1rem, 3vw, 2rem);
    padding-inline: clamp(1rem, 5vw, 6rem);
    justify-items: center;
}

/* ==================================================
   FEATURE CARD
================================================== */
.feature-card {
    background-color: var(--white);
    color: var(--black);
    border-radius: 1.5rem;
    padding: clamp(1.25rem, 2vw, 2.25rem);

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 10px 10px 0 rgba(0,0,0,0.9);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 12px 12px 0 rgba(0,0,0,0.9);
}

/* ==================================================
   BADGE
================================================== */
.badge {
    position: absolute;
    top: -12px;
    right: -12px;

    width: clamp(36px, 4vw, 48px);
    height: clamp(36px, 4vw, 48px);
    border-radius: 50%;

    background: var(--white);
    border: 1px solid var(--silver);

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: clamp(0.75rem, 1.5vw, 1rem);
    color: var(--black);
}

/* ==================================================
   ICON & LABEL
================================================== */
.icon {
    width: clamp(36px, 6vw, 64px);
    height: clamp(36px, 6vw, 64px);
}

.icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.label {
    margin-top: 2rem;
    font-size: clamp(0.75rem, 1.5vw, 1.125rem);
    font-weight: 500;
    text-align: center;
    line-height: 1.4;
    color: var(--black);
}

/* ==================================================
   TOUCH & ACCESSIBILITY
================================================== */
@media (hover: none) {
    .feature-card:hover {
        transform: none;
        box-shadow: 10px 10px 0 rgba(0,0,0,0.9);
    }
}

@media (max-width: 1024px) {
    .feature-card {
        max-width: 180px;
        padding: 1.25rem;
    }

    .icon {
        width: 48px;
        height: 48px;
    }

    .label {
        font-size: 0.9rem;
    }
}



@media (max-width: 768px) {
    .how-it-works {
        grid-template-columns: repeat(2, minmax(0, 160px));
        justify-content: center;
        padding-inline: 1rem;
        gap: 1rem;
    }

    .feature-card {
        padding: 1rem;
        box-shadow: 6px 6px 0 rgba(0,0,0,0.9);
    }

    .badge {
        top: -8px;
        right: -8px;
    }
}




/* ==================================================
   ULTRA SMALL DEVICES SAFETY
================================================== */
@media (max-width: 360px) {
    .label {
        font-size: 0.75rem;
    }
}
</style>
