<template>
  <PageFrame>
    <template v-if="page?.visible">
      <PageIntro :eyebrow="localized(page, 'navLabel') || t('Custom page')" :title="localized(page, 'title')" accent="." :intro="localized(page, 'intro')" />
      <ManagedBlocks :page-key="page.slug" />
    </template>
    <section v-else class="page-section shell custom-page-missing">
      <p class="eyebrow"><span></span>404</p>
      <h1>{{ t('Page not found') }}</h1>
      <router-link class="button primary" to="/">{{ t('Return home') }}</router-link>
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ManagedBlocks from '../components/ManagedBlocks.vue'
import PageFrame from '../components/PageFrame.vue'
import PageIntro from '../components/PageIntro.vue'
import { useLocale } from '../composables/useLocale'
import { usePageStore } from '../composables/usePageStore'

const route = useRoute()
const { locale, t } = useLocale()
const { pages } = usePageStore()
const page = computed(() => pages.value.find((item) => !item.system && item.slug === route.params.slug))
const localized = (item, field) => locale.value === 'sv' ? (item?.translations?.sv?.[field] || item?.[field] || '') : (item?.[field] || '')
</script>
