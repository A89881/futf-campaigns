<template>
  <div>
    <Navbar />
    <main id="main" class="page-main">
      <slot />
      <ManagedBlocks v-if="managedPageKey" :page-key="managedPageKey" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './Footer.vue'
import ManagedBlocks from './ManagedBlocks.vue'
import Navbar from './Navbar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const managedPageKey = computed(() => ({
  '/about': 'about', '/resume': 'resume', '/projects': 'projects',
  '/experience': 'experience', '/appendix': 'appendix', '/contact': 'contact',
}[route.path] || ''))
</script>
