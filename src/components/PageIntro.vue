<template>
  <header class="page-intro shell">
    <p class="eyebrow"><span></span>{{ eyebrow }}</p>
    <h1>{{ title }}<em v-if="accent">{{ accent }}</em></h1>
    <p>{{ intro }}</p>
  </header>
</template>

<script setup>
defineProps({ eyebrow: String, title: String, accent: String, intro: String })
</script>
