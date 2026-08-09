<template>
    <div class="document-grid">
        <article v-for="document in documents" :key="document.id" class="document-card"
            :class="{ unavailable: !document.available }">
            <div class="document-icon">
                <FileText :size="25" />
            </div>
            <p class="kind">{{ localized(document, 'type') }} · {{ displayDate(localized(document, 'date')) }}</p>
            <h2>{{ localized(document, 'title') }}</h2>
            <p>{{ localized(document, 'description') }}</p>
            <div v-if="document.available" class="document-actions"><button v-if="previewable(document)" type="button"
                    @click="preview = document">{{ t('Preview') }}
                    <Eye :size="15" />
                </button><a :href="document.href" target="_blank" rel="noopener noreferrer">{{ t('Open PDF') }}
                    <ArrowUpRight :size="15" />
                </a></div><span v-else>{{ t('Private document') }}</span>
        </article>
    </div>
    <Teleport to="body">
        <div v-if="preview" class="preview-modal" role="dialog" aria-modal="true"
            :aria-label="`${t('Preview')} ${localized(preview, 'title')}`">
            <div class="preview-toolbar">
                <div>
                    <p class="kind">{{ t('Document preview') }}</p><strong>{{ localized(preview, 'title') }}</strong>
                </div>
                <div class="preview-tools"><a :href="preview.href" target="_blank" rel="noopener noreferrer">{{ t('Open separately') }}
                        <ArrowUpRight :size="15" />
                    </a><button type="button" :aria-label="t('Close preview')" @click="preview = null">
                        <X :size="22" />
                    </button></div>
            </div><iframe :src="preview.href" :title="localized(preview, 'title')"></iframe>
        </div>
    </Teleport>
</template>
<script
    setup> import { onBeforeUnmount, onMounted, ref } from 'vue'; import { ArrowUpRight, Eye, FileText, X } from 'lucide-vue-next'; import { useAppendixStore } from '../composables/useAppendixStore'; import { useLocale } from '../composables/useLocale'; import { formatDisplayDate } from '../utils/date'; const { documents } = useAppendixStore(); const { locale, t } = useLocale(); const preview = ref(null); const localized = (item, field) => locale.value === 'sv' ? (item.translations?.sv?.[field] || t(item[field])) : item[field]; const displayDate = (value) => formatDisplayDate(value, locale.value); const previewable = (document) => document.href?.startsWith('/'); const closeOnEscape = (event) => { if (event.key === 'Escape') preview.value = null }; onMounted(() => window.addEventListener('keydown', closeOnEscape)); onBeforeUnmount(() => window.removeEventListener('keydown', closeOnEscape))</script>
