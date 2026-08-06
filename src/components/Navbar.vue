<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <a href="#main" class="skip-link">Skip to content</a>
    <nav class="nav shell" aria-label="Main navigation">
      <router-link class="wordmark" to="/" aria-label="Abhay Mishra, home"><span>AM</span><i></i></router-link>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="nav-links" @click="menuOpen = !menuOpen"><span>{{ menuOpen ? 'Close' : 'Menu' }}</span><component :is="menuOpen ? X : Menu" :size="20" /></button>
      <div id="nav-links" class="nav-links" :class="{ open: menuOpen }">
        <div class="desktop-navigation">
          <router-link v-for="link in links" :key="link.to" :to="link.to" @click="menuOpen = false">{{ t(link.label) }}</router-link>
        </div>
        <div class="mobile-navigation">
          <router-link v-for="link in mobileLinks" :key="link.to" :to="link.to" @click="menuOpen = false">{{ t(link.label) }}</router-link>
        </div>
        <button class="theme-toggle" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme"><component :is="theme === 'dark' ? Sun : Moon" :size="16" /></button>
        <button class="language-toggle" type="button" :aria-label="locale === 'en' ? 'Byt till svenska' : 'Switch to English'" @click="toggleLocale">{{ locale === 'en' ? 'SV' : 'EN' }}</button>
        <a class="nav-cv" :href="profile.cv" download>CV <Download :size="15" /></a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Download, Menu, Moon, Sun, X } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'
import { useLocale } from '../composables/useLocale'
import { profile } from '../data/portfolio'
const menuOpen = ref(false); const isScrolled = ref(false); const { theme, toggleTheme } = useTheme()
const { locale, t, toggleLocale } = useLocale()
const links = [{ label: 'About', to: '/about' }, { label: 'Resume', to: '/resume' }, { label: 'Projects', to: '/projects' }, { label: 'Experience', to: '/experience' }, { label: 'Appendix', to: '/appendix' }, { label: 'Contact', to: '/contact' }]
const mobileLinks = [{ label: 'About', to: '/#about' }, { label: 'Resume', to: '/#resume' }, { label: 'Projects', to: '/#projects' }, { label: 'Experience', to: '/#experience' }, { label: 'Appendix', to: '/#appendix' }, { label: 'Contact', to: '/#contact' }]
const onScroll = () => { isScrolled.value = window.scrollY > 24 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true })); onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
