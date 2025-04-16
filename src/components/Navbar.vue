<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <router-link
        to="/"
        :class="[
          'text-2xl md:text-3xl font-bold transition-colors duration-200',
          isScrolled ? 'text-futfBlue' : 'text-white'
        ]"
      >
        Mishra <span :class="isScrolled ? 'text-futfGold' : 'text-futfGold'">2025</span>
      </router-link>

      <!-- Desktop menu -->
      <div
        class="hidden md:flex items-center gap-8 font-medium"
        :class="isScrolled ? 'text-futfBlue' : 'text-white'"
      >
        <router-link
          to="/"
          class="flex items-center gap-2 hover:text-futfOrange transition-colors"
        >
          <Home class="w-5 h-5" /> Hem
        </router-link>
        <router-link
          to="/om-mig"
          class="flex items-center gap-2 hover:text-futfOrange transition-colors"
        >
          <User class="w-5 h-5" /> Om mig
        </router-link>
        <router-link
          to="/kontakt"
          class="flex items-center gap-2 bg-futfBlue text-white hover:bg-futfGold hover:text-futfBlue px-4 py-2 rounded-md transition"
        >
          <Mail class="w-5 h-5" /> Kontakta mig
        </router-link>
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden focus:outline-none" @click="toggleMenu" aria-label="Meny">
        <component
          :is="isMenuOpen ? X : Menu"
          :class="['h-6 w-6 transition-colors', isScrolled ? 'text-futfBlue' : 'text-white']"
        />
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-gray-200 px-4 py-4">
        <router-link
          to="/"
          class="block py-2 font-medium text-futfBlue hover:text-futfOrange"
          @click="toggleMenu"
        >
          <Home class="inline w-5 h-5 mr-2" /> Hem
        </router-link>
        <router-link
          to="/om-mig"
          class="block py-2 font-medium text-futfBlue hover:text-futfOrange"
          @click="toggleMenu"
        >
          <User class="inline w-5 h-5 mr-2" /> Om mig
        </router-link>
        <router-link
          to="/kontakt"
          class="block py-2 mt-2 bg-futfBlue text-white text-center rounded-md hover:bg-futfGold hover:text-futfBlue transition"
          @click="toggleMenu"
        >
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
.text-futfBlue {
  color: #1b4b7b;
}

.text-futfGold {
  color: #f2b705;
}

.hover\:text-futfOrange:hover {
  color: #ef6c00;
}

.bg-futfBlue {
  background-color: #1b4b7b;
}

.bg-futfGold {
  background-color: #f2b705;
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
</style>
