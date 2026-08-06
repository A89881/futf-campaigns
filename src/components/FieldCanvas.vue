<template>
  <canvas ref="canvas" class="field-canvas" aria-hidden="true"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref(null)
let frame = 0
let cleanup = () => {}

onMounted(() => {
  const el = canvas.value
  const ctx = el.getContext('2d')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let width = 0
  let height = 0
  let pointerX = 0
  let pointerY = 0
  let time = 0

  const resize = () => {
    const rect = el.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = rect.width
    height = rect.height
    el.width = width * dpr
    el.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    pointerX = width * 0.58
    pointerY = height * 0.48
  }

  const move = (event) => {
    const rect = el.getBoundingClientRect()
    pointerX = event.clientX - rect.left
    pointerY = event.clientY - rect.top
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height)
    const cx = width * 0.53 + (pointerX - width / 2) * 0.035
    const cy = height * 0.48 + (pointerY - height / 2) * 0.035
    const count = width < 620 ? 26 : 44

    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(-0.22)
    for (let ring = 0; ring < 5; ring += 1) {
      const rx = width * (0.18 + ring * 0.075)
      const ry = height * (0.09 + ring * 0.045)
      ctx.beginPath()
      ctx.ellipse(0, 0, rx, ry, ring * 0.18, 0, Math.PI * 2)
      ctx.strokeStyle = ring % 2 ? 'rgba(255, 72, 125, .23)' : 'rgba(91, 192, 255, .25)'
      ctx.lineWidth = 1
      ctx.stroke()
    }
    ctx.restore()

    for (let i = 0; i < count; i += 1) {
      const row = Math.floor(i / 7)
      const col = i % 7
      const x = width * 0.08 + col * width * 0.14
      const baseY = height * 0.16 + row * height * 0.13
      const wave = Math.sin(i * 1.7 + time * 0.012) * 13
      const y = baseY + wave
      const distance = Math.hypot(x - pointerX, y - pointerY)
      const glow = Math.max(0, 1 - distance / 190)
      ctx.beginPath()
      ctx.arc(x, y, 1.7 + glow * 2.7, 0, Math.PI * 2)
      ctx.fillStyle = i % 3 === 0 ? `rgba(255,72,125,${0.55 + glow * 0.4})` : `rgba(91,192,255,${0.4 + glow * 0.5})`
      ctx.fill()
      if (col < 6) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + width * 0.14, baseY + Math.sin((i + 1) * 1.7 + time * 0.012) * 13)
        ctx.strokeStyle = `rgba(168,184,201,${0.07 + glow * 0.1})`
        ctx.stroke()
      }
    }

    time += 1
    if (!reduced) frame = requestAnimationFrame(draw)
  }

  resize()
  draw()
  window.addEventListener('resize', resize)
  el.addEventListener('pointermove', move)
  cleanup = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', resize)
    el.removeEventListener('pointermove', move)
  }
})

onUnmounted(() => cleanup())
</script>
