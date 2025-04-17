<template>
  <footer class="bg-futf-blue text-white py-8 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <!-- Logo & slogan -->
      <div class="text-center md:text-left">
        <router-link to="/" class="text-3xl font-bold">
          Mishra <span class="text-futf-gold">2025</span>
        </router-link>
        <p class="mt-2 text-white/90 text-lg font-medium">
          Kandidat till Informationsansvarig {{ currentYear }}
        </p>
        <p class="mt-1 text-2xl font-semibold leading-tight italic">
          <span>En röst för tydlighet.</span>
          <span class="block text-futf-gold">Ett utskott för framtiden.</span>
        </p>
      </div>

      <!-- Navigation & Contact -->
      <div class="flex flex-col sm:flex-row justify-center gap-8 text-center sm:text-left text-base md:text-lg">
        <!-- Navigation -->
        <div>
          <h3 class="font-semibold mb-2 text-futf-gold">Navigering</h3>
          <ul class="space-y-1">
            <li>
              <router-link to="/" class="text-white/80 hover:text-white transition">Hem</router-link>
            </li>
            <li>
              <router-link to="/om-mig" class="text-white/80 hover:text-white transition">Om mig</router-link>
            </li>
            <li>
              <router-link to="/kontakt" class="text-white/80 hover:text-white transition">Kontakta mig</router-link>
            </li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div>
          <h3 class="font-semibold mb-2 text-futf-gold">Kontakt</h3>
          <ul class="space-y-1">
            <li>
              <a href="mailto:bakwert0123@gmail.com"
                class="flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition">
                <Mail class="h-5 w-5 mr-2" />
                bakwert0123@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/abbebabbe07/" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition">
                <Instagram class="h-5 w-5 mr-2" />
                @abbebabbe07
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhay-mishra-5aa78319a/" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-center sm:justify-start text-white/80 hover:text-white transition">
                <Linkedin class="h-5 w-5 mr-2" />
                Abhay Mishra
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60 leading-snug">
      <p>© {{ currentYear }} Abhay Mishra. Alla rättigheter förbehållna.</p>
      <p> FUTF Informationsansvarig Kampanj - Mishra 2025</p>
      <p>Designad av Abhay Mishra</p>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Instagram, Linkedin } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.bg-futf-blue {
  background-color: #1b4b7b;
}

.text-futf-gold {
  color: #f2b705;
}
</style>