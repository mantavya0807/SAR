<template>
  <div id="app" class="bg-neutral-900 text-neutral-200 min-h-screen overflow-x-hidden">
    <Navbar />
    <router-view />
    <Footer />
    <ScrolltoTop />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue'; // Ensure 'T' is uppercase

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ScrollToTop,
  },
};
</script>

<!-- Removed Scoped CSS -->
<!-- All styling is handled by Tailwind CSS -->
