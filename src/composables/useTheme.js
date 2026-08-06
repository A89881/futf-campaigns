import { ref } from 'vue'

const theme = ref('dark')
let initialised = false

const apply = (value) => {
  theme.value = value
  document.documentElement.dataset.theme = value
  document.documentElement.style.colorScheme = value
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', value === 'dark' ? '#08090b' : '#f5f2ec')
  localStorage.setItem('abhay-portfolio-theme', value)
}

export const useTheme = () => {
  if (!initialised && typeof window !== 'undefined') {
    initialised = true
    const saved = localStorage.getItem('abhay-portfolio-theme')
    apply(saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))
  }
  return { theme, toggleTheme: () => apply(theme.value === 'dark' ? 'light' : 'dark') }
}
