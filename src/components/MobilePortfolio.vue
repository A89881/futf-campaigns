<template>
  <div class="mobile-resume-portfolio">
    <nav class="mobile-jump" :aria-label="t('Quick navigation')">
      <div class="shell">
        <a href="#resume">{{ t('Resume') }}</a>
        <a href="#projects">{{ t('Projects') }}</a>
        <a href="#experience">{{ t('Experience') }}</a>
        <a href="#about">{{ t('About') }}</a>
        <a href="#contact">{{ t('Contact') }}</a>
      </div>
    </nav>

    <section id="resume" class="mobile-section shell">
      <MobileHeading number="01" title="Resume snapshot" eyebrow="Engineering physics · software · research" />

      <div class="mobile-profile-card">
        <img :src="resumePortrait" :alt="t('Resume portrait of Abhay Mishra')" />
        <div>
          <p class="kind">{{ t('Current focus') }}</p>
          <h3>{{ t('Engineering Physics student') }}</h3>
          <p>{{ t('Technical range across computational physics, software systems, and embedded engineering—with the initiative to turn ideas into working systems.') }}</p>
        </div>
      </div>

      <div class="mobile-action-row">
        <a :href="profile.cv" download>{{ t('Download CV') }}
          <Download :size="14" />
        </a>
        <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn
          <ArrowUpRight :size="14" />
        </a>
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub
          <ArrowUpRight :size="14" />
        </a>
      </div>

      <div class="mobile-resume-facts">
        <article>
          <p class="kind">{{ t('Education') }}</p>
          <strong>{{ t(education[0].degree) }}</strong>
          <span>{{ education[0].school }} · {{ displayDate(t(education[0].period)) }}</span>
        </article>
        <article>
          <p class="kind">{{ t('Core toolkit') }}</p>
          <p>{{ coreSkills.map(t).join(' · ') }}</p>
        </article>
      </div>

      <div class="mobile-subhead">
        <div>
          <p class="kind">{{ t('Selected work') }}</p>
          <h3>{{ t('Employment & research') }}</h3>
        </div>
        <router-link to="/resume">{{ t('Full resume') }}
          <ArrowRight :size="14" />
        </router-link>
      </div>
      <div class="mobile-entry-list">
        <article v-for="item in selectedWork" :key="item.id" class="mobile-entry">
          <time>{{ displayRange(item) }}</time>
          <div>
            <h4>{{ localized(item, 'title') }}</h4>
            <a v-if="organisationUrl(item)" :href="organisationUrl(item)" target="_blank" rel="noopener noreferrer">{{
              item.organisation }}
              <ArrowUpRight :size="11" />
            </a>
            <span v-else>{{ item.organisation }}</span>
            <p>{{ localized(item, 'description') }}</p>
            <a v-if="item.linkHref" class="mobile-reference-link" :href="item.linkHref" target="_blank"
              rel="noopener noreferrer">{{ localized(item, 'linkLabel') || t('Related link') }}
              <ArrowUpRight :size="11" />
            </a>
          </div>
        </article>
      </div>
    </section>

    <section id="projects" class="mobile-section mobile-surface">
      <div class="shell">
        <MobileHeading number="02" title="Featured projects" eyebrow="A small, significant selection" />
        <div class="mobile-project-list">
          <article v-for="project in featuredProjects" :key="project.id || project.title" class="mobile-project"
            :class="project.accent">
            <div class="mobile-project-number">{{ project.index }}</div>
            <div>
              <p class="kind">{{ t(project.type) }} · {{ displayDate(t(project.period)) }}</p>
              <h3>{{ t(project.title) }}</h3>
              <p>{{ t(project.description) }}</p>
              <ul>
                <li v-for="tag in project.tags.slice(0, 3)" :key="tag">{{ t(tag) }}</li>
              </ul>
              <router-link v-if="project.href?.startsWith('/')" :to="project.href">{{ t(project.cta) }}
                <ArrowUpRight :size="13" />
              </router-link>
              <a v-else :href="project.href" target="_blank" rel="noopener noreferrer">{{ t(project.cta) }}
                <ArrowUpRight :size="13" />
              </a>
            </div>
          </article>
        </div>
        <router-link class="mobile-route-link" to="/projects">{{ t('View all projects') }}
          <ArrowRight :size="15" />
        </router-link>
      </div>
    </section>

    <section id="experience" class="mobile-section shell">
      <MobileHeading number="03" title="Community & leadership" eyebrow="The parallel work behind the timeline" />
      <div class="mobile-stat-row">
        <div><strong>{{ workCount }}</strong><span>{{ t('work & research roles') }}</span></div>
        <div><strong>{{ communityCount }}</strong><span>{{ t('community roles') }}</span></div>
      </div>
      <div class="mobile-entry-list compact">
        <article v-for="item in selectedCommunity" :key="item.id" class="mobile-entry">
          <time>{{ displayRange(item) }}</time>
          <div>
            <h4>{{ localized(item, 'title') }}</h4>
            <a v-if="organisationUrl(item)" :href="organisationUrl(item)" target="_blank" rel="noopener noreferrer">{{
              item.organisation }}
              <ArrowUpRight :size="11" />
            </a>
            <span v-else>{{ item.organisation }}</span>
            <a v-if="item.linkHref" class="mobile-reference-link" :href="item.linkHref" target="_blank"
              rel="noopener noreferrer">{{ localized(item, 'linkLabel') || t('Related link') }}
              <ArrowUpRight :size="11" />
            </a>
          </div>
        </article>
      </div>
      <router-link class="mobile-route-link" to="/experience">{{ t('Open the full timeline') }}
        <ArrowRight :size="15" />
      </router-link>
    </section>

    <section id="about" class="mobile-section mobile-surface">
      <div class="shell">
        <MobileHeading number="04" title="About me" eyebrow="The person behind the work" />
        <div class="mobile-about-card">
          <img :src="aboutPortrait" :alt="t('Abhay Mishra during a working weekend in Uppsala')" />
          <div>
            <p>{{ t('Born in Mumbai and shaped by Manchester, Umeå, and Uppsala, I bring an adaptable, community-minded perspective to engineering.') }}</p>
            <p>{{ t('I graduated at 17 and now move between Engineering Physics, computational research, software, and student leadership.') }}</p>
          </div>
        </div>
        <div class="mobile-principles">
          <article v-for="principle in principles" :key="principle.number">
            <span>{{ principle.number }}</span><strong>{{ t(principle.title) }}</strong>
          </article>
        </div>
        <router-link class="mobile-route-link" to="/about">{{ t('Read the full story') }}
          <ArrowRight :size="15" />
        </router-link>
      </div>
    </section>

    <section id="appendix" class="mobile-section shell">
      <MobileHeading number="05" title="Appendix" eyebrow="Selected supporting documents" />
      <div class="mobile-document-list">
        <article v-for="document in selectedDocuments" :key="document.id">
          <FileText :size="20" />
          <div>
            <p class="kind">{{ localizedDocument(document, 'type') }} · {{ displayDate(localizedDocument(document, 'date')) }}</p>
            <h3>{{ localizedDocument(document, 'title') }}</h3>
          </div>
          <a :href="document.href" target="_blank" rel="noopener noreferrer"
            :aria-label="`${t('Open PDF')}: ${localizedDocument(document, 'title')}`">
            <ArrowUpRight :size="17" />
          </a>
        </article>
      </div>
      <router-link class="mobile-route-link" to="/appendix">{{ t('View all documents') }}
        <ArrowRight :size="15" />
      </router-link>
    </section>

    <section id="contact" class="mobile-contact shell">
      <p class="kind">06 / {{ t('Contact') }}</p>
      <h2>{{ t('Let’s make something') }}<br /><em>{{ t('worthwhile.') }}</em></h2>
      <a class="mobile-email" :href="`mailto:${profile.email}`">{{ profile.email }}
        <ArrowUpRight :size="20" />
      </a>
      <div class="mobile-contact-links">
        <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="profile.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a :href="`tel:${profile.phone.replaceAll(' ', '')}`">{{ profile.phone }}</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight, ArrowUpRight, Download, FileText } from 'lucide-vue-next'
import aboutPortrait from '../assets/img/arbetshelg VT 26-0039.jpg'
import resumePortrait from '../assets/img/arbetshelg VT 26-8460.jpg'
import { useAppendixStore } from '../composables/useAppendixStore'
import { useExperienceStore } from '../composables/useExperienceStore'
import { useLocale } from '../composables/useLocale'
import { useProjectStore } from '../composables/useProjectStore'
import { education, organisationLinks, principles, profile } from '../data/portfolio'
import { formatDatePart, formatDisplayDate } from '../utils/date'
import MobileHeading from './MobileHeading.vue'

const { locale, t } = useLocale()
const { experiences } = useExperienceStore()
const { visibleProjects } = useProjectStore()
const { documents } = useAppendixStore()

const coreSkills = ['Python', 'C++', 'Vue.js', 'Kubernetes', 'Numerical methods', 'Git']
const workItems = computed(() => experiences.value.filter((item) => item.category === 'employment' || item.category === 'research'))
const communityItems = computed(() => experiences.value.filter((item) => item.category === 'community'))
const selectedWork = computed(() => workItems.value.slice(0, 4))
const selectedCommunity = computed(() => communityItems.value.slice(0, 3))
const featuredProjects = computed(() => visibleProjects.value.slice(0, 3))
const selectedDocuments = computed(() => documents.value.filter((item) => item.available && item.href).slice(0, 2))
const workCount = computed(() => workItems.value.length)
const communityCount = computed(() => communityItems.value.length)

const localized = (item, field) => locale.value === 'sv' ? (item.translations?.sv?.[field] || t(item[field])) : item[field]
const localizedDocument = (item, field) => locale.value === 'sv' ? (item.translations?.sv?.[field] || t(item[field])) : item[field]
const organisationUrl = (item) => item.organisationHref || organisationLinks[item.organisation]
const displayDate = (value) => formatDisplayDate(value, locale.value)
const displayRange = (item) => `${formatDatePart(item.startDate || item.start, locale.value)} – ${formatDatePart(item.endDate || item.end, locale.value)}`
</script>
