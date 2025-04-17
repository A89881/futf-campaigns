<template>
  <section :class="['py-16', bgColor, textColor]">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-5xl font-bold mb-6">
        Rösta på Mishra
        <span class="text-futf-gold">2025</span>
        för ett starkare FUTF.
      </h2>

      <p class="max-w-2xl mx-auto text-lg mb-8 opacity-90">
        Tillsammans kan vi skapa en mer strukturerad, synlig och engagerande förening.<br>
        Din röst gör skillnad!
      </p>

      <!-- Dynamic button -->
      <component :is="useScroll ? 'button' : 'router-link'" :to="!useScroll ? '/kontakt' : undefined"
        @click="handleClick"
        class="inline-block bg-futf-gold hover:bg-white text-futf-blue font-bold px-8 py-3 rounded-md transition-colors">
        {{ btnText }}
      </component>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  bgColor: { type: String, default: 'bg-[#2d6aa0]' },
  textColor: { type: String, default: 'text-white' },
  btnText: { type: String, default: 'Kontakta mig' },
  useScroll: { type: Boolean, default: false },
  scrollTarget: { type: String, default: '#kontakt' }
})

const handleClick = () => {
  if (props.useScroll) {
    const el = document.querySelector(props.scrollTarget)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.bg-futf-blue {
  background-color: #1b4b7b;
}

.text-futf-blue {
  color: #1b4b7b;
}

.bg-futf-gold {
  background-color: #f2b705;
}

.text-futf-gold {
  color: #f2b705;
}
</style>