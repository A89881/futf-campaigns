<template>
  <div class="document-grid">
    <article v-for="document in appendixDocuments" :key="document.title" class="document-card" :class="{ unavailable: !document.available }">
      <div class="document-icon"><FileText :size="25" /></div>
      <p class="kind">{{ document.type }} · {{ document.date }}</p>
      <h2>{{ document.title }}</h2>
      <p>{{ document.description }}</p>
      <a v-if="document.available" :href="document.href" target="_blank" rel="noopener noreferrer">Open PDF <ArrowUpRight :size="15" /></a>
      <span v-else>Private document</span>
    </article>
  </div>
</template>

<script setup>
import { ArrowUpRight, FileText } from 'lucide-vue-next'
import { appendixDocuments } from '../data/portfolio'
</script>
