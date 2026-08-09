<template>
    <PageFrame>
        <PageIntro eyebrow="Timeline / 03" title="Experience" accent="."
            intro="Employment, research, leadership, and community work - including the periods when several were happening at once." />
        <section class="page-section shell">
            <ExperienceTimeline />
        </section>
    </PageFrame>
</template>
<script
    setup>    import ExperienceTimeline from '../components/ExperienceTimeline.vue'; import PageFrame from '../components/PageFrame.vue'; import PageIntro from '../components/PageIntro.vue'</script>
