<template>
  <div id="top">
    <Navbar />
    <main id="main">
      <section class="hero shell" aria-labelledby="hero-title">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span></span>{{ t(profile.eyebrow) }}</p>
          <h1 id="hero-title">Abhay<br /><em>Mishra.</em></h1>
          <p class="hero-intro">{{ t(profile.intro) }}</p>
          <div class="hero-actions">
            <a class="button primary" href="/projects">{{ t('Explore my work') }} <ArrowDownRight :size="18" /></a>
            <a class="button text-link" :href="profile.cv" download>{{ t('Download CV') }} <Download :size="17" /></a>
            <a class="button text-link" :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight :size="17" /></a>
          </div>
        </div>
        <div class="hero-visual reveal delay-1">
          <FieldCanvas />
          <div class="visual-label top-label">{{ t('FIELD / 01') }}</div>
          <div class="visual-label bottom-label">{{ t('POINTER-REACTIVE SYSTEM') }}</div>
          <div class="orbit-mark">AM</div>
        </div>
        <div class="hero-foot">
          <span>{{ t(profile.location) }}</span>
          <span class="scroll-cue">{{ t('Scroll to explore') }} <ArrowDown :size="15" /></span>
        </div>
      </section>

      <div v-if="isMobile" class="mobile-portfolio">
      <section id="about" class="section shell"><SectionHeading number="01" title="About me" intro="Mumbai, Manchester, Umeå, Uppsala—and the choices that connected them." /><AboutStory /></section>
      <section id="resume" class="section about shell">
        <SectionHeading number="02" title="Resume" intro="Engineering, research, communication, and community work - viewed as one connected practice." />
        <div class="about-grid">
          <div class="portrait-wrap reveal">
            <img :src="resumePortrait" :alt="t('Professional portrait of Abhay Mishra')" />
            <span class="image-caption">{{ t('Uppsala, Sweden') }}</span>
          </div>
          <div class="about-copy reveal delay-1">
            <p class="lead">{{ t('Across study, research, and software projects, I combine technical curiosity with initiative, clear communication, and responsibility.') }}</p>
            <div class="role-list" :aria-label="t('Current roles')">
              <span v-for="role in profile.roles" :key="role">{{ t(role) }}</span>
            </div>
            <div class="resume-links">
              <a :href="profile.cv" download>{{ t('Full CV') }} <Download :size="15" /></a>
              <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight :size="15" /></a>
            </div>
          </div>
        </div>

        <div class="resume-grid">
          <div>
            <h3 class="resume-subtitle">{{ t('Education') }}</h3>
            <div class="education-list">
              <article v-for="item in education" :key="item.degree" class="education-card">
                <div class="degree-icon"><Atom :size="28" /></div>
                <div>
                  <p class="kind">{{ t(item.period) }}</p>
                  <h3>{{ t(item.degree) }}</h3>
                  <p><a class="school organisation-link" :href="item.schoolHref" target="_blank" rel="noopener noreferrer">{{ item.school }} <ArrowUpRight :size="12" /></a> · {{ t(item.location) }}</p>
                  <p>{{ t(item.focus) }}</p>
                </div>
              </article>
            </div>
          </div>
          <div>
            <h3 class="resume-subtitle">{{ t('Skills & tools') }}</h3>
            <div class="skills-list">
              <div v-for="group in skills" :key="group.category" class="skill-group">
                <h3>{{ t(group.category) }}</h3>
                <p>{{ group.items.join(' · ') }}</p>
              </div>
            </div>
          </div>
        </div>
        <section class="resume-work"><div class="resume-section-title"><p class="kind">{{ t('Employment and research only') }}</p><h3>{{ t('Work Experience') }}</h3></div><WorkExperienceList /></section>
      </section>

      <section id="projects" class="section work-section">
        <div class="shell">
          <SectionHeading number="02" title="Selected projects" intro="Scientific software, physical computing, data analysis, and digital products - sourced from my current CV." />
          <div class="project-list">
            <article v-for="project in projects" :key="project.title" class="project" :class="project.accent">
              <div class="project-index">{{ project.index }}</div>
              <div class="project-main">
                <div class="project-kicker"><p class="project-type">{{ t(project.type) }}</p><time>{{ project.period }}</time></div>
                <h3>{{ t(project.title) }}</h3>
                <p>{{ t(project.description) }}</p>
                <ul class="tags" :aria-label="`${project.title} technologies`">
                  <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
                </ul>
                <a v-if="isCampaignArchive(project.href)" class="project-link" href="/campaign/">{{ t(project.cta) }} <ArrowUpRight :size="15" /></a><router-link v-else-if="project.href?.startsWith('/')" class="project-link" :to="project.href">{{ t(project.cta) }} <ArrowUpRight :size="15" /></router-link><a v-else-if="project.href" class="project-link" :href="project.href" target="_blank" rel="noopener noreferrer">{{ t(project.cta) }} <ArrowUpRight :size="15" /></a><a v-if="project.github" class="project-link" :href="project.github" target="_blank" rel="noopener noreferrer">{{ t('Source on GitHub') }} <ArrowUpRight :size="15" /></a>
              </div>
              <div class="project-glyph" aria-hidden="true"><span></span><i></i></div>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" class="section shell">
        <SectionHeading number="03" title="Experience" intro="Professional roles, computational-physics research, and the community work that has shaped how I collaborate and lead." />
        <ExperienceTimeline />
      </section>

      <section id="appendix" class="section shell mobile-appendix"><SectionHeading number="04" title="Appendix" intro="Supporting documents, shared with privacy in mind." /><AppendixGrid /></section>

      <section id="contact" class="contact shell">
        <p class="eyebrow"><span></span>{{ t('Contact') }}</p>
        <h2>{{ t('Let’s make something') }}<br /><em>{{ t('worthwhile.') }}</em></h2>
        <a class="contact-email" :href="`mailto:${profile.email}`">{{ profile.email }} <ArrowUpRight :size="28" /></a>
        <div class="contact-links">
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight :size="15" /></a>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight :size="15" /></a>
          <a :href="profile.instagram" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight :size="15" /></a>
          <a :href="profile.cv" download>{{ t('Download CV') }} <Download :size="15" /></a>
          <a :href="`tel:${profile.phone.replaceAll(' ', '')}`">{{ profile.phone }}</a>
        </div>
      </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Atom, Download } from 'lucide-vue-next'
import FieldCanvas from '../components/FieldCanvas.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import SectionHeading from '../components/SectionHeading.vue'
import AboutStory from '../components/AboutStory.vue'
import resumePortrait from '../assets/img/arbetshelg VT 26-8460.jpg'
import { useLocale } from '../composables/useLocale'
import { education, profile, skills } from '../data/portfolio'
import { useProjectStore } from '../composables/useProjectStore'
const ExperienceTimeline = defineAsyncComponent(() => import('../components/ExperienceTimeline.vue'))
const AppendixGrid = defineAsyncComponent(() => import('../components/AppendixGrid.vue'))
const WorkExperienceList = defineAsyncComponent(() => import('../components/WorkExperienceList.vue'))
const { t } = useLocale()
const { visibleProjects: projects } = useProjectStore()
const isCampaignArchive = (href) => href === '/campaign' || href === '/campaign/'
const isMobile = ref(false)
let mediaQuery
const updateMobile = () => { isMobile.value = mediaQuery.matches }
onMounted(() => { mediaQuery = window.matchMedia('(max-width: 850px)'); updateMobile(); mediaQuery.addEventListener('change', updateMobile) })
onUnmounted(() => mediaQuery?.removeEventListener('change', updateMobile))
</script>
