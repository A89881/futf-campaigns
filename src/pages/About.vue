<template>
  <Layout> 
  <div class="min-h-screen">
    <div class="pt-24 pb-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-futf-blue">Om mig</h1>
          <div class="w-20 h-1 bg-futf-gold mx-auto mt-4"></div>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 class="text-2xl font-bold text-futf-blue mb-4">Min bakgrund</h2>
              <p class="text-gray-700 mb-4">
                Som teknisk fysiker har jag alltid haft ett starkt intresse för både vetenskap och kreativitet.
                Mitt engagemang inom FUTF och andra studentföreningar har gett mig en bred förståelse för föreningslivet
                och dess behov av tydlig kommunikation och struktur.
              </p>
              <p class="text-gray-700">
                Jag är övertygad om att min kombination av analytiskt tänkande och kreativ kommunikationsförmåga
                gör mig väl lämpad för rollen som informationsansvarig. Jag vill bidra till att göra FUTF till en ännu
                starkare förening med tydlig identitet och effektiv kommunikation.
              </p>
            </div>
            <div class="bg-gray-100 rounded-lg overflow-hidden">
              <img src="/public/img/download.jpeg" alt="Kandidat" class="w-full h-80 object-cover" />
            </div>
          </div>

          <h2 class="text-2xl font-bold text-futf-blue mb-8 text-center">Mina värdeord</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ValueCard icon="shield" title="Struktur" description="Jag tror på tydliga ramar och processer som grund för kreativt arbete." />
            <ValueCard icon="users" title="Gemenskap" description="En stark förening bygger på sammanhållning och känsla av tillhörighet." />
            <ValueCard icon="message-circle" title="Kommunikation" description="Tydlig och regelbunden kommunikation är nyckeln till engagemang." />
            <ValueCard icon="library" title="Riktning" description="En tydlig vision och strategi driver föreningen framåt." />
          </div>

          <div class="bg-futf-blue/5 p-8 rounded-lg border border-futf-blue/20">
            <h2 class="text-2xl font-bold text-futf-blue mb-4">Varför engagemanget är viktigt</h2>
            <p class="text-gray-700 mb-4">
              För mig är föreningslivet en central del av studentupplevelsen. Det är där vi skapar minnen,
              bygger relationer och utvecklar viktiga färdigheter vid sidan av studierna.
            </p>
            <p class="text-gray-700">
              Som informationsansvarig vill jag arbeta för att FUTF ska nå ut bredare, kommunicera tydligare,
              och stärka gemenskapen bland tekniska fysiker. En stark kommunikation både internt och externt
              bidrar till en livfull förening med engagerade medlemmar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import ValueCard from '../components/ValueCard.vue'
</script>

<style scoped>
.text-futf-blue {
  color: #1b4b7b;
}
.bg-futf-gold {
  background-color: #f2b705;
}
</style>
