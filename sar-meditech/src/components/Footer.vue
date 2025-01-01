<template>
  <footer class="bg-neutral-900 text-neutral-200 py-8">
    <div class="mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center">
      <!-- Logo and Description -->
      <div class="flex items-center mb-4 md:mb-0">
        <AcademicCapIcon class="h-6 w-6 mr-2 text-primary-light" />
        <router-link to="/" class="text-primary-light text-lg font-bold">SAR MEDITECH</router-link>
      </div>

      <!-- Quick Links -->
      <div class="flex space-x-4 mb-4 md:mb-0">
        <router-link to="/" class="hover:text-primary-light transition-colors duration-300">Home</router-link>
        <router-link to="/services" class="hover:text-primary-light transition-colors duration-300">Services</router-link>
        <router-link to="/about-us" class="hover:text-primary-light transition-colors duration-300">About Us</router-link>
        <router-link to="/contact-us" class="hover:text-primary-light transition-colors duration-300">Contact Us</router-link>
      </div>

      <!-- Social Media Links -->
      <div class="flex space-x-4">
        <!-- Facebook -->
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary-light transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
          </svg>
        </a>
        <!-- Twitter -->
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary-light transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0024 4.557z" />
          </svg>
        </a>
        <!-- Instagram -->
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary-light transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.042.24 2.513.415a4.92 4.92 0 011.675 1.09 4.92 4.92 0 011.09 1.675c.175.471.357 1.307.415 2.513.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.24 2.042-.415 2.513a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.471.175-1.307.357-2.513.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.042-.24-2.513-.415a4.92 4.92 0 01-1.675-1.09 4.92 4.92 0 01-1.09-1.675c-.175-.471-.357-1.307-.415-2.513-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.206.24-2.042.415-2.513a4.92 4.92 0 011.09-1.675 4.92 4.92 0 011.675-1.09c.471-.175 1.307-.357 2.513-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.013 7.052.07c-1.28.058-2.145.23-2.914.45a6.92 6.92 0 00-2.504 1.655A6.92 6.92 0 00.52 4.68c-.22.769-.392 1.634-.45 2.914C.013 8.332 0 8.741 0 12s.013 3.668.07 4.948c.058 1.28.23 2.145.45 2.914a6.92 6.92 0 001.655 2.504 6.92 6.92 0 002.504 1.655c.769.22 1.634.392 2.914.45C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.07c1.28-.058 2.145-.23 2.914-.45a6.92 6.92 0 002.504-1.655 6.92 6.92 0 001.655-2.504c.22-.769.392-1.634.45-2.914.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.058-1.28-.23-2.145-.45-2.914a6.92 6.92 0 00-1.655-2.504A6.92 6.92 0 0019.68.52c-.769-.22-1.634-.392-2.914-.45C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
          </svg>
        </a>
      </div>
    </div>
    <!-- Copyright -->
    <div class="mt-8 text-center">
      <p>&copy; {{ currentYear }} SAR MEDITECH PRIVATE LIMITED. All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AcademicCapIcon } from '@heroicons/vue/24/solid';

export default defineComponent({
  name: 'Footer',
  components: {
    AcademicCapIcon,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped>
/* Optional: Additional footer styles */
</style>