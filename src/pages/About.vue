<template>
  <Layout>
    <div class="min-h-screen">
      <div class="pt-24 pb-16">
        <div class="container mx-auto px-4">
          <!-- Om mig section -->
          <div class="text-center mb-16"> <!-- Increased mb from 12 to 16 -->
            <h1 class="text-4xl font-bold text-futf-blue">Om mig</h1>
            <div class="w-50 h-1 bg-futf-gold mx-auto mt-4"></div>
          </div>

          <div class="max-w-4xl mx-auto">
            <!-- Min bakgrund section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 class="text-2xl font-bold text-futf-blue mb-4">Min bakgrund</h2>
                <p class="text-gray-700 mb-4">
                  Tja! Jag heter Abhay, är från Uppsala och troligtvis den yngsta här (brodern fick dricka för en månad
                  sen).
                  Trots det har jag redan hunnit dyka djupt in i föreningslivet och hittat hem
                  i FUTF. På fritiden gillar jag att spela sport, chilla och goofa med mina polare - ofta genom att
                  spela in dåliga raplåtar eller kolla på alldeles för många nördiga fysikvideos (get a load of this
                  guy) .
                </p>
                <p class="text-gray-700">
                  Jag söker rollen som informationsansvarig för att jag verkligen bryr mig om föreningen och vet hur
                  mycket bra kommunikation
                  kan göras. Med erfarenhet från grafisk design, marknadsföring och föreningsliv vill jag bidra med
                  struktur, driv och engagemang – och samtidigt bygga ett utskott som gör jobbet både proffsigt och kul
                </p>
              </div>
              <div class="bg-gray-100 rounded-lg overflow-hidden">
                <img src="/src/assets/img/smiley.jpg" alt="Kandidat" class="w-full h-80 object-cover" />
              </div>
            </div>

            <!-- Mina Erfarenheter section -->
            <div class="text-center mb-8"> <!-- Reduced mb from 12 to 8 -->
              <h1 class="text-2xl font-bold text-futf-blue">Mina Erfarenheter</h1>
              <div class="w-20 h-1 bg-futf-gold mx-auto mt-4"></div>
            </div>
            <div class="mb-16"> <!-- Wrapped Timeline in div with mb-16 -->
              <Timeline />
            </div>

            <!-- Mina Värdeord section -->
            <div class="text-center mb-8"> <!-- Added wrapper div with mb-8 -->
              <h1 class="text-2xl font-bold text-futf-blue"> Mina Värdeord</h1>
              <div class="w-20 h-1 bg-futf-gold mx-auto mt-4"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <ValueCard icon="shield" title="Struktur"
                description="Jag tror på tydliga ramar och processer som grund för kreativt arbete." />
              <ValueCard icon="users" title="Gemenskap"
                description="En stark förening bygger på sammanhållning och känsla av tillhörighet." />
              <ValueCard icon="message-circle" title="Kommunikation"
                description="Tydlig och regelbunden kommunikation är nyckeln till engagemang." />
              <ValueCard icon="library" title="Riktning"
                description="En tydlig vision och strategi driver föreningen framåt." />
            </div>

            <!-- Varför engagemanget section -->
            <div class="p-8 rounded-lg border-2 border-futf-blue mb-16"> <!-- Added mb-16 -->
              <h2 class="text-2xl font-bold text-futf-blue mb-4">Varför engagemanget är viktigt !!!</h2>
              <p class="text-gray-900 mb-4">
                För mig är föreningslivet en central del av studentupplevelsen. Det är där vi skapar minnen,
                bygger relationer och utvecklar viktiga färdigheter vid sidan av studierna.
              </p>
              <p class="text-gray-900">
                Som informationsansvarig vill jag arbeta för att FUTF ska nå ut bredare, kommunicera tydligare,
                och stärka gemenskapen bland våra medlemmar. En stark kommunikation både internt och externt
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
import Timeline from '../components/Timeline.vue';
</script>

<style scoped>
.text-futf-blue {
  color: #1b4b7b;
}

.bg-futf-gold {
  background-color: #f2b705;
}

.border-futf-blue {
  border-color: #1b4b7b;
}

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
