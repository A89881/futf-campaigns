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
  let targetX = 0
  let targetY = 0
  let pointerX = 0
  let pointerY = 0
  let previousX = 0
  let previousY = 0
  let pointerActive = false
  let time = 0

  const resetPointer = () => {
    targetX = width * 0.58
    targetY = height * 0.48
    pointerActive = false
  }

  const resize = () => {
    const rect = el.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = rect.width
    height = rect.height
    el.width = width * dpr
    el.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    resetPointer()
    pointerX = targetX
    pointerY = targetY
    previousX = pointerX
    previousY = pointerY
  }

  const move = (event) => {
    const rect = el.getBoundingClientRect()
    targetX = Math.max(-width * 0.15, Math.min(width * 1.15, event.clientX - rect.left))
    targetY = Math.max(-height * 0.15, Math.min(height * 1.15, event.clientY - rect.top))
    pointerActive = true
    if (reduced) {
      pointerX = targetX
      pointerY = targetY
      draw()
    }
  }

  const leave = () => resetPointer()

  const draw = () => {
    ctx.clearRect(0, 0, width, height)
    pointerX += (targetX - pointerX) * 0.085
    pointerY += (targetY - pointerY) * 0.085
    const velocityX = pointerX - previousX
    const velocityY = pointerY - previousY
    previousX = pointerX
    previousY = pointerY

    const ambientX = Math.sin(time * 0.7) * Math.min(18, width * 0.025)
    const ambientY = Math.cos(time * 0.55) * Math.min(13, height * 0.025)
    const cx = width * 0.53 + (pointerX - width / 2) * 0.13 + ambientX
    const cy = height * 0.48 + (pointerY - height / 2) * 0.12 + ambientY
    const count = width < 620 ? 28 : 49

    const pointerGlow = ctx.createRadialGradient(pointerX, pointerY, 0, pointerX, pointerY, Math.max(150, width * 0.32))
    pointerGlow.addColorStop(0, 'rgba(98, 198, 255, .10)')
    pointerGlow.addColorStop(.45, 'rgba(255, 71, 126, .045)')
    pointerGlow.addColorStop(1, 'rgba(8, 9, 11, 0)')
    ctx.fillStyle = pointerGlow
    ctx.fillRect(0, 0, width, height)

    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(-0.22 + Math.sin(time * 0.45) * 0.08 + velocityX * 0.002)
    for (let ring = 0; ring < 6; ring += 1) {
      const pulse = Math.sin(time * 1.2 + ring * 0.9) * 7
      const rx = width * (0.14 + ring * 0.065) + pulse
      const ry = height * (0.07 + ring * 0.041) + pulse * 0.45
      ctx.beginPath()
      ctx.ellipse(
        (pointerX - width / 2) * ring * 0.004,
        (pointerY - height / 2) * ring * 0.004,
        Math.max(8, rx),
        Math.max(5, ry),
        ring * 0.19 + time * (ring % 2 ? -0.018 : 0.014),
        0,
        Math.PI * 2,
      )
      ctx.strokeStyle = ring % 2 ? 'rgba(255, 72, 125, .27)' : 'rgba(91, 192, 255, .29)'
      ctx.lineWidth = ring === 0 ? 1.4 : 1
      ctx.stroke()
    }
    ctx.restore()

    const points = []
    const columns = 7
    const rows = Math.ceil(count / columns)
    for (let i = 0; i < count; i += 1) {
      const row = Math.floor(i / columns)
      const col = i % columns
      const baseX = width * 0.08 + col * width * 0.14
      const baseY = height * 0.14 + row * (height * 0.72 / Math.max(1, rows - 1))
      const waveX = Math.cos(i * 1.13 + time * 1.6) * 5
      const waveY = Math.sin(i * 1.7 + time * 1.8) * 17
      const dx = baseX + waveX - pointerX
      const dy = baseY + waveY - pointerY
      const distance = Math.max(1, Math.hypot(dx, dy))
      const influence = Math.max(0, 1 - distance / 245)
      const force = influence * influence * 38
      const x = baseX + waveX + (dx / distance) * force - (dy / distance) * influence * 9 + velocityX * influence * 0.7
      const y = baseY + waveY + (dy / distance) * force + (dx / distance) * influence * 9 + velocityY * influence * 0.7
      points.push({ x, y, influence, col, row, i })
    }

    for (const point of points) {
      if (point.col < columns - 1 && point.i + 1 < points.length) {
        const next = points[point.i + 1]
        ctx.beginPath()
        ctx.moveTo(point.x, point.y)
        ctx.lineTo(next.x, next.y)
        ctx.strokeStyle = `rgba(168,184,201,${0.07 + Math.max(point.influence, next.influence) * 0.17})`
        ctx.stroke()
      }
      if (point.row < rows - 1 && point.i + columns < points.length && point.i % 2 === 0) {
        const next = points[point.i + columns]
        ctx.beginPath()
        ctx.moveTo(point.x, point.y)
        ctx.lineTo(next.x, next.y)
        ctx.strokeStyle = `rgba(168,184,201,${0.035 + point.influence * 0.1})`
        ctx.stroke()
      }
    }

    for (const point of points) {
      ctx.beginPath()
      ctx.arc(point.x, point.y, 1.8 + point.influence * 4.2, 0, Math.PI * 2)
      ctx.fillStyle = point.i % 3 === 0
        ? `rgba(255,72,125,${0.55 + point.influence * 0.42})`
        : `rgba(91,192,255,${0.4 + point.influence * 0.55})`
      ctx.fill()
    }

    time += pointerActive ? 0.022 : 0.014
    if (!reduced) frame = requestAnimationFrame(draw)
  }

  resize()
  draw()
  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', move, { passive: true })
  document.documentElement.addEventListener('pointerleave', leave)
  window.addEventListener('blur', leave)
  cleanup = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', resize)
    window.removeEventListener('pointermove', move)
    document.documentElement.removeEventListener('pointerleave', leave)
    window.removeEventListener('blur', leave)
  }
})

onUnmounted(() => cleanup())
</script>
