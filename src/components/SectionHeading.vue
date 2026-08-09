<template>
  <header class="section-heading">
    <div><span class="section-number">{{ number }}</span>
      <h2>{{ t(title) }}</h2>
    </div>
    <p v-if="intro">{{ t(intro) }}</p>
  </header>
</template>

<script setup>
import { useLocale } from '../composables/useLocale'
defineProps({ number: String, title: String, intro: String })
const { t } = useLocale()
</script>
