<template>
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
  
  export default defineComponent({
    name: 'ScrollToTop',
    setup() {
      const isVisible = ref<boolean>(false);
  
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          isVisible.value = true;
        } else {
          isVisible.value = false;
        }
      };
  
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  
      onMounted(() => {
        window.addEventListener('scroll', toggleVisibility);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', toggleVisibility);
      });
  
      return { isVisible, scrollToTop };
    },
  });
  </script>
  
  <style scoped>
  /* Optional: Additional button styles */
  </style>
  