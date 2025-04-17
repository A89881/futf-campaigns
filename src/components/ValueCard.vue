<template>
  <div class="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100">
    <div class="relative mb-4">
      <div class="bg-[rgba(255,215,0,0.1)] rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
        <component :is="iconComponent" class="w-10 h-10 text-futf-blue" />
      </div>
    </div>
    <h3 class="text-lg font-semibold text-futf-blue mb-2">{{ title }}</h3>
    <p class="text text-gray-600">{{ description }}</p>
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

<style>
.bg-futf-blue {
  background-color: #1b4b7b;
}

.bg-futf-gold {
  background-color: #f2b705;
}

.text-futf-blue {
  color: #1b4b7b;
}

.text-futf-gold {
  color: #f2b705;
}
</style>