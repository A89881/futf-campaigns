<template>
  <div class="relative py-12 max-w-[1800px] mx-auto">
    <!-- Scrollable timeline using vue-horizontal-timeline -->
    <div
      ref="scrollContainer"
      class="overflow-x-auto no-scrollbar px-6"
      @scroll="handleScroll"
    >
      <vue-horizontal-timeline :items="timelineItems" line-color="#1b4b7b">
        <template #item="{ item, index }">
          <div class="relative flex flex-col items-center">
            <!-- Circle and line (styled to match yours) -->
            <div class="flex items-center">
              <div class="w-4 h-4 bg-futf-gold border-2 border-futf-blue rounded-full z-10"></div>
              <div
                v-if="index !== timelineItems.length - 1"
                class="h-1 w-28 bg-futf-blue"
              ></div>
            </div>

            <!-- Content box -->
            <div
              :class="[
                'bg-white shadow-md rounded-xl p-4 mt-4 w-64',
                index % 2 === 0 ? '-translate-y-8' : 'translate-y-8'
              ]"
            >
              <h3 class="text-lg font-semibold text-futf-blue">{{ item.title }}</h3>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
              <p class="text-xs text-futf-gold font-medium mt-2">{{ item.year }}</p>
            </div>
          </div>
        </template>
      </vue-horizontal-timeline>
    </div>

    <!-- Progress bar and percentage -->
    <div class="w-full mt-4">
      <div class="relative w-full h-3 bg-gray-200 rounded">
        <div
          class="absolute top-0 left-0 h-3 bg-futf-gold rounded"
          :style="{ width: scrollProgress + '%' }"
        ></div>
        <div class="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-futf-blue font-semibold">
          {{ Math.round(scrollProgress) }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VueHorizontalTimeline from 'vue-horizontal-timeline';

const scrollContainer = ref(null);
const scrollProgress = ref(0);

const handleScroll = () => {
  const container = scrollContainer.value;
  const scrollLeft = container.scrollLeft;
  const scrollWidth = container.scrollWidth - container.clientWidth;
  scrollProgress.value = (scrollLeft / scrollWidth) * 100;
};

onMounted(() => {
  handleScroll();
});

const timelineItems = [
  {
    year: '2023',
    title: 'PR-ansvarig Studentförening',
    description: 'Ansvarade för marknadsföring och sociala medier. Ökade följarantalet med 35%.'
  },
  {
    year: '2022',
    title: 'Eventkoordinator FUTF',
    description: 'Planerade fyra större evenemang, inklusive höstfesten.'
  },
  {
    year: '2022',
    title: 'Grafisk designer studenttidning',
    description: 'Skapade layout och ny visuell identitet.'
  },
  {
    year: '2021',
    title: 'Kommunikationsassistent konferens',
    description: 'Marknadsföring för akademisk konferens med över 200 deltagare.'
  }
];
</script>

<style scoped>
.bg-futf-blue {
  background-color: #1b4b7b;
}

.bg-futf-gold {
  background-color: #f2b705;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
