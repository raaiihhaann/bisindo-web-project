<template>
    <section class="card-container">
        <div class="card-content">
            <div class="text-content">
                <h2 class="card-title">Siap Mencoba Gerakan Isyarat?</h2>
                <p class="card-description">
                    Uji gerakan isyarat anda secara langsung di website Bisyarat menggunakan AI
                </p>
            </div>
            <button class="btn-try" @click="DETEKSI">
                <img src="@/assets/img/gerakan_page/camera-icon.svg" alt="camera-icon" class="icon" />
                <span class="btn-text">Coba Sekarang</span>
            </button>
        </div>
    </section>
</template>

<script>
import { useRouter } from 'vue-router'

const router = useRouter()

const DETEKSI = () => {
    router.push('/gerakan/deteksi')
}
</script>

<style scoped>
.card-container {
    background-color: var(--indigo-velvet);
    padding: 1.5rem;
    border-radius: 20px;
    margin: 
        clamp(1rem, 5vw, 1rem) 
        clamp(1rem, 5vw, 3rem);
    
}

.card-content {
    display: flex;
    flex-direction: column; 
    gap: 1.5rem;
}

.text-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.card-title {
    color: white;
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    font-weight: 600;
    margin: 0;
    line-height: 1.4;
}

.card-description {
    color: rgba(255, 255, 255, 0.85);
    font-size: clamp(0.75rem, 2.5vw, 1rem);
    margin: 0;
    line-height: 1.5;
}

.btn-try {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background-color: white;
    color: var(--indigo-velvet);
    border: none;
    border-radius: 20px;
    font-weight: 500;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%; 
}

.btn-text {
    color: var(--black);
    font-weight: 600;
}

.btn-try:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-try:active {
    transform: translateY(0);
}

.icon {
    flex-shrink: 0;
}

/* Tablet - 640px ke atas */
@media (min-width: 640px) {
    .card-container {
        padding: 2rem;
    }

    .card-content {
        flex-direction: row; 
        align-items: center;
        justify-content: space-between;
    }

    .btn-try {
        width: auto; 
        flex-shrink: 0;
    }

    .card-title {
        font-size: 1.5rem;
    }

    .card-description {
        font-size: 0.95rem;
    }

    
}

/* Desktop - 1024px ke atas */
@media (min-width: 1024px) {
    .card-container {
        padding: 2.5rem;
    }

    .card-title {
        font-size: 1.625rem;
    }
}
</style>