<template>
  <!-- Transparent header that becomes a sticky topbar on scroll -->
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      // retro-topbar = gul bar + svart text + border (från style.css)
      isScrolled
        ? 'retro-topbar py-2 shadow-lg'
        : 'retro-topbar py-3'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <!-- Brand -->
      <router-link
        to="/"
        class="flex items-baseline gap-2 transition-colors"
      >
        <span class="retro-sign text-2xl md:text-3xl">
          Mishra
        </span>
        <span class="retro-display text-xl md:text-2xl">
          <span class="px-2 py-1 rounded-md bg-[var(--black)] text-[var(--primary)] border border-[var(--border)]">
            2025
          </span>
        </span>
      </router-link>

      <!-- Desktop menu -->
      <div class="hidden md:flex items-center gap-8 font-semibold">
        <router-link
          to="/"
          class="flex items-center gap-2 transition-colors hover:text-[var(--red)]"
        >
          <Home class="w-5 h-5" /> Hem
        </router-link>

        <router-link
          to="/om-mig"
          class="flex items-center gap-2 transition-colors hover:text-[var(--red)]"
        >
          <User class="w-5 h-5" /> Om mig
        </router-link>

        <router-link
          to="/kontakt"
          class="flex items-center gap-2 px-4 py-2 font-bold btn-primary"
        >
          <Mail class="w-5 h-5" /> Kontakta mig
        </router-link>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden focus:outline-none"
        @click="toggleMenu"
        aria-label="Meny"
      >
        <component
          :is="isMenuOpen ? X : Menu"
          class="h-7 w-7 transition-colors text-[var(--black)]"
        />
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden px-4 py-4 border-t-2 border-[var(--border)] bg-[var(--paper)] text-[var(--ink)]"
      >
        <router-link
          to="/"
          class="block py-2 font-semibold hover:text-[var(--red)] transition-colors"
          @click="toggleMenu"
        >
          <Home class="inline w-5 h-5 mr-2" /> Hem
        </router-link>

        <router-link
          to="/om-mig"
          class="block py-2 font-semibold hover:text-[var(--red)] transition-colors"
          @click="toggleMenu"
        >
          <User class="inline w-5 h-5 mr-2" /> Om mig
        </router-link>

        <router-link
          to="/kontakt"
          class="block py-2 mt-3 text-center font-bold btn-primary"
          @click="toggleMenu"
        >
          <Mail class="inline w-5 h-5 mr-2" /> Kontakta mig
        </router-link>

        <!-- Optional: red callout -->
        <!-- <p class="mt-4 text-sm font-semibold text-[var(--red)]">Rösta för tydlighet.</p> -->
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Home, User, Mail } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
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