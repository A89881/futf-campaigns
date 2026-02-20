<template>
  <section :class="sectionClass">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <!-- Retro headline -->
      <h2 class="retro-display text-3xl md:text-5xl mb-5">
        Rösta på
        <span class="retro-sign">Mishra</span>
        <span class="inline-block ml-2 px-3 py-1 rounded-md bg-[var(--black)] text-[var(--primary)] border border-[var(--border)]">
          2025
        </span>
      </h2>

      <p class="max-w-2xl mx-auto text-lg mb-8 text-[var(--muted)] font-medium">
        Tillsammans kan vi skapa en mer strukturerad, synlig och engagerande förening.<br />
        Din röst gör skillnad!
      </p>

      <!-- Primary action -->
      <component
        :is="useScroll ? 'button' : 'router-link'"
        :to="!useScroll ? '/kontakt' : undefined"
        @click="handleClick"
        class="btn-primary px-8 py-3 font-bold inline-flex items-center justify-center"
      >
        {{ btnText }}
      </component>

      <!-- Optional secondary (Zohran red) -->
      <button
        v-if="showRedCTA"
        type="button"
        class="btn-red px-8 py-3 font-bold inline-flex items-center justify-center ml-3 mt-3 sm:mt-0"
        @click="handleSecondary"
      >
        Bli volontär
      </button>

      <!-- Small campaign note (optional) -->
      <p class="mt-6 text-sm font-semibold text-[var(--ink)]/70">
        Byggt på tydlighet. Drivet av engagemang.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'paper' }, // 'paper' | 'topbar' | 'card'
  btnText: { type: String, default: 'Kontakta mig' },
  useScroll: { type: Boolean, default: false },
  scrollTarget: { type: String, default: '#kontakt' },

  // optional: show secondary CTA
  showRedCTA: { type: Boolean, default: false },
})

const sectionClass = computed(() => {
  const base = 'py-16'
  if (props.variant === 'topbar') {
    // gul band-känsla (som header)
    return `${base} retro-topbar`
  }
  if (props.variant === 'card') {
    // papper + lite “kort”-känsla
    return `${base} bg-[var(--paper)]`
  }
  // default: varm papper-yta med subtil grain
  return `${base} bg-[var(--paper)] paper-grain`
})

const handleClick = () => {
  if (props.useScroll) {
    const el = document.querySelector(props.scrollTarget)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

// optional secondary action (du kan koppla den till något senare)
const handleSecondary = () => {
  const el = document.querySelector(props.scrollTarget)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>