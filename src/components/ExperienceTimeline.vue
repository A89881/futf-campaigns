<template>
  <div>
    <div class="experience-toolbar">
      <div class="experience-filters" role="group" aria-label="Filter experiences">
        <button v-for="option in filters" :key="option.value" type="button" :class="{ active: filter === option.value }" @click="filter = option.value">
          {{ t(option.label) }} <span>{{ count(option.value) }}</span>
        </button>
      </div>
      <router-link class="manage-link" to="/admin">{{ t('Manage experience') }} <Settings :size="15" /></router-link>
    </div>

    <div class="stacked-timeline" aria-label="Timeline showing overlapping experience periods">
      <div class="timeline-summary"><span class="pulse-dot"></span><strong>{{ peakConcurrency }} parallel roles</strong> at the busiest point in this record.</div>
      <div class="timeline-axis"><span></span><div><i v-for="year in years" :key="year">{{ year }}</i></div></div>
      <div v-for="item in timelineItems" :key="`bar-${item.id}`" class="stack-row">
        <div class="stack-label"><strong>{{ item.title }}</strong><span>{{ item.organisation }}</span></div>
        <div class="stack-track"><a :href="`#experience-${item.id}`" class="stack-bar" :class="item.category" :style="item.barStyle" :aria-label="`${item.title}, ${displayStart(item)} to ${displayEnd(item)}`"><span>{{ displayStart(item) }} - {{ displayEnd(item) }}</span></a></div>
      </div>
    </div>

    <div class="experience-list">
      <article v-for="item in filteredExperiences" :id="`experience-${item.id}`" :key="item.id" class="experience-item">
        <div class="experience-meta">
          <span class="kind">{{ label(item.category) }}</span>
          <span class="period">{{ displayStart(item) }}<br />{{ displayEnd(item) }}</span>
        </div>
        <div class="experience-title">
          <h3>{{ localized(item, 'title') }}</h3>
          <a v-if="organisationUrl(item)" class="organisation organisation-link" :href="organisationUrl(item)" target="_blank" rel="noopener noreferrer">{{ item.organisation }} <ExternalLink :size="12" /></a><p v-else class="organisation">{{ item.organisation }}</p>
          <p class="location">{{ item.location }}</p>
        </div>
        <div class="experience-details">
          <p>{{ localized(item, 'description') }}</p>
          <ul v-if="item.highlights.length">
            <li v-for="highlight in localizedHighlights(item)" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { ExternalLink, Settings } from 'lucide-vue-next'
import { useExperienceStore } from '../composables/useExperienceStore'
import { organisationLinks } from '../data/portfolio'
import { useLocale } from '../composables/useLocale'

const { experiences } = useExperienceStore()
const { locale, t } = useLocale()
const localized = (item, field) => locale.value === 'sv' ? (item.translations?.sv?.[field] || t(item[field])) : item[field]
const localizedHighlights = (item) => locale.value === 'sv' && item.translations?.sv?.highlights?.length ? item.translations.sv.highlights : item.highlights
const filter = ref('all')
const filters = [
  { label: 'All', value: 'all' },
  { label: 'Professional', value: 'professional' },
  { label: 'Research', value: 'research' },
  { label: 'Community', value: 'community' },
]
const filteredExperiences = computed(() => filter.value === 'all' ? experiences.value : experiences.value.filter((item) => item.category === filter.value))
const startMonth = 2022 * 12
const endMonth = 2027 * 12
const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
const toMonth = (value, useEnd = false) => {
  if (/^\d{4}-\d{2}(?:-\d{2})?$/.test(value)) { const [year, month] = value.split('-').map(Number); return year * 12 + month - 1 }
  if (value.toLowerCase() === 'present') return new Date().getFullYear() * 12 + new Date().getMonth()
  const match = value.toLowerCase().match(/([a-z]+)?\s*(\d{4})/)
  if (!match) return useEnd ? endMonth - 1 : startMonth
  const month = match[1] ? Math.max(0, monthNames.indexOf(match[1])) : (useEnd ? 11 : 0)
  return Number(match[2]) * 12 + month
}
const formatExactDate = (value) => new Intl.DateTimeFormat('en-GB', { ...(value.length === 10 ? { day: 'numeric' } : {}), month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value.length === 7 ? `${value}-01` : value}T00:00:00Z`))
const displayStart = (item) => item.startDate ? formatExactDate(item.startDate) : item.start
const displayEnd = (item) => item.endDate ? formatExactDate(item.endDate) : item.end
const timelineItems = computed(() => filteredExperiences.value.map((item) => {
  const startValue = Math.max(startMonth, toMonth(item.startDate || item.start))
  const endValue = Math.min(endMonth - 1, toMonth(item.endDate || item.end, true))
  return { ...item, startValue, endValue, barStyle: { left: `${((startValue - startMonth) / (endMonth - startMonth)) * 100}%`, width: `${Math.max(2.5, ((endValue - startValue + 1) / (endMonth - startMonth)) * 100)}%` } }
}))
const peakConcurrency = computed(() => {
  let peak = 0
  for (let month = startMonth; month < endMonth; month += 1) peak = Math.max(peak, timelineItems.value.filter((item) => item.startValue <= month && item.endValue >= month).length)
  return peak
})
const years = [2022, 2023, 2024, 2025, 2026]
const count = (category) => category === 'all' ? experiences.value.length : experiences.value.filter((item) => item.category === category).length
const label = (category) => ({ professional: 'Professional', research: 'Research', community: 'Community' }[category])
const organisationUrl = (item) => item.organisationHref || organisationLinks[item.organisation]
</script>
