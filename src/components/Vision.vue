<template>
  <section id="vision" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-futf-blue mb-4">Mina visioner</h2>
        <div class="w-20 h-1 bg-futf-gold mx-auto"></div>
        <p class="mt-4 text-futf-blue font-semibold text-l max-w-2xl mx-auto">
          Som informationsansvarig vill jag arbeta för att stärka FUTF:s kommunikation och synlighet.
          Här är mina huvudsakliga fokusområden:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(vision, index) in visions" :key="index"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4"> <!-- Changed from items-start to items-center -->
            <CheckCircle class="w-6 h-6 text-futf-gold mr-3 flex-shrink-0" /> <!-- Added flex-shrink-0 -->
            <h3 class="text-xl font-semibold text-futf-blue leading-tight">{{ vision.title }}</h3>
          </div>
          <p class="text-black-600 mt-2">{{ vision.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const visions = [
{
  title: 'Bygga ett marknadsföringsutskott',
  description: 'Skapa en strukturerad organisation för att förbättra föreningens synlighet och kommunikation.'
},
{
  title: 'Införa rollansvar inom utskottet',
  description: 'Tydliga roller såsom märkesansvarig, grafisk-profil ansvarig, merch/webbshopansvarig och etc. Främst att främja delegering, ansvarstagande och effektivisering.'
},
{
  title: 'Skapa en webbshop för merch',
  description: 'Etablera en print-on-demand-lösning med profilprodukter som bälten, muggar och kläder för att stärka synligheten och FUTF-branden.'
},
{
  title: 'Öka synligheten i sociala medier',
  description: 'Satsa på kreativ och engagerande närvaro i sociala kanaler, inklusive TikTok, för att stärka sektionens digitala röst.'
},
{
  title: 'Förtydliga rollen som marknadsföringsansvarig',
  description: 'Revidera beskrivningen av posten för att göra uppdraget tydligare med fokus på ledarskap, struktur och möten inom utskottet med andra PR-ansvariga.'
},
{
  title: 'Starta “Veckans/Månadens F:are”',
  description: 'Framhäva medlemmars engagemang och insatser genom regelbundna utmärkelser, vilket stärker gemenskapen.'
},
{
  title: 'Stärka samarbetet med externa konton',
  description: 'Initiera samarbete med exempelvis Uppsala universitet och Uppsala student för ökad räckvidd och synlighet.'
},
{
  title: 'Förbättra sponsorrelationer tillsammans med Arbetsmarknadsutskottet',
  description: 'Utveckla en tydlig strategi för sponsormarknadsföring i samarbete med arbetsmarknadsutskottet för att lyfta samarbeten.'
},
{
  title: 'Tydlig målgruppsfokus',
  description: 'Utforma kommunikation med två huvudsakliga målgrupper i åtanke: potentiella sponsorer och studenter på sektionen.'
},
{
  title: 'Skapa engagemang genom delaktighet',
  description: 'Främja ett inkluderande klimat där fler studenter engageras i marknadsföringsarbetet genom ett välkomnande och meningsfullt utskott.'
},
{
  title: 'Starta YouTube-satsning med engagerande innehåll',
  description: 'Skapa videoinnehåll som alumnintervjuer, “en dag i livet”-inslag, intervjuer med styrelsen och återblickar på gamla F-spex för att öka intresset och bevara föreningens historia.'
},
{
  title: 'Bibehålla högt söktryck till engagemang',
  description: 'Fortsätta stärka sektionens attraktionskraft genom inspirerande innehåll, synlighet och struktur som gör det tydligt varför och hur man engagerar sig.'
}
]
</script>

<style scoped>
/* Exempel på FUTF-färger om du inte redan har dem i Tailwind config */
/* .text-futf-blue {
  color: #003865;
} */

/* .text-futf-gold {
  color: #f9b233;
} */

/* .bg-futf-gold {
  background-color: #f9b233;
} */

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