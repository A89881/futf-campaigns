<template>
    <PageFrame>
        <section class="contact contact-page shell">
            <p class="eyebrow"><span></span>{{ t('Contact') }} / 05</p>
            <h1>{{ t('Let’s make something') }}<br /><em>{{ t('worthwhile.') }}</em></h1>
            <p class="contact-lead">{{ t('Software, research, engineering, student initiatives - or simply an interesting problem. Say hello.') }}</p>
            <div class="contact-layout">
                <form class="contact-form" @submit.prevent="submitContact">
                    <div class="form-grid"><label>{{ t('Name') }}<input v-model="form.name" required maxlength="120"
                                autocomplete="name" /></label><label>{{ t('Email') }}<input v-model="form.email"
                                type="email" required maxlength="254" autocomplete="email" /></label><label
                            class="full">{{ t('Subject') }}<input v-model="form.subject"
                                maxlength="180" /></label><label class="full">{{ t('Message') }}<textarea
                                v-model="form.message" required minlength="10" maxlength="5000"
                                rows="7"></textarea></label><label class="contact-honeypot"
                            aria-hidden="true">Website<input v-model="form.website" tabindex="-1"
                                autocomplete="off" /></label></div>
                    <div class="form-buttons"><button class="button primary" type="submit" :disabled="sending">{{
                        sending ? t('Sending…') : t('Send message') }}
                            <Send :size="16" />
                        </button>
                        <p v-if="status" :class="statusType === 'error' ? 'form-error' : 'form-success'" role="status">
                            {{ status }}</p>
                    </div>
                </form>
                <aside class="contact-direct">
                    <p class="kind">{{ t('Direct contact') }}</p><a class="contact-email"
                        :href="`mailto:${profile.email}`">{{ profile.email }}
                        <ArrowUpRight :size="22" />
                    </a>
                    <div class="contact-links"><a :href="profile.linkedin" target="_blank"
                            rel="noopener noreferrer">LinkedIn
                            <ArrowUpRight :size="15" />
                        </a><a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub
                            <ArrowUpRight :size="15" />
                        </a><a :href="profile.instagram" target="_blank" rel="noopener noreferrer">Instagram
                            <ArrowUpRight :size="15" />
                        </a><a :href="profile.cv" download>{{ t('Download CV') }}
                            <Download :size="15" />
                        </a><a :href="`tel:${profile.phone.replaceAll(' ', '')}`">{{ profile.phone }}</a></div>
                </aside>
            </div>
        </section>
    </PageFrame>
</template>
<script setup>
import { reactive, ref } from 'vue'; import { addDoc, collection, serverTimestamp } from 'firebase/firestore'; import { ArrowUpRight, Download, Send } from 'lucide-vue-next'; import PageFrame from '../components/PageFrame.vue'; import { db } from '../firebase'; import { profile } from '../data/portfolio'; import { useLocale } from '../composables/useLocale'
const { t } = useLocale(); const form = reactive({ name: '', email: '', subject: '', message: '', website: '' }); const sending = ref(false); const status = ref(''); const statusType = ref('success')
const submitContact = async () => { status.value = ''; if (form.website) return; const previous = Number(localStorage.getItem('abhay-contact-sent-at') || 0); if (Date.now() - previous < 60_000) { statusType.value = 'error'; status.value = t('Please wait a minute before sending another message.'); return } sending.value = true; try { await addDoc(collection(db, 'contactSubmissions'), { name: form.name.trim(), email: form.email.trim(), subject: form.subject.trim(), message: form.message.trim(), createdAt: serverTimestamp() }); localStorage.setItem('abhay-contact-sent-at', String(Date.now())); Object.assign(form, { name: '', email: '', subject: '', message: '', website: '' }); statusType.value = 'success'; status.value = t('Thank you—your message has been sent.') } catch (error) { statusType.value = 'error'; status.value = error.code === 'permission-denied' ? t('The message database is not accepting submissions yet. Deploy the current Firestore rules.') : t('The message could not be sent. Please use email instead.') } finally { sending.value = false } }
</script>
