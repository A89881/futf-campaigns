<template>
  <section id="experience" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-futf-blue mb-4">Relevanta erfarenheter</h2>
        <div class="w-20 h-1 bg-futf-gold mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div v-for="(item, index) in experiences" :key="index"
          class="text-center p-6 hover:bg-gray-50 rounded-xl transition-all">
          <div
            class="bg-[rgba(255,215,0,0.1)] rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
            <component :is="item.icon" class="h-8 w-8 text-futf-blue" />
          </div>

          <h3 class="text-xl font-semibold text-futf-blue mb-3">{{ item.title }}</h3>
          <p class="text-black-600">{{ item.description }}</p>
        </div>
      </div>

      <div class="text-center mt-10">
        <router-link to="/om-mig"
          class="inline-flex items-center text-futf-blue hover:text-futf-orange transition-colors font-medium group cursor-pointer">
          Se alla mina erfarenheter
          <span
            class="ml-2 transform transition-transform duration-200 group-hover:translate-x-1 group-hover:text-futf-orange">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Briefcase, Target, Brush, Megaphone } from 'lucide-vue-next';

const experiences = [
{
  icon: Briefcase,
  title: "Starkt föreningsengagemang",
  description: "Mycket erfarenhet av studentengemang, både i FUTF (IT, CaFé, m.m) och från gymnasiet, med ett fokus på struktur och kommunikation."
},
{
  icon: Megaphone,
  title: "Tidigare marknadsförings erfarenheter",
  description: "Erfarenheter inom marknadsföring på gymnasiet via mitt arbete som studentambassadör och inom skolreklam, grafisk profil och content production."
},
{
  icon: Brush,
  title: "Grafisk design & visuell kommunikation",
  description: "Erfaren inom skapande av grafik för både tryck och digitala platformar såsom affischer, merch, sociala medier, hemsidor."
},
{
  icon: Target,
  title: "Projektledning och organisation",
  description: "Komptens i att leda projekt och arbetsgrupper med stark initiativförmåga och en vilja att omvandla idéer till verklighet." 
}
];
</script>

<style scoped>
/* .text-futf-blue {
  color: #001f3f;
}

.bg-futf-blue {
  background-color: #001f3f;
} */

/* .bg-futf-gold {
  background-color: #FFD700;

} */

/* .text-futf-orange {
  color: #FF8C00;
} */

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
