<template>
  <section v-if="blocks.length" class="managed-blocks page-section" :aria-label="t('Additional page sections')">
    <div class="shell managed-block-list">
      <article v-for="block in blocks" :key="block.id" class="managed-block" :class="`managed-block-${block.type}`">
        <p v-if="localized(block, 'eyebrow')" class="kind">{{ localized(block, 'eyebrow') }}</p>
        <h2 v-if="localized(block, 'title')">{{ localized(block, 'title') }}</h2>
        <blockquote v-if="block.type === 'quote'">{{ localized(block, 'body') }}</blockquote>
        <ul v-else-if="block.type === 'list'">
          <li v-for="line in bodyLines(block)" :key="line">{{ line }}</li>
        </ul>
        <div v-else class="managed-block-body">
          <p v-for="paragraph in bodyParagraphs(block)" :key="paragraph">{{ paragraph }}</p>
        </div>
        <a v-if="block.linkHref" class="experience-reference-link" :href="block.linkHref" :target="block.linkHref.startsWith('/') ? undefined : '_blank'" rel="noopener noreferrer">{{ localized(block, 'linkLabel') || t('Read more') }} <ArrowUpRight :size="14" /></a>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import { useLocale } from '../composables/useLocale'
import { usePageStore } from '../composables/usePageStore'

const props = defineProps({ pageKey: { type: String, required: true } })
const { locale, t } = useLocale()
const { pages } = usePageStore()
const page = computed(() => pages.value.find((item) => item.slug === props.pageKey))
const blocks = computed(() => page.value?.blocks?.filter((block) => block.visible) || [])
const localized = (item, field) => locale.value === 'sv' ? (item.translations?.sv?.[field] || item[field]) : item[field]
const bodyParagraphs = (block) => localized(block, 'body').split(/\n\s*\n/).map((line) => line.trim()).filter(Boolean)
const bodyLines = (block) => localized(block, 'body').split('\n').map((line) => line.trim()).filter(Boolean)
</script>
