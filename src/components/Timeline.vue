<template>
    <div class="relative">
      <!-- Year Tabs -->
      <div class="flex gap-2 mb-8 overflow-x-auto pb-2">
        <button
          v-for="year in years"
          :key="year"
          @click="currentYear = year"
          class="px-4 py-2 rounded-lg border-2 transition-colors duration-300 whitespace-nowrap"
          :class="{
            'bg-futf-gold text-futf-blue border-futf-gold': currentYear === year,
            'bg-white text-gray-700 border-gray-200 hover:bg-gray-50': currentYear !== year,
          }"
        >
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
            <div
              v-for="(item, index) in filteredItems"
              :key="'node-' + index"
              class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-futf-gold rounded-full border-2 border-white shadow-md z-10"
              :style="{ top: getNodePosition(index) }"
            ></div>
          </div>
        </div>
  
        <!-- Right Column - Timeline Content -->
        <div class="flex-1">
          <div class="space-y-8">
            <div
              v-for="(item, index) in filteredItems"
              :key="'content-' + index"
              class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              :ref="el => { entryRefs[index] = el }"
            >
              <h4 class="text-futf-blue text-lg font-semibold mb-1">
                {{ item.displayYear || item.year }}
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
      year: 'Pre-2021',
      displayYear: '2007',
      title: 'Mumbai bre',
      description: 'Född i Mumbai (ja, mitt i monsunen). Därifrån gick jag direkt till skolan (one day old svär), who finna carry the boats.',
    },
    {
      year: 'Pre-2021',
      displayYear: '2010-2016',
      title: 'Manchester (is Blue?)',
      description: 'Flyttade till England for the (lovely weatha). Lärde mig engelska, käkade beans on toast och blev ett stort fan av regn (nästan). Brexit skickade oss vidare norrut...',
    },
    {
      year: 'Pre-2021',
      displayYear: '2016-2021',
      title: 'Ume till Uppsala',
      description: 'Bodde i Umeå, lärde mig överleva -20°C och pluggade Snow (if u know uk) med passion. 2021 bar det av till Uppsala för gymnasiet och... kanske yngsta medlemmen i F?',
    },
    {
      year: '2021',
      title: 'Kreativa projekt i design & webb',
      description: 'Började experimentera med grafisk design i Adobe och Figma, samt gjorde egna småprojekt i HTML, CSS och Vue för att bygga enkla men snygga hemsidor.',
    },
    {
      year: '2022',
      title: 'Studentrepresentant Teknikprogrammet',
      description: 'Valdes till representant och deltog i dialog mellan elever, lärare och skolledning kring utveckling av utbildningen.',
    },
    {
      year: '2022',
      title: 'Sleeq UF - Design & Juridik',
      description: 'Startade ett UF-företag med mina polare med fokus på kläder. Ansvarade för designprofil och den juridiska strukturen kring webbshopen.',
    },
    {
      year: '2023',
      title: 'Studentambassadör',
      description: 'Representerade skolan vid gymnasiemässor och öppet hus. Höll presentationer och svarade på frågor från blivande elever.',
    },
    {
      year: '2024',
      title: 'Ansikte utåt för skolan',
      description: 'Medverkade i skolans reklamkampanjer och skrev studenttestimonials som publicerades på webben och i sociala medier.',
    },
    {
      year: '2024',
      title: 'FUTF-engagemang',
      description: 'Aktiv i CaFé- och IT-gruppen, kurs- och skyddsombud samt fredagsfikare. Bidrog till föreningslivet både i det lilla och stora.',
    },
    {
      year: '2025',
      title: 'Webbdesign & kommunikation',
      description: 'Byggde denna kampanjsida, FUTF:s arbetsmarknads-tefatsida samt bidrog till nya FUTF.se (detaljer kommer!). Strukturerade för UI och grafisk profil.',
    },
    {
      year: '2025',
      title: 'Förhoppningsvis: FUTF:s Informationsansvarig?',
      description: 'Redo att ta FUTF:s kommunikation till nästa nivå genom struktur, synlighet och ett nytt marknadsföringsutskott. Let’s go.',
    },
  ])
  
  const currentYear = ref('2025')
  const entryRefs = ref([])
  
  const years = computed(() =>
    [...new Set(timelineItems.value.map(item => item.year))].sort((a, b) => {
      if (a === 'Pre-2021') return -1
      if (b === 'Pre-2021') return 1
      return b - a
    })
  )
  
  const filteredItems = computed(() =>
    timelineItems.value
      .filter(item => item.year === currentYear.value)
      .sort((a, b) => {
        const parseYear = val =>
          parseInt((val.displayYear || val.year).toString().split('–')[0])
        return parseYear(a) - parseYear(b)
      })
  )
  
  const getNodePosition = (index) => {
    if (!entryRefs.value[index]) return '0px'
    const element = entryRefs.value[index]
    const rect = element.getBoundingClientRect()
    const containerRect = element.parentElement.getBoundingClientRect()
    const offsetTop = rect.top - containerRect.top + rect.height / 2
    return `${offsetTop}px`
  }
  
  onMounted(() => {
    nextTick(() => {
      window.addEventListener('resize', updateNodePositions)
      updateNodePositions()
    })
  })
  
  const updateNodePositions = () => {
    filteredItems.value = [...filteredItems.value]
  }
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
  .absolute {
    transition: top 0.3s ease;
  }
  </style>
  