<template>
    <div class="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100">
      <component :is="iconComponent" class="w-10 h-10 text-futf-blue mb-4" />
      <h3 class="text-lg font-semibold text-futf-blue mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ description }}</p>
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
  