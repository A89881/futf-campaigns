<!-- src/components/Layout.vue -->
<template>
    <div>
      <Navbar />
        <main class="pt-20">
            <slot />
        </main>
    </div>
</template>
  
<script setup>
    import Navbar from '../components/Navbar.vue'
</script>
  