<template>
    <div class="not-found" data-aos="fade-in">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/" class="back-home">Go Back Home</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NotFound',
  });
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    text-align: center;
  }
  
  .not-found h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .not-found p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .back-home {
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .back-home:hover {
    background-color: #0056b3;
  }
  </style>
  