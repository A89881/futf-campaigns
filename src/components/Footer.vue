<template>
  <footer class="footer shell">
    <router-link class="wordmark" to="/"><span>AM</span><i></i></router-link>
    <p>{{ t('Designed and built by Abhay Mishra.') }}</p>
    <router-link class="footer-archive" to="/campaign">{{ t('Campaign archive') }}</router-link>
    <p>© {{ new Date().getFullYear() }} · Uppsala, Sweden</p>
  </footer>
</template>
<script setup>import { useLocale } from '../composables/useLocale'; const { t } = useLocale()</script>
