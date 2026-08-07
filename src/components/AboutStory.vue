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

const { locale } = useLocale()

const stories = {
  en: {
    lead: 'Born in Mumbai, raised across Manchester and Umeå, and now at home in Uppsala, I grew up learning that identity can be expansive rather than fixed.',
    background: 'Moving between India, England, and Sweden made curiosity and adaptation part of everyday life. It also made community matter: wherever I landed, I wanted to understand the place, contribute to it, and help people feel included.',
    education: 'I completed upper-secondary school two years early, graduating at 17 after taking additional courses. That same appetite for challenge led me to Engineering Physics at Uppsala University and toward computational physics, embedded systems, software engineering, and research.',
    placesLabel: 'Places that shaped me',
    places: [
      { period: '2007', name: 'Mumbai', description: 'Where the story began—during monsoon season, naturally.' },
      { period: '2010–2016', name: 'Manchester', description: 'Where I learned English, British humour, and a suspicious tolerance for rain.' },
      { period: '2016–2021', name: 'Umeå', description: 'Where northern winters taught resilience, layering, and the value of a good community.' },
      { period: '2021–Now', name: 'Uppsala', description: 'Where studies, research, engineering, and student life became one very full timeline.' },
    ],
    beyondLabel: 'Beyond the formal CV',
    beyondTitle: ['Serious about the work.', 'Not solemn about life.'],
    life: 'I like sport, making admittedly questionable rap songs with friends, and watching far too many nerdy physics videos. I’m happiest around people who are both ambitious and able to laugh at themselves.',
    workStyle: 'That combination shapes how I work: learn quickly, take responsibility, communicate clearly, and make enough room for other people to enjoy building alongside me.',
    photoAlt: 'Abhay Mishra during a UTNARM working weekend in Uppsala',
    photoCaption: 'UTNARM working weekend · Uppsala',
  },
  sv: {
    lead: 'Jag föddes i Mumbai, växte upp i Manchester och Umeå och har nu hittat hem i Uppsala. Det lärde mig tidigt att identitet kan vara bred och föränderlig snarare än fast.',
    background: 'Att flytta mellan Indien, England och Sverige gjorde nyfikenhet och anpassningsförmåga till en naturlig del av vardagen. Det lärde mig också hur viktig gemenskap är: var jag än hamnade ville jag förstå platsen, bidra och hjälpa människor att känna sig inkluderade.',
    education: 'Jag avslutade gymnasiet två år tidigare än normalt och tog studenten som 17-åring efter att ha läst extra kurser. Samma vilja att utmana mig själv ledde vidare till teknisk fysik vid Uppsala universitet och till beräkningsfysik, inbyggda system, mjukvaruutveckling och forskning.',
    placesLabel: 'Platser som har format mig',
    places: [
      { period: '2007', name: 'Mumbai', description: 'Där berättelsen började—mitt under monsunsäsongen, så klart.' },
      { period: '2010–2016', name: 'Manchester', description: 'Där jag lärde mig engelska, brittisk humor och utvecklade en misstänkt hög tolerans för regn.' },
      { period: '2016–2021', name: 'Umeå', description: 'Där vintrarna i norr lärde mig uthållighet, lager på lager och värdet av en stark gemenskap.' },
      { period: '2021–Nu', name: 'Uppsala', description: 'Där studier, forskning, teknik och studentliv blev en och samma mycket fullspäckade tidslinje.' },
    ],
    beyondLabel: 'Utanför det formella CV:t',
    beyondTitle: ['Tar arbetet på allvar.', 'Men inte livet på för stort allvar.'],
    life: 'Jag gillar sport, att göra minst sagt tveksamma raplåtar med vänner och att titta på alldeles för många nördiga fysikvideor. Jag trivs bäst med människor som både är ambitiösa och kan skratta åt sig själva.',
    workStyle: 'Den kombinationen präglar hur jag arbetar: jag lär mig snabbt, tar ansvar, kommunicerar tydligt och skapar utrymme för att andra också ska trivas med det vi bygger tillsammans.',
    photoAlt: 'Abhay Mishra under en UTNARM-arbetshelg i Uppsala',
    photoCaption: 'UTNARM-arbetshelg · Uppsala',
  },
}

const content = computed(() => stories[locale.value])
</script>
