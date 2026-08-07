<template>
  <footer class="footer shell">
    <router-link class="wordmark" to="/"><span>AM</span><i></i></router-link>
    <p>{{ t('Designed and built by Abhay Mishra.') }}</p>
    <a class="footer-archive" href="/campaign/">{{ t('Campaign archive') }}</a>
    <p>© {{ new Date().getFullYear() }} · Uppsala, Sweden</p>
  </footer>
</template>
<script setup>import { useLocale } from '../composables/useLocale'; const { t } = useLocale()</script>
