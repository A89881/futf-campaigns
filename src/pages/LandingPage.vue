<template>
  <div id="top">
    <Navbar />
    <main id="main">
      <section class="hero shell" aria-labelledby="hero-title">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span></span>{{ t(profile.eyebrow) }}</p>
          <h1 id="hero-title">Abhay<br /><em>Mishra.</em></h1>
          <p class="hero-intro">{{ t(profile.intro) }}</p>
          <div class="hero-actions">
            <a class="button primary" href="/projects">{{ t('Explore my work') }}
              <ArrowDownRight :size="18" />
            </a>
            <a class="button text-link" :href="profile.cv" download>{{ t('Download CV') }}
              <Download :size="17" />
            </a>
            <a class="button text-link" :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn
              <ArrowUpRight :size="17" />
            </a>
          </div>
        </div>
        <div class="hero-visual reveal delay-1">
          <FieldCanvas />
          <div class="visual-label top-label">{{ t('FIELD / 01') }}</div>
          <div class="orbit-mark">AM</div>
        </div>
        <div class="hero-foot">
          <span>{{ copy(profile.location, '', 'profile.location') }}</span>
        </div>
      </section>

      <MobilePortfolio v-if="isMobile" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-vue-next'
import FieldCanvas from '../components/FieldCanvas.vue'
import Footer from '../components/Footer.vue'
import MobilePortfolio from '../components/MobilePortfolio.vue'
import Navbar from '../components/Navbar.vue'
import { useLocale } from '../composables/useLocale'
import { profile } from '../data/portfolio'

const { t, copy } = useLocale()
const isMobile = ref(false)
let mediaQuery
const updateMobile = () => { isMobile.value = mediaQuery.matches }
onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 850px)')
  updateMobile()
  mediaQuery.addEventListener('change', updateMobile)
})
onUnmounted(() => mediaQuery?.removeEventListener('change', updateMobile))
</script>
