<template>
  <footer class="bg-[var(--paper)] text-[var(--ink)] border-t-2 border-[var(--border)] py-12 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">

      <!-- Brand / Campaign block -->
      <div class="text-center md:text-left space-y-4">
        <router-link to="/" class="flex items-center justify-center md:justify-start gap-3">
          <span class="retro-sign text-3xl md:text-4xl">
            Mishra
          </span>

          <span class="retro-display text-lg md:text-xl px-3 py-1 bg-[var(--black)] text-[var(--primary)] border border-[var(--border)] rounded-md">
            {{ currentYear }}
          </span>
        </router-link>

        <p class="text-base md:text-lg font-semibold text-[var(--muted)]">
          Kandidat till Ordförande {{ currentYear }}
        </p>

        <p class="text-xl md:text-2xl leading-snug">
          <span class="font-bold">En röst för modernisering.</span>
          <span class="block text-[var(--accent)] font-bold">
            En FUTF för framtiden.
          </span>
        </p>
      </div>

      <!-- Navigation & Contact -->
      <div class="flex flex-col sm:flex-row justify-center gap-12 text-center sm:text-left text-base md:text-lg">

        <!-- Navigation -->
        <div>
          <h3 class="retro-display text-xl mb-4">
            Navigering
          </h3>

          <ul class="space-y-2 font-semibold">
            <li>
              <router-link to="/" class="retro-link">
                Hem
              </router-link>
            </li>
            <li>
              <router-link to="/om-mig" class="retro-link">
                Om mig
              </router-link>
            </li>
            <li>
              <router-link to="/kontakt" class="retro-link">
                Kontakta mig
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div>
          <h3 class="retro-display text-xl mb-4">
            Kontakt
          </h3>

          <ul class="space-y-3 font-semibold">
            <li>
              <a
                href="mailto:bakwert0123@gmail.com"
                class="flex items-center justify-center sm:justify-start gap-2 retro-link"
              >
                <Mail class="h-5 w-5 text-[var(--accent)]" />
                bakwert0123@gmail.com
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/abbebabbe07/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center sm:justify-start gap-2 retro-link"
              >
                <Instagram class="h-5 w-5 text-[var(--accent)]" />
                @abbebabbe07
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/abhay-mishra-5aa78319a/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center sm:justify-start gap-2 retro-link"
              >
                <Linkedin class="h-5 w-5 text-[var(--accent)]" />
                Abhay Mishra
              </a>
            </li>
          </ul>

          <!-- Retro campaign badge -->
           <!-- make thiS YELLOW -->
          <div class="mt-6 text-center sm:text-left">
            <span class="badge-red px-4 py-2 font-bold inline-block">
              Rösta 2025
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom strip -->
    <div class="mt-12 pt-6 border-t-2 border-[var(--border)] text-center text-sm font-medium text-[var(--muted)]">
      <p>© {{ currentYear }} Abhay Mishra</p>
      <p>Ordförande för FUTF - Kampanj</p>
      <p>Designad av Abhay Mishra</p>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Instagram, Linkedin } from 'lucide-vue-next'
const currentYear = new Date().getFullYear()
</script>