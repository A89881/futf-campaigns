<template>
  <header class="section-heading">
    <div><span class="section-number">{{ number }}</span><h2>{{ title }}</h2></div>
    <p v-if="intro">{{ intro }}</p>
  </header>
</template>

<script setup>
defineProps({ number: String, title: String, intro: String })
</script>
