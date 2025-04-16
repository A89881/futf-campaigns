<template>
  <section id="vision" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-futfBlue mb-4">Mina visioner</h2>
        <div class="w-20 h-1 bg-futfGold mx-auto"></div>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Som informationsansvarig vill jag arbeta för att stärka FUTF:s kommunikation och synlighet.
          Här är mina huvudsakliga fokusområden:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(vision, index) in visions" :key="index"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-start mb-4">
            <CheckCircle class="w-6 h-6 text-futfGold mr-3" />
            <h3 class="text-xl font-semibold text-futfBlue">{{ vision.title }}</h3>
          </div>
          <p class="text-gray-600 mt-2">{{ vision.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const visions = [
  {
    title: 'Bygga ett marknadsföringsutskott',
    description: 'Skapa en strukturerad organisation för att förbättra föreningens synlighet och kommunikation.',
  },
  {
    title: 'Tydliggöra informationsansvarigs roll',
    description: 'Etablera tydliga ansvarsområden och förväntningar för en effektiv informationshantering.',
  },
  {
    title: 'Skapa webbshop och profilmerch',
    description: 'Utveckla FUTF:s varumärke genom attraktiva produkter och enkel beställningsprocess.',
  },
  {
    title: 'Etablera sociala medier-strategi',
    description: 'Bygga en konsekvent närvaro på sociala medier för att nå ut till fler studenter.',
  },
  {
    title: 'Regelbundna PR-möten inom sektionen',
    description: 'Säkerställa god kommunikation och planering genom strukturerade möten.',
  },
]
</script>

<style scoped>
/* Exempel på FUTF-färger om du inte redan har dem i Tailwind config */
.text-futfBlue {
  color: #003865;
}

.text-futfGold {
  color: #f9b233;
}

.bg-futfGold {
  background-color: #f9b233;
}
</style>