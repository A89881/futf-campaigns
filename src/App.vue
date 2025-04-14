<template>
  <div id="app">
    <Header />
    <Section title="Home" content="Welcome to the Kamala Harris 2024 Campaign!" sectionId="home" />
    <Section title="About" content="Kamala Harris stands for justice, equality, and opportunity." sectionId="about" />
    <Section title="Contact" content="Reach out to us through the form below." sectionId="contact" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Section,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  color: #333;
}
</style>
