<template>
    <footer class="footer">
      <div class="contact-info">
        <p><strong>Contact Us:</strong></p>
        <p>Email: contact@kamalaharris2024.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, Suite 100, Washington, DC</p>
      </div>
      <div class="social-links">
        <a href="https://twitter.com/KamalaHarris" target="_blank" class="social-link">Twitter</a>
        <a href="https://www.facebook.com/KamalaHarris" target="_blank" class="social-link">Facebook</a>
        <a href="https://www.instagram.com/KamalaHarris" target="_blank" class="social-link">Instagram</a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #0033a0; /* Same blue as the header */
    color: white;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .contact-info {
    flex: 1;
  }
  
  .contact-info p {
    margin: 5px 0;
  }
  
  .social-links a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
    font-size: 16px;
  }
  
  .social-links a:hover {
    text-decoration: underline;
  }
  </style>
  