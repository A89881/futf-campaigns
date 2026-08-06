<template>
  <header class="page-intro shell">
    <p class="eyebrow"><span></span>{{ t(eyebrow) }}</p>
    <h1>{{ t(title) }}<em v-if="accent">{{ accent }}</em></h1>
    <p>{{ t(intro) }}</p>
  </header>
</template>

<script setup>
import { useLocale } from '../composables/useLocale'
defineProps({ eyebrow: String, title: String, accent: String, intro: String })
const { t } = useLocale()
</script>
