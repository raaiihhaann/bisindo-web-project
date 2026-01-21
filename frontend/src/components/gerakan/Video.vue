<template>
    <section class="video-section">
        <!-- Show videos only for "Huruf" tab -->
        <div v-if="activeTab === 'Huruf'" class="video-grid">
            <div 
                v-for="(video, index) in videos" 
                :key="index" 
                class="video-card"
            >
                <div class="video-thumbnail">
                    <!-- Show iframe when playing, thumbnail when not -->
                    <div 
                        v-if="playingIndex === index" 
                        class="video-player"
                    >
                        <iframe
                            :src="`https://www.youtube.com/embed/${video.videoId}?autoplay=1`"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div 
                        v-else 
                        class="thumbnail-wrapper"
                        @click="playVideo(index)"
                    >
                        <img 
                            :src="video.thumbnail" 
                            :alt="video.title"
                            class="thumbnail-image"
                        />
                        <div class="play-overlay">
                            <div class="play-button">
                                <svg 
                                    width="48" 
                                    height="48" 
                                    viewBox="0 0 48 48" 
                                    fill="none"
                                >
                                    <circle 
                                        cx="24" 
                                        cy="24" 
                                        r="24" 
                                        fill="white" 
                                        fill-opacity="0.9"
                                    />
                                    <path 
                                        d="M19 15.5V32.5L33 24L19 15.5Z" 
                                        fill="#1a1a1a"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="video-info">
                    <div class="video-letter">{{ video.letter }}</div>
                    <p class="video-title">{{ video.title }}</p>
                </div>
            </div>
        </div>

        <!-- Show "Coming Soon" for "Angka" and "Kata" tabs -->
        <div v-else class="coming-soon">
            <div class="coming-soon-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="var(--bright-amber)"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="var(--bright-amber)"/>
                </svg>
            </div>
            <h3 class="coming-soon-title">Masih Dalam Proses Development</h3>
            <p class="coming-soon-description">
                Konten untuk tab {{ activeTab }} sedang dalam pengembangan. 
                Mohon tunggu update selanjutnya!
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    activeTab: {
        type: String,
        required: true,
        default: 'Huruf'
    }
})

const playingIndex = ref(null)

const videos = ref([
    {
        videoId: 'ormEnv6ltz4',
        thumbnail: 'https://img.youtube.com/vi/ormEnv6ltz4/maxresdefault.jpg',
        letter: 'A',
        title: 'Belajar huruf A dengan mudah'
    },
    {
        videoId: 'ormEnv6ltz4',
        thumbnail: 'https://img.youtube.com/vi/ormEnv6ltz4/maxresdefault.jpg',
        letter: 'B',
        title: 'Cara membuat isyarat huruf B'
    },
    {
        videoId: 'ormEnv6ltz4',
        thumbnail: 'https://img.youtube.com/vi/ormEnv6ltz4/maxresdefault.jpg',
        letter: 'C',
        title: 'Tutorial gerakan huruf C'
    },
    {
        videoId: 'ormEnv6ltz4',
        thumbnail: 'https://img.youtube.com/vi/ormEnv6ltz4/maxresdefault.jpg',
        letter: 'D',
        title: 'Panduan isyarat huruf D'
    },
    {
        videoId: 'ormEnv6ltz4',
        thumbnail: 'https://img.youtube.com/vi/ormEnv6ltz4/maxresdefault.jpg',
        letter: 'E',
        title: 'Belajar gerakan huruf E'
    },
    {
        videoId: 'ormEnv6ltz4',
        thumbnail: 'https://img.youtube.com/vi/ormEnv6ltz4/maxresdefault.jpg',
        letter: 'F',
        title: 'Cara mudah isyarat huruf F'
    }
])

const playVideo = (index) => {
    playingIndex.value = index
}
</script>

<style scoped>
.video-section {
    padding: clamp(1rem, 3vw, 2rem) clamp(1rem, 5vw, 3rem);
}

.video-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(1rem, 3vw, 1.5rem);
    max-width: 1400px;
    margin: 0 auto;
}

.video-card {
    background: white;
    border-radius: clamp(12px, 2vw, 16px);
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.video-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.video-thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background-color: #e9ecef;
}

.thumbnail-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.video-player {
    position: relative;
    width: 100%;
    height: 100%;
}

.video-player iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.thumbnail-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.thumbnail-wrapper:hover .thumbnail-image {
    transform: scale(1.05);
}

.play-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.thumbnail-wrapper:hover .play-overlay {
    opacity: 1;
}

.play-button {
    transition: transform 0.2s ease;
}

.thumbnail-wrapper:hover .play-button {
    transform: scale(1.1);
}

.video-info {
    padding: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.25rem);
    display: flex;
    align-items: center;
    gap: clamp(0.5rem, 2vw, 0.75rem);
}

.video-letter {
    width: clamp(32px, 5vw, 40px);
    height: clamp(32px, 5vw, 40px);
    background-color: var(--indigo-velvet, #4c1d95);
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    flex-shrink: 0;
}

.video-title {
    margin: 0;
    color: var(--text-color, #1a1a1a);
    font-size: clamp(0.875rem, 2vw, 1rem);
    font-weight: 500;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}

/* Tablet - 640px ke atas (2 kolom) */
@media (min-width: 640px) {
    .video-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: clamp(1.25rem, 3vw, 1.75rem);
    }
}

/* Desktop - 1024px ke atas (3 kolom) */
@media (min-width: 1024px) {
    .video-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(1.5rem, 2vw, 2rem);
    }
    
    .video-section {
        padding: clamp(2rem, 4vw, 3rem) clamp(2rem, 5vw, 3rem);
    }
}

/* Coming Soon Styles */
.coming-soon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem);
    min-height: 400px;
}

.coming-soon-icon {
    margin-bottom: 1.5rem;
    opacity: 0.8;
}

.coming-soon-icon svg {
    width: clamp(48px, 8vw, 64px);
    height: clamp(48px, 8vw, 64px);
}

.coming-soon-title {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 600;
    color: var(--text-color, #1a1a1a);
    margin: 0 0 1rem 0;
}

.coming-soon-description {
    font-size: clamp(0.875rem, 2vw, 1rem);
    color: #666;
    max-width: 500px;
    line-height: 1.6;
    margin: 0;
}
</style>