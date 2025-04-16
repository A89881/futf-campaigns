<template>
    <Layout>
        <section class="h-screen flex items-center justify-center overflow-hidden">
            <!-- Bakgrundsbild och overlay -->
            <div class="absolute inset-0 bg-futfBlue">
                <div class="absolute inset-0 bg-gradient-to-r from-futfBlue/90 to-futfBlue/70"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <img src="/img/download.jpeg" alt="Kandidat" class="w-full h-full object-cover opacity-30" />
                </div>
            </div>

            <!-- Hero-innehåll -->
            <div class="container mx-auto px-4 z-10 text-center">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">En röst för tydlighet. <span
                        class="text-futfGold">Ett utskott för framtiden.</span></h1>
                <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">Jag kandiderar till
                    informationsansvarig för FUTF – för att skapa struktur, synlighet och engagemang genom tydlig
                    kommunikation och strategisk marknadsföring.</p>
                <button @click="scrollToContent"
                    class="bg-futfGold hover:bg-white text-futfBlue font-bold px-8 py-3 rounded-md transition-colors">
                    Läs mer
                </button>
            </div>

            <!-- Scrollindikator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button @click="scrollToContent" aria-label="Scroll down">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/80" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </section>

        <Vision />
        <ExperienceComp />
    </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue'
import Vision from '../components/Vision.vue'
import ExperienceComp from '../components/ExperienceComp.vue';

const scrollToContent = () => {
    const content = document.getElementById('content');
    if (content) {
        content.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
.text-futfBlue {
    color: #001f3f;
}

.bg-futfBlue {
    background-color: #001f3f;
}

.text-futfGold {
    color: #f7c948;
}

.bg-futfGold {
    background-color: #f7c948;
}
</style>