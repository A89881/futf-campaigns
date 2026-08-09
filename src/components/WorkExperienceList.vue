<template>
    <div class="work-experience-list">
        <article v-for="item in workExperience" :key="item.id" class="resume-work-item">
            <div class="resume-work-period"><span class="kind">{{ t(item.category === 'research' ? 'Research' :
                    'Employment') }}</span><time>{{ displayRange(item) }}</time></div>
            <div>
                <h3>{{ localized(item, 'title') }}</h3>
                <p><a v-if="organisationUrl(item)" class="organisation organisation-link" :href="organisationUrl(item)"
                        target="_blank" rel="noopener noreferrer">{{ item.organisation }}
                        <ExternalLink :size="12" />
                    </a><span v-else class="organisation">{{ item.organisation }}</span> · {{ item.location }}</p>
                <p>{{ localized(item, 'description') }}</p>
                <ul v-if="localizedHighlights(item).length">
                    <li v-for="highlight in localizedHighlights(item)" :key="highlight">{{ highlight }}</li>
                </ul><a v-if="item.linkHref" class="experience-reference-link" :href="item.linkHref" target="_blank"
                    rel="noopener noreferrer">{{ localized(item, 'linkLabel') || t('Related link') }}
                    <ExternalLink :size="13" />
                </a>
            </div>
        </article>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { ExternalLink } from 'lucide-vue-next'
import { useExperienceStore } from '../composables/useExperienceStore'
import { organisationLinks } from '../data/portfolio'
import { useLocale } from '../composables/useLocale'
import { formatDatePart } from '../utils/date'

const { experiences } = useExperienceStore()
const { locale, t } = useLocale()
const localized = (item, field) => locale.value === 'sv' ? (item.translations?.sv?.[field] || t(item[field])) : item[field]
const localizedHighlights = (item) => locale.value === 'sv' && item.translations?.sv?.highlights?.length ? item.translations.sv.highlights : item.highlights
const workExperience = computed(() => experiences.value.filter((item) => item.category === 'employment' || item.category === 'research'))
const displayRange = (item) => `${formatDatePart(item.startDate || item.start, locale.value)} – ${formatDatePart(item.endDate || item.end, locale.value)}`
const organisationUrl = (item) => item.organisationHref || organisationLinks[item.organisation]
</script>
