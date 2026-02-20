<template>
  <div
    class="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6
           shadow-md flex flex-col items-center text-center"
  >
    <div class="relative mb-4">
      <div
        class="rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center
               bg-[color:var(--primary)]/10 border border-[var(--primary)]/20"
      >
        <component :is="iconComponent" class="w-10 h-10 text-[var(--primary)]" />
      </div>
    </div>

    <h3 class="text-lg font-semibold text-[var(--text)] mb-2">
      {{ title }}
    </h3>

    <p class="text-[var(--text)]/80">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { Shield, Users, MessageCircle, Library } from 'lucide-vue-next'

const props = defineProps({
  icon: String,
  title: String,
  description: String,
})

const iconMap = {
  shield: Shield,
  users: Users,
  'message-circle': MessageCircle,
  library: Library,
}

const iconComponent = iconMap[props.icon] || Shield
</script>