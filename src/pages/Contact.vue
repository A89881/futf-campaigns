<template>
  <Layout>
    <div class="min-h-screen">
      <div class="pt-6 pb-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-futf">Kontakta mig</h1>
            <div class="w-50 h-1 bg-futf-gold mx-auto mt-4"></div>
            <p class="mt-6 text-black-600 max-w-2xl mx-auto font-medium group text-xl">
              Har du frågor eller idéer? Jag uppskattar alla tankar och förslag!
              Fyll i formuläret nedan eller använd någon av kontaktvägarna.
            </p>
          </div>

          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <!-- Contact Form -->
              <div class="bg-futf-blue rounded-lg shadow-md p-8 text-white">
                <h2 class="text-2xl font-bold text-futf-gold mb-6">Skicka ett meddelande</h2>
                <form @submit.prevent="handleSubmit">
                  <div class="space-y-6">
                    <div>
                      <label for="name" class="block text-sm font-medium text-futf-gold mb-1">Namn</label>
                      <input v-model="formData.name" id="name" name="name" type="text" required
                        class="w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70"
                        placeholder="Ditt namn" />
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-futf-gold mb-1">E-post</label>
                      <input v-model="formData.email" id="email" name="email" type="email" required
                        class="w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70"
                        placeholder="din.mail@example.com" />
                    </div>
                    <div>
                      <label for="message" class="block text-sm font-medium text-futf-gold mb-1">Meddelande</label>
                      <textarea v-model="formData.message" id="message" name="message" rows="5" required
                        class="w-full border border-white/20 bg-white/10 text-white rounded-md p-2 placeholder-white/70"
                        placeholder="Skriv ditt meddelande här..."></textarea>
                    </div>
                    <div>

                      <button type="submit" :disabled="isSubmitting"
                        class="w-full bg-yellow-500 hover:bg-white text-futf-blue  px-4 py-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer">
                        <span v-if="isSubmitting" class="flex items-center justify-center">
                          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                            <path class="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Skickar...
                        </span>
                        <span v-else class="flex items-center justify-center">
                          <Send class="h-4 w-4 mr-2" />
                          Skicka meddelande
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <p v-if="showToast" class="mt-4 text-green-200 font-semibold">
                  Meddelande skickat! Tack för ditt meddelande. Jag återkommer så snart som möjligt.
                </p>

                 <!-- Add this below your success toast -->
                <p v-if="submitError" class="mt-4 text-red-300 font-semibold">
                  {{ submitError }}
                </p>
              </div>

              <!-- Contact Info -->
              <div>
                <div class="bg-futf-blue text-white rounded-lg shadow-md p-8 mb-8">
                  <h2 class="text-2xl font-bold text-futf-gold mb-6">Kontaktuppgifter</h2>
                  <div class="space-y-6">
                    <div class="flex items-start">
                      <div class="bg-white/10 rounded-full p-3 mr-4">
                        <Mail class="h-6 w-6 text-futf-gold" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-futf-gold">E-post</h3>
                        <a href="mailto:bakwert0123@gmail.com" class="text-white/90 hover:text-white">
                          bakwert0123@example.com
                        </a>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="bg-white/10 rounded-full p-3 mr-4">
                        <Phone class="h-6 w-6 text-futf-gold" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-futf-gold">Telefon</h3>
                        <p class="text-white/90">076-134 56 96</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="bg-white/10 rounded-full p-3 mr-4">
                        <MapPin class="h-6 w-6 text-futf-gold" />
                      </div>
                      <div>
                        <h3 class="font-semibold text-futf-gold"> Address</h3>
                        <p class="text-white/90">
                          Naturstensvägen 27<br />
                          752 68 Uppsala <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Följ mig -->
                <div class="bg-futf-blue text-white rounded-lg p-6">
                  <h2 class="text-xl font-semibold text-futf-gold mb-4">Följ mig</h2>
                  <p class="mb-4 text-white/90">
                    Håll dig uppdaterad om min kampanj och mina visioner genom mina sociala kanaler.
                  </p>
                  <div class="flex space-x-4">
                    <a href="https://www.instagram.com/abbebabbe07/" target="_blank" rel="noopener noreferrer"
                      class="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="Instagram">
                      <!-- Instagram icon -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/abhay-mishra-5aa78319a/" target="_blank"
                      rel="noopener noreferrer"
                      class="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="LinkedIn">
                      <!-- LinkedIn icon -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import { Mail, Send, Phone, MapPin } from 'lucide-vue-next'
import Layout from '../components/Layout.vue'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const showToast = ref(false)
const submitError = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitError.value = null

  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    submitError.value = 'Alla fält är obligatoriska'
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    submitError.value = 'Ange en giltig e-postadress'
    return
  }

  try {
    // Add document to Firestore
    await addDoc(collection(db, 'contactSubmissions'), {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
      timestamp: serverTimestamp() // Adds server-side timestamp
    })

    showToast.value = true
    formData.value = { name: '', email: '', message: '' }

    // Hide toast after 5 seconds
    setTimeout(() => {
      showToast.value = false
    }, 5000)

  } catch (error) {
    console.error('Error submitting form:', error)
    submitError.value = 'Något gick fel. Försök igen senare.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Optional: tweak input focus styles */
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
