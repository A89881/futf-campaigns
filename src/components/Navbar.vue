<template>
  <header :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm',
    isScrolled ? 'bg-white/100 shadow-lg py-2' : 'bg-gray/100 py-3'
  ]">
    <nav class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <router-link to="/" :class="[
        'text-2xl md:text-3xl font-bold transition-colors duration-200',
        isScrolled ? 'text-futf-blue' : 'text-futf-blue'
      ]">
        Mishra <span :class="isScrolled ? 'text-futf-gold' : 'text-futf-gold'">2025</span>
      </router-link>

      <!-- Desktop menu -->
      <div class="hidden md:flex items-center gap-8 font-medium"
        :class="isScrolled ? 'text-futf-gold' : 'text-futf-gold'">
        <router-link to="/" class="flex items-center gap-2 hover:text-futfOrange transition-colors">
          <Home class="w-5 h-5" /> Hem
        </router-link>
        <router-link to="/om-mig" class="flex items-center gap-2 hover:text-futfOrange transition-colors">
          <User class="w-5 h-5" /> Om mig
        </router-link>
        <router-link to="/kontakt"
          class="flex items-center gap-2 bg-futf-blue text-futf-gold hover:bg-futf-gold hover:text-futf-blue px-4 py-2 rounded-md transition">
          <Mail class="w-5 h-5" /> Kontakta mig
        </router-link>
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden focus:outline-none" @click="toggleMenu" aria-label="Meny">
        <component :is="isMenuOpen ? X : Menu"
          :class="['h-6 w-6 transition-colors', isScrolled ? 'text-futf-blue' : 'text-futf-gold']" />
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="md:hidden bg-futf-gold border-t border-gray-200 px-4 py-4">
        <router-link to="/" class="block py-2 font-medium text-futf-blue hover:text-futfOrange" @click="toggleMenu">
          <Home class="inline w-5 h-5 mr-2" /> Hem
        </router-link>
        <router-link to="/om-mig" class="block py-2 font-medium text-futf-blue hover:text-futfOrange"
          @click="toggleMenu">
          <User class="inline w-5 h-5 mr-2" /> Om mig
        </router-link>
        <router-link to="/kontakt"
          class="block py-2 mt-2 bg-futf-blue text-futf-gold text-center rounded-md hover:bg-futf-gold hover:text-futf-blue transition"
          @click="toggleMenu">
          <Mail class="inline w-5 h-5 mr-2" /> Kontakta mig
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X, Home, User, Mail } from 'lucide-vue-next';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* header {
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, padding 0.3s ease;
} */

.shadow-lg {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hover\:text-futfOrange:hover {
  color: #ef6c00;
}


.transition {
  transition: all 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
