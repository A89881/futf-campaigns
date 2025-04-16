<!-- src/components/Layout.vue -->
<template>
    <div>
        <Navbar />
        <main class="pt-20">
            <slot />
        </main>
        <CalltoAction name="Mishra" :useScroll="false" />
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
import CalltoAction from '../components/CalltoAction.vue';
</script>