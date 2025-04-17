<template>
    <div class="relative">
        <!-- Year Tabs -->
        <div class="flex gap-2 mb-8 overflow-x-auto pb-2">
            <button v-for="year in years" :key="year" @click="currentYear = year"
                class="px-4 py-2 rounded-lg border-2 transition-colors duration-300 whitespace-nowrap" :class="{
                    'bg-futf-gold text-futf-blue border-futf-gold': currentYear === year,
                    'bg-white text-gray-700 border-gray-200 hover:bg-gray-50': currentYear !== year
                }">
                {{ year }}
            </button>
        </div>

        <!-- Main Timeline Container -->
        <div class="flex">
            <!-- Left Column - Timeline Line & Nodes -->
            <div class="relative w-8 flex-shrink-0">
                <!-- Blue vertical line -->
                <div class="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-futf-blue rounded-full"></div>

                <!-- Yellow nodes -->
                <div class="relative h-full">
                    <div v-for="(item, index) in filteredItems" :key="'node-' + index"
                        class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-futf-gold rounded-full border-2 border-white shadow-md z-10"
                        :style="{ top: getNodePosition(index) }"></div>
                </div>
            </div>

            <!-- Right Column - Timeline Content -->
            <div class="flex-1">
                <div class="space-y-8">
                    <div v-for="(item, index) in filteredItems" :key="'content-' + index"
                        class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                        :ref="el => { entryRefs[index] = el }">
                        <h4 class="text-futf-blue text-lg font-semibold mb-1">
                            {{ item.year }}
                        </h4>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">{{ item.title }}</h3>
                        <p class="text-gray-600">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const timelineItems = ref([
    {
        year: '2023',
        title: 'PR-ansvarig Studentförening',
        description: 'Ansvarade för marknadsföring och sociala medier för universitetets studentförening. Ökade följarantalet med 35% genom konsekvent digital närvaro och engagerande innehåll.',
    },
    {
        year: '2022',
        title: 'Eventkoordinator FUTF',
        description: 'Planerade och genomförde fyra större evenemang för föreningen, inklusive årliga höstfesten. Hanterade budget, marknadsföring och samordning av volontärer.',
    },
    {
        year: '2022',
        title: 'Eventkoordinator FUTF',
        description: 'Planerade och genomförde fyra större evenemang för föreningen, inklusive årliga höstfesten. Hanterade budget, marknadsföring och samordning av volontärer.',
    },
    {
        year: '2022',
        title: 'Grafisk designer studenttidning',
        description: 'Skapade layout och visuellt material för universitetets studenttidning. Utvecklade ny visuell identitet som ökade tidningens igenkänningsfaktor.',
    },
    {
        year: '2021',
        title: 'Kommunikationsassistent konferens',
        description: 'Assisterade med kommunikation och marknadsföring för en studentledd akademisk konferens med över 200 deltagare.',
    }
])

const currentYear = ref('2023')
const entryRefs = ref([])

const years = computed(() =>
    [...new Set(timelineItems.value.map(item => item.year))].sort((a, b) => b - a)
)

const filteredItems = computed(() =>
    timelineItems.value.filter(item => item.year === currentYear.value)
)

const getNodePosition = (index) => {
    if (!entryRefs.value[index]) return '0px'
    const element = entryRefs.value[index]
    const rect = element.getBoundingClientRect()
    const containerRect = element.parentElement.getBoundingClientRect()
    const offsetTop = rect.top - containerRect.top + (rect.height / 2)
    return `${offsetTop}px`
}

const openLink = (url) => {
    window.open(url, '_blank')
}

// Update node positions when content changes
onMounted(() => {
    nextTick(() => {
        window.addEventListener('resize', updateNodePositions)
        updateNodePositions()
    })
})

const updateNodePositions = () => {
    // Force recomputation of node positions
    filteredItems.value = [...filteredItems.value]
}
</script>

<style scoped>
/* Custom colors */
.bg-futf-blue {
    background-color: #1b4b7b;
}

.bg-futf-gold {
    background-color: #f2b705;
}

.text-futf-blue {
    color: #1b4b7b;
}

/* Smooth transitions for nodes */
.absolute {
    transition: top 0.3s ease;
}
</style>