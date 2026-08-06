<template>
  <div><Navbar /><main id="main" class="page-main"><slot /></main><Footer /></div>
</template>

<script setup>
import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
</script>
