<template>
  <div class="work-experience-list">
    <article v-for="item in workExperience" :key="item.id" class="resume-work-item">
      <div class="resume-work-period"><span class="kind">{{ item.category === 'research' ? 'Research' : 'Employment' }}</span><time>{{ displayRange(item) }}</time></div>
      <div><h3>{{ item.title }}</h3><p class="organisation">{{ item.organisation }} · {{ item.location }}</p><p>{{ item.description }}</p><ul v-if="item.highlights.length"><li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li></ul></div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useExperienceStore } from '../composables/useExperienceStore'
const { experiences } = useExperienceStore()
const workExperience = computed(() => experiences.value.filter((item) => item.category === 'professional' || item.category === 'research'))
const formatDate = (value) => new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`))
const displayRange = (item) => `${item.startDate ? formatDate(item.startDate) : item.start} - ${item.endDate ? formatDate(item.endDate) : item.end}`
</script>
