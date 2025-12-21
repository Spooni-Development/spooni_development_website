<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue'

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
const isEnabled = inject<{ value: boolean }>('snowfall-enabled', { value: true })

const createSnowflake = (id: number): Snowflake => ({
    id,
    x: Math.random() * 100,
    y: -10,
    size: Math.random() * 3 + 2,
    speed: Math.random() * 0.15 + 0.1,
    opacity: Math.random() * 0.6 + 0.4,
    drift: Math.random() * 0.15 - 0.075
})

const animate = () => {
    snowflakes.value = snowflakes.value.map(flake => {
        let newY = flake.y + flake.speed
        let newX = flake.x + flake.drift
        
        if (newY > 110) {
        return createSnowflake(flake.id)
        }
        
        if (newX > 100) newX = 0
        if (newX < 0) newX = 100
        
        return { ...flake, y: newY, x: newX }
    })
    
    animationFrame.value = requestAnimationFrame(animate)
}

onMounted(() => {
    snowflakes.value = Array.from({ length: 50 }, (_, i) => ({
        ...createSnowflake(i),
        y: Math.random() * 100
    }))
    
    animate()
})

onUnmounted(() => {
    if (animationFrame.value) {
        cancelAnimationFrame(animationFrame.value)
    }
})
</script>

<template>
    <div v-if="isEnabled.value" class="snowfall">
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
}
</style>