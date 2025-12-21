<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

interface Snowflake {
    id: number
    x: number
    y: number
    size: number
    speed: number
    opacity: number
    drift: number
}

const snowflakes = ref<Snowflake[]>([])
const animationFrame = ref<number>()
const isMobile = ref(false)
const lastTime = ref<number>(0)
const isVisible = ref(true)
const prefersReducedMotion = ref(false)

const createSnowflake = (id: number): Snowflake => ({
    id,
    x: Math.random() * 100,
    y: -10,
    size: Math.random() * 3 + 2,
    speed: Math.random() * 0.15 + 0.1,
    opacity: Math.random() * 0.6 + 0.4,
    drift: Math.random() * 0.15 - 0.075
})

const animate = (currentTime: number) => {
    // Stop animation when tab is not visible
    if (!isVisible.value) {
        animationFrame.value = requestAnimationFrame(animate)
        return
    }
    
    if (!lastTime.value) lastTime.value = currentTime
    
    const deltaTime = currentTime - lastTime.value
    lastTime.value = currentTime
    
    // Normalize to 60 FPS (16.67ms per frame)
    const normalizedDelta = deltaTime / 16.67
    
    snowflakes.value = snowflakes.value.map(flake => {
        let newY = flake.y + (flake.speed * normalizedDelta)
        let newX = flake.x + (flake.drift * normalizedDelta)
        
        if (newY > 110) {
            return createSnowflake(flake.id)
        }
        
        if (newX > 100) newX = 0
        if (newX < 0) newX = 100
        
        return { ...flake, y: newY, x: newX }
    })

    animationFrame.value = requestAnimationFrame(animate)
}

const handleVisibilityChange = () => {
    isVisible.value = !document.hidden
    if (isVisible.value) {
        lastTime.value = 0 // Reset time to avoid jumps
    }
}

const getSnowflakeCount = (): number => {
    const width = window.innerWidth
    
    // Mobile
    if (width < 768) return 30
    
    // Tablet
    if (width < 1024) return 40
    
    // Standard Desktop
    if (width < 1920) return 50
    
    // Wide Desktop (1920-2560px)
    if (width < 2560) return 70
    
    // Ultra-Wide (>2560px)
    return 100
}

onMounted(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = motionQuery.matches
    
    // Listen for changes
    motionQuery.addEventListener('change', (e) => {
        prefersReducedMotion.value = e.matches
    })
    
    // If user prefers reduced motion, don't show animation
    if (prefersReducedMotion.value) {
        return
    }
    
    // Detect mobile devices
    isMobile.value = window.innerWidth < 768
    
    // Snowflake count based on screen size
    const snowflakeCount = getSnowflakeCount()
    
    snowflakes.value = Array.from({ length: snowflakeCount }, (_, i) => ({
        ...createSnowflake(i),
        y: Math.random() * 100
    }))
    
    // Tab visibility listener
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    animate(0)
})

onBeforeUnmount(() => {
    // Cleanup: remove event listeners
    document.removeEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
    if (animationFrame.value) {
        cancelAnimationFrame(animationFrame.value)
    }
})
</script>

<template>
    <div v-if="!prefersReducedMotion" class="snowfall">
        <div
        v-for="flake in snowflakes"
        :key="flake.id"
        class="snowflake"
        :style="{
            left: `${flake.x}%`,
            top: `${flake.y}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity
        }"
        />
    </div>
</template>

<style scoped>
.snowfall {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
}

.snowflake {
    position: absolute;
    background: white;
    border-radius: 50%;
    filter: blur(1px);
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
    will-change: transform;
}

/* Reduce blur on mobile devices for better performance */
@media (max-width: 768px) {
    .snowflake {
        filter: blur(0.5px);
    }
}
</style>