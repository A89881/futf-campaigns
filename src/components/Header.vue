<template>
    <header class="bg-darkblue text-white shadow-md">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <div class="font-bold text-xl">FUTF | [Ditt Namn]</div>
        <ul class="flex space-x-6">
          <li><router-link to="/">Start</router-link></li>
          <li><router-link to="/about">Om mig</router-link></li>
          <li><router-link to="/experience">Erfarenhet</router-link></li>
          <li><router-link to="/contact">Kontakt</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .bg-darkblue {
    background-color: #1e3a8a;
  }
  </style>
  