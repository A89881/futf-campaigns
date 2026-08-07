<template>
  <PageFrame>
    <PageIntro eyebrow="Profile / 01" title="Resume" accent="." intro="The academic, technical, and human context behind the work." />
    <section class="page-section shell">
      <div class="about-grid">
        <div class="portrait-wrap">
          <img :src="resumePortrait" :alt="t('Professional portrait of Abhay Mishra')" />
          <span class="image-caption">Uppsala, Sweden</span>
        </div>
        <div class="about-copy">
          <p class="lead">{{ profile.summary[0] }}</p>
          <p>{{ profile.summary[1] }}</p>
          <p>Away from work, I play sports, make admittedly questionable rap songs, and watch far too many nerdy physics videos. Technical range matters; being enjoyable to build with does too.</p>
          <div class="role-list"><span v-for="role in profile.roles" :key="role">{{ t(role) }}</span></div>
          <div class="resume-links">
            <a :href="profile.cv" download>{{ t('Download full CV') }} <Download :size="15" /></a>
            <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight :size="15" /></a>
          </div>
        </div>
      </div>

      <div class="resume-grid">
        <div>
          <h2 class="resume-subtitle">{{ t('Education') }}</h2>
          <div class="education-list">
            <article v-for="item in education" :key="item.degree" class="education-card">
              <div class="degree-icon"><Atom :size="28" /></div>
              <div>
                <p class="kind">{{ item.period }}</p>
                <h3>{{ t(item.degree) }}</h3>
                <p><a class="school organisation-link" :href="item.schoolHref" target="_blank" rel="noopener noreferrer">{{ item.school }} <ArrowUpRight :size="12" /></a> · {{ item.location }}</p>
                <p>{{ t(item.focus) }}</p>
              </div>
            </article>
          </div>
        </div>
        <div>
          <h2 class="resume-subtitle">{{ t('Skills & tools') }}</h2>
          <div class="skills-list">
            <div v-for="group in skills" :key="group.category" class="skill-group">
              <h3>{{ group.category }}</h3>
              <p>{{ group.items.join(' · ') }}</p>
            </div>
          </div>
        </div>
      </div>

      <section class="resume-work">
        <div class="resume-section-title">
          <p class="kind">{{ t('Employment and research only') }}</p>
          <h2>{{ t('Work Experience') }}</h2>
          <p>{{ t('Paid roles and formal research appointments. Volunteering and student-community work remain in the full experience timeline.') }}</p>
        </div>
        <WorkExperienceList />
      </section>
    </section>
  </PageFrame>
</template>

<script setup>
import { ArrowUpRight, Atom, Download } from 'lucide-vue-next'
import resumePortrait from '../assets/img/arbetshelg VT 26-8460.jpg'
import PageFrame from '../components/PageFrame.vue'
import PageIntro from '../components/PageIntro.vue'
import WorkExperienceList from '../components/WorkExperienceList.vue'
import { education, profile, skills } from '../data/portfolio'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>
