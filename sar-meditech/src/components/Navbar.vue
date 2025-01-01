<template>
    <nav class="bg-neutral-800 bg-opacity-70 backdrop-blur-md w-full fixed top-0 left-0 z-50 shadow-md transition-shadow duration-300">
      <div class="mx-auto px-4 max-w-7xl flex items-center justify-between h-16">
        <!-- Logo Section -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-primary-light text-lg font-bold flex items-center transition-transform duration-300 transform hover:scale-105">
            <AcademicCapIcon class="h-6 w-6 mr-2 animate-bounce" />
            SAR MEDITECH
          </router-link>
        </div>
  
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-baseline space-x-4">
          <router-link
            to="/"
            class="text-neutral-200 hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium"
            :class="{ 'border-b-2 border-primary-light': isActive('/') }"
          >
            Home
          </router-link>
          <router-link
            to="/services"
            class="text-neutral-200 hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium"
            :class="{ 'border-b-2 border-primary-light': isActive('/services') }"
          >
            Services
          </router-link>
          <router-link
            to="/about-us"
            class="text-neutral-200 hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium"
            :class="{ 'border-b-2 border-primary-light': isActive('/about-us') }"
          >
            About Us
          </router-link>
          <router-link
            to="/contact-us"
            class="text-neutral-200 hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium"
            :class="{ 'border-b-2 border-primary-light': isActive('/contact-us') }"
          >
            Contact Us
          </router-link>
        </div>
  
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-neutral-200 hover:text-primary-light focus:outline-none focus:text-primary-light" aria-label="Toggle navigation menu">
            <svg v-if="!isMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu Dropdown -->
      <transition name="fade">
        <div v-if="isMenuOpen" class="md:hidden bg-neutral-800 bg-opacity-90 backdrop-blur-md">
          <router-link
            to="/"
            class="block text-neutral-200 hover:text-primary-light px-4 py-2 border-b border-neutral-700"
            @click="toggleMenu"
            :class="{ 'bg-primary-dark': isActive('/') }"
          >
            Home
          </router-link>
          <router-link
            to="/services"
            class="block text-neutral-200 hover:text-primary-light px-4 py-2 border-b border-neutral-700"
            @click="toggleMenu"
            :class="{ 'bg-primary-dark': isActive('/services') }"
          >
            Services
          </router-link>
          <router-link
            to="/about-us"
            class="block text-neutral-200 hover:text-primary-light px-4 py-2 border-b border-neutral-700"
            @click="toggleMenu"
            :class="{ 'bg-primary-dark': isActive('/about-us') }"
          >
            About Us
          </router-link>
          <router-link
            to="/contact-us"
            class="block text-neutral-200 hover:text-primary-light px-4 py-2"
            @click="toggleMenu"
            :class="{ 'bg-primary-dark': isActive('/contact-us') }"
          >
            Contact Us
          </router-link>
        </div>
      </transition>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { AcademicCapIcon } from '@heroicons/vue/24/solid';
  
  export default defineComponent({
    name: 'Navbar',
    components: {
      AcademicCapIcon,
    },
    setup() {
      const isMenuOpen = ref<boolean>(false);
      const route = useRoute();
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      const isActive = (path: string) => {
        return route.path === path;
      };
  
      return {
        isMenuOpen,
        toggleMenu,
        isActive,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Transition for mobile menu */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  
  /* Optional: Add active link styles */
  .active-link {
    border-bottom: 2px solid #10B981; /* Example: Emerald-500 */
  }
  
  /* Smooth transition for dropdown menu */
  .mobile-menu-enter-active, .mobile-menu-leave-active {
    transition: all 0.3s ease;
  }
  .mobile-menu-enter-from, .mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>
  