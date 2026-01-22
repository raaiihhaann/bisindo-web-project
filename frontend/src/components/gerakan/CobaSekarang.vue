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
import { useRouter } from 'vue-router'

const router = useRouter()
const showModal = ref(false)

const DETEKSI = () => {
    router.push('/deteksi')
}

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

@media (max-width: 768px) {
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
</style>