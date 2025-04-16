<template>
  <section id="experience" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-futf-blue mb-4">Relevanta erfarenheter</h2>
        <div class="w-20 h-1 bg-futf-gold mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div v-for="(item, index) in experiences" :key="index" class="text-center p-6 hover:bg-gray-50 rounded-xl transition-all">
          <div class="bg-futf-gold/10 rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
            <component :is="item.icon" class="h-8 w-8 text-futf-blue" />
          </div>
          <h3 class="text-xl font-semibold text-futf-blue mb-3">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>

      <div class="text-center mt-10">
        <!-- <router-link 
          to="/erfarenheter" 
          class="inline-flex items-center text-futf-blue hover:text-futf-orange font-medium"
        >
          Se alla mina erfarenheter
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { Briefcase, Users, Brush, Calendar } from 'lucide-vue-next';

const experiences = [
  {
    icon: Briefcase,
    title: "Tidigare föreningsengagemang",
    description: "Erfarenhet från styrelsearbete och projektledning i studentorganisationer."
  },
  {
    icon: Brush,
    title: "Grafisk produktion & kommunikation",
    description: "Kunskaper i design och effektiv kommunikation för marknadsföring."
  },
  {
    icon: Calendar,
    title: "Eventplanering",
    description: "Planering och genomförande av framgångsrika evenemang från idé till uppföljning."
  },
  {
    icon: Users,
    title: "Teknisk fysiker med öga för struktur",
    description: "Analytiska förmågor kombinerat med ett kreativt synsätt för effektiva lösningar."
  }
];
</script>

<style scoped>
.text-futf-blue {
  color: #001f3f;
}
.bg-futf-blue {
  background-color: #001f3f;
}
.bg-futf-gold {
  background-color: #FFD700;
}
.text-futf-orange {
  color: #FF8C00;
}
</style>
