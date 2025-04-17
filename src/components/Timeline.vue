<template>
    <div class="relative grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Progress bar with percentage -->
        <div class="lg:col-span-1 flex justify-center relative">
            <div class="relative h-full w-1 bg-futf-blue rounded-full mt-8 mb-8">
                <div class="absolute bottom-0 bg-futf-gold w-full rounded-full transition-all duration-300"
                    :style="{ height: scrollPercentage + '%' }"></div>
            </div>
            <div class="absolute bottom-0 left-4 text-sm font-semibold text-futf-blue">
                {{ Math.round(scrollPercentage) }}%
            </div>
        </div>

        <!-- Timeline Items -->
        <div class="lg:col-span-3 space-y-12 relative">
            <div v-for="(item, index) in filteredItems" :key="index" class="relative pl-8">
                <!-- Timeline point (aligned with line) -->
                <div
                    class="absolute left-[-2.5rem] top-2 w-4 h-4 bg-futf-gold rounded-full border-2 border-white shadow-md">
                </div>
                <div>
                    <h4 class="text-futf-blue text-lg font-semibold mb-1">{{ item.year }}</h4>
                    <h3 class="text-lg font-bold text-gray-900">{{ item.title }}</h3>
                    <p class="text-gray-600 mt-1">{{ item.description }}</p>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="lg:col-span-1 space-y-4">
            <button v-for="year in years" :key="year" @click="currentYear = year"
                class="w-full text-left px-4 py-2 rounded-lg border-2 transition-colors duration-300" :class="{
                    'bg-futf-gold text-futf-blue border-futf-gold': currentYear === year,
                    'bg-white text-gray-700 border-gray-200 hover:bg-gray-50': currentYear !== year
                }">
                {{ year }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const timelineItems = ref([
    {
        year: '2023',
        title: 'PR-ansvarig Studentförening',
        description: 'Ansvarade för marknadsföring och sociala medier...'
    },
    {
        year: '2022',
        title: 'Eventkoordinator FUTF',
        description: 'Planerade och genomförde fyra större evenemang...'
    },
    {
        year: '2022',
        title: 'Grafisk designer studenttidning',
        description: 'Skapade layout och visuellt material...'
    },
    {
        year: '2021',
        title: 'Kommunikationsassistent konferens',
        description: 'Assisterade med kommunikation och marknadsföring...'
    }
])

const currentYear = ref('2023')

const years = computed(() =>
    [...new Set(timelineItems.value.map(item => item.year))].sort((a, b) => b - a)
)

const filteredItems = computed(() =>
    timelineItems.value.filter(item => item.year === currentYear.value)
)

const scrollPercentage = ref(0)

const updateScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollPercentage.value = docHeight === 0 ? 100 : (scrollTop / docHeight) * 100
}

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
    updateScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
})
</script>

<style scoped>
.bg-futf-blue {
    background-color: #1b4b7b;
}

.bg-futf-gold {
    background-color: #f2b705;
}

.text-futf-blue {
    color: #1b4b7b;
}

.text-futf-gold {
    color: #f2b705;
}
</style>