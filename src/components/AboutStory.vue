<template>
  <div class="about-story">
    <div class="about-story-opening">
      <div class="about-story-intro">
        <p class="lead">{{ content.lead }}</p>
        <p>{{ content.background }}</p>
        <p>{{ content.education }}</p>
      </div>
      <figure class="portrait-wrap about-story-photo">
        <img :src="aboutPortrait" :alt="content.photoAlt" />
        <figcaption class="image-caption">{{ content.photoCaption }}</figcaption>
      </figure>
    </div>

    <section class="about-principles" :aria-labelledby="`how-i-work-${locale}`">
      <header class="about-principles-heading">
        <h2 :id="`how-i-work-${locale}`">{{ t('How I work') }}</h2>
      </header>
      <div class="principles-grid">
        <article v-for="principle in principles" :key="principle.number">
          <span>{{ principle.number }}</span>
          <h3>{{ t(principle.title) }}</h3>
          <p>{{ t(principle.text) }}</p>
        </article>
      </div>
    </section>

    <ol class="origin-path" :aria-label="content.placesLabel">
      <li v-for="place in content.places" :key="place.name">
        <span>{{ place.period }}</span>
        <strong>{{ place.name }}</strong>
        <p>{{ place.description }}</p>
      </li>
    </ol>

    <div class="about-life">
      <div>
        <p class="kind">{{ content.beyondLabel }}</p>
        <h2>{{ content.beyondTitle[0] }}<br />{{ content.beyondTitle[1] }}</h2>
      </div>
      <div>
        <p>{{ content.life }}</p>
        <p>{{ content.workStyle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import aboutPortrait from '../assets/img/arbetshelg VT 26-0039.jpg'
import { useLocale } from '../composables/useLocale'
import { aboutStories } from '../data/aboutStory'
import { principles } from '../data/portfolio'

const { locale, t, copy } = useLocale()
const content = computed(() => {
  const en = aboutStories.en
  const sv = aboutStories.sv
  const value = (field) => copy(en[field], sv[field])
  return {
    lead: value('lead'),
    background: value('background'),
    education: value('education'),
    placesLabel: value('placesLabel'),
    places: en.places.map((place, index) => ({
      period: copy(place.period, sv.places[index].period),
      name: copy(place.name, sv.places[index].name),
      description: copy(place.description, sv.places[index].description),
    })),
    beyondLabel: value('beyondLabel'),
    beyondTitle: en.beyondTitle.map((line, index) => copy(line, sv.beyondTitle[index])),
    life: value('life'),
    workStyle: value('workStyle'),
    photoAlt: value('photoAlt'),
    photoCaption: value('photoCaption'),
  }
})
</script>
