<template>
    <section class="section" :id="sectionId">
      <div class="section-content">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Section',
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      sectionId: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .section {
    padding: 60px 20px;
    background-color: #f4f4f4;
    text-align: center;
  }
  
  .section-content h2 {
    font-size: 30px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .section-content p {
    font-size: 18px;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  