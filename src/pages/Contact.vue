<template>
 <Layout>
  <div class="p-6 max-w-lg mx-auto">
    <h2 class="text-2xl font-bold text-center mb-4">Har du frågor eller idéer? Hör gärna av dig!</h2>
    <form class="grid gap-4">
      <input placeholder="Ditt namn" class="p-2 border rounded" />
      <input placeholder="Din e-post" class="p-2 border rounded" />
      <textarea placeholder="Meddelande" class="p-2 border rounded"></textarea>
      <button class="bg-futfBlue text-white py-2 rounded">Skicka</button>
    </form>
    <div class="mt-6 text-center">
      <p>📧 <a href="mailto:dinmail@student.uu.se">dinmail@student.uu.se</a></p>
      <p>📸 <a href="https://instagram.com/dinkampanj">@dinkampanj</a></p>
    </div>
  </div>
</Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import ValueCard from '../components/ValueCard.vue'
</script>

<style scoped>
.text-futf-blue {
  color: #1b4b7b;
}
.bg-futf-gold {
  background-color: #f2b705;
}
</style>
