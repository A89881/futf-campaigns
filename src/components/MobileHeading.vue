<template>
  <header class="mobile-heading">
    <p class="kind">{{ number }} / {{ t(eyebrow) }}</p>
    <h2>{{ t(title) }}</h2>
  </header>
</template>

<script setup>
import { useLocale } from '../composables/useLocale'
defineProps({ number: { type: String, required: true }, title: { type: String, required: true }, eyebrow: { type: String, required: true } })
const { t } = useLocale()
</script>
