<template>
  <Layout>
    <section class="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--paper)] paper-grain">
      <!-- Background image -->
      <img
        src="/src/assets/img/bizzness.jpg"
        alt="Kandidat"
        class="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <!-- Warm paper overlay for readability -->
      <div class="absolute inset-0 bg-[var(--paper)]/70"></div>

      <!-- Subtle campaign gradient (yellow -> transparent -> red tint) -->
      <div class="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/18 via-transparent to-[var(--red)]/12"></div>

      <!-- Optional vignette to frame text -->
      <div class="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_80%)]"></div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 class="retro-display text-4xl md:text-5xl lg:text-6xl mb-6">
          En röst för framtiden.
        </h1>

        <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-[var(--muted)] font-medium">
          Jag kandiderar till rollen som Ordförande för FUTF — struktur, synlighet och engagemang genom tydlig
          kommunikation och strategisk marknadsföring.
        </p>

        <!-- Retro “campaign sign” block -->
        <div class="inline-flex items-center justify-center gap-3 mb-10">
          <span class="retro-sign text-3xl md:text-4xl">
            Mishra
          </span>
          <span class="retro-display text-lg md:text-xl px-4 py-2 rounded-md bg-[var(--black)] text-[var(--primary)] border-2 border-[var(--border)]">
            2025
          </span>
        </div>

        <div>
          <button
            @click="scrollToContent"
            class="btn-primary px-10 py-3 font-bold inline-flex items-center justify-center"
          >
            Läs mer
          </button>

          <!-- Optional: secondary red CTA -->
          <!--
          <button
            class="btn-red px-10 py-3 font-bold inline-flex items-center justify-center ml-3 mt-3 sm:mt-0"
          >
            Bli volontär
          </button>
          -->
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <button @click="scrollToContent" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 cursor-pointer text-[var(--ink)]/70 hover:text-[var(--red)] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>

    <Vision id="content" />
    <ExperienceComp />
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue'
import Vision from '../components/Vision.vue'
import ExperienceComp from '../components/ExperienceComp.vue'

const scrollToContent = () => {
  const content = document.getElementById('content')
  if (content) content.scrollIntoView({ behavior: 'smooth' })
}
</script>