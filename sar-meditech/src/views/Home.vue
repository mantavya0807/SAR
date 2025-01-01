<template>
    <main class="w-full">
      <!-- Hero Section with Enhanced Animated Gradient -->
      <section
        class="hero bg-gradient-to-tr from-primary-dark via-primary to-accent text-white h-2/3 md:h-screen flex items-center justify-center relative animate-gradientAnimation bg-gradient-size"
        data-aos="fade-up"
      >
        <!-- Adjusted Gradient Overlay for Better Text Readability -->
        <div class="absolute top-6 left-6 right-6 bottom-6 bg-black opacity-40 rounded-lg"></div>
        <div class="relative z-10 text-center px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeIn">
            SAR MEDITECH PRIVATE LIMITED
          </h1>
          <p class="text-xl md:text-2xl mb-6 drop-shadow-lg animate-fadeIn delay-200">
            Innovative Healthcare Solutions
          </p>
          <router-link
            to="/contact-us"
            class="cta-button inline-block px-6 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-full transition duration-300 transform hover:scale-105 shadow-lg animate-fadeIn delay-400"
          >
            Contact Us
          </router-link>
        </div>
        <!-- Subtle Floating Shapes for Added Depth -->
        <div class="absolute top-10 left-10 w-20 h-20 bg-secondary rounded-full opacity-30 animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-accent rounded-full opacity-30 animate-pulse"></div>
      </section>
  
      <!-- Section Divider -->
      <svg class="w-full h-16" viewBox="0 0 1440 320">
        <path
          fill="#1F2937"
          fill-opacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,202.7C384,203,480,245,576,245.3C672,245,768,203,864,176C960,149,1056,139,1152,165.3C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
  
      <!-- Our Mission -->
      <section class="mission bg-neutral-800 py-16 w-full" data-aos="fade-right">
        <div class="mx-auto px-4 max-w-7xl">
          <h2 class="text-3xl font-semibold text-center text-primary-light mb-8">Our Mission</h2>
          <p class="max-w-3xl mx-auto text-center text-neutral-200 leading-relaxed">
            In the realm of Healthcare commerce, a sophisticated, committed approach is necessitated, involving copious
            investments in both fiscal and personnel resources to yield fruitful outcomes. In alignment with this
            notion, we have embarked upon a diverse range of ventures, particularly in the sphere of Institutional sales,
            and ardently pursue sundry Medical application commodities. Our aspirations entail provisioning myriad Medical
            Apparatus/Instruments/Implants, extending not only to premier Government and Private Hospitals situated within
            Delhi's vicinity but also the vast array of Army Hospitals dispersed throughout India's Union Territory. With
            unwavering dedication, we endeavor to forge enduring connections with Manufacturers and Clients alike. As we
            garner regular commendations and insights from esteemed Institutions, our desire to expand is fueled by the
            discovery of true allies keen on providing capital Equipment and Instruments in North India via our enterprise.
          </p>
        </div>
      </section>
  
      <!-- Experience and Professionalism -->
      <section class="experience bg-neutral-900 py-16 w-full" data-aos="fade-left">
        <div class="mx-auto px-4 max-w-7xl">
          <h2 class="text-3xl font-semibold text-center text-secondary-light mb-8">Experience and Professionalism</h2>
          <p class="max-w-3xl mx-auto text-center text-neutral-200 leading-relaxed">
            Our esteemed establishment, nearing its 25th anniversary, possesses vast knowledge of procurement policies and is
            thoroughly acquainted with the GFR regulations established by the Ministry of Finance, Government of India. Our
            sophisticated office is fully furnished and staffed with committed and seasoned professionals. Over time, we have
            facilitated a staggering 3000-crore business for diverse clientele.
          </p>
        </div>
      </section>
  
      <!-- Profile -->
      <section class="profile bg-neutral-800 py-16 w-full" data-aos="fade-up">
        <div class="mx-auto px-4 max-w-7xl">
          <h2 class="text-3xl font-semibold text-center text-primary-light mb-8">Profile</h2>
          <p class="max-w-3xl mx-auto text-center text-neutral-200 leading-relaxed">
            It has been our Endeavour to cater supply of Medical Equipment’s/Instruments/Implants/Pharmaceutical Products/Diagnostic
            Products etc. not only to different Premier Government Hospitals and Private Hospitals located in and around Delhi but
            also to various Army Hospitals scattered throughout the Union Territory of India. We are also committed to building
            long-lasting relations with the Manufacturers as well as Customers. We are getting regular appraisal and feedback from
            various Institutions and also wish to undergo expansion and in this process are finding real friends who are equally
            eager to supply capital Equipment/Instruments in North India / All India through us.
          </p>
        </div>
      </section>
  
      <!-- Our Team with Enhanced Hover Effects -->
      <section class="team bg-neutral-900 py-16 w-full" data-aos="fade-up">
        <div class="mx-auto px-4 max-w-7xl">
          <h2 class="text-3xl font-semibold text-center text-secondary-light mb-8">Our Team</h2>
          <div class="team-members flex flex-wrap justify-center gap-8">
            <div
              class="member bg-neutral-700 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300"
              data-aos="zoom-in"
              v-for="member in team"
              :key="member.name"
            >
              <h3 class="text-2xl font-bold text-secondary-light mb-2">{{ member.name }}</h3>
              <p class="text-neutral-200">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Services Section with Heroicons -->
      <section class="services bg-neutral-800 py-16 w-full" data-aos="fade-up">
        <div class="mx-auto px-4 max-w-7xl">
          <h2 class="text-3xl font-semibold text-center text-primary-light mb-8">Our Services</h2>
          <div class="flex flex-wrap justify-center gap-8">
            <div
              class="service-item flex flex-col items-center bg-neutral-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
            >
              <AcademicCapIcon class="h-12 w-12 text-secondary-light mb-4 animate-bounce" />
              <h3 class="text-xl font-bold text-secondary-light mb-2">Consulting</h3>
              <p class="text-neutral-200 text-center">
                Expert advice to optimize your healthcare solutions.
              </p>
            </div>
            <div
              class="service-item flex flex-col items-center bg-neutral-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
            >
              <Cog6ToothIcon class="h-12 w-12 text-secondary-light mb-4 animate-spin-slow" />
              <h3 class="text-xl font-bold text-secondary-light mb-2">Implementation</h3>
              <p class="text-neutral-200 text-center">
                Seamless integration of advanced medical equipment.
              </p>
            </div>
            <div
              class="service-item flex flex-col items-center bg-neutral-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
            >
              <PhoneIcon class="h-12 w-12 text-secondary-light mb-4 animate-pulse-slow" />
              <h3 class="text-xl font-bold text-secondary-light mb-2">Support</h3>
              <p class="text-neutral-200 text-center">
                24/7 support for all your medical technology needs.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Subscribe Section with Animated Button -->
      <section class="subscribe bg-neutral-800 py-16 w-full" data-aos="fade-up">
        <div class="mx-auto px-4 max-w-7xl text-center">
          <h2 class="text-3xl font-semibold text-primary-light mb-4">Subscribe</h2>
          <p class="text-neutral-200 mb-8">
            Get 10% off your first purchase when you sign up for our newsletter!
          </p>
          <form @submit.prevent="subscribe" class="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              v-model="email"
              placeholder="Email"
              required
              class="w-full md:w-1/3 px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              class="px-6 py-2 bg-accent hover:bg-accent-dark text-white rounded-lg transition duration-300 transform hover:scale-105 animate-pulse-slow shadow-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import AOS from 'aos';
  import {
    AcademicCapIcon,
    Cog6ToothIcon,
    PhoneIcon,
  } from '@heroicons/vue/24/solid';
  
  interface TeamMember {
    name: string;
    role: string;
  }
  
  export default defineComponent({
    name: 'Home',
    components: {
      AcademicCapIcon,
      Cog6ToothIcon,
      PhoneIcon,
    },
    setup() {
      const email = ref<string>('');
      const team = ref<TeamMember[]>([
        { name: 'Dr. Vishal Mahajan', role: 'Managing Director' },
        { name: 'Dr Anil Kumar', role: 'Director - Technical' },
        { name: 'Ms. Tanya Mahajan', role: 'Director - Corporate Affairs' },
      ]);
  
      const subscribe = (): void => {
        // Handle subscription logic (e.g., API call)
        alert(`Subscribed with ${email.value}!`);
        email.value = '';
      };
  
      onMounted((): void => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
  
      return { email, subscribe, team };
    },
  });
  </script>
  
  <style>
  /* Add keyframes for fadeIn animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Apply the fadeIn animation */
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
  
  .animate-fadeIn.delay-200 {
    animation-delay: 0.2s;
  }
  
  .animate-fadeIn.delay-400 {
    animation-delay: 0.4s;
  }
  
  /* Additional keyframes for service icons */
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes pulse-slow {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.7;
    }
  }
  
  /* Apply the spin-slow animation */
  .animate-spin-slow {
    animation: spin-slow 10s linear infinite;
  }
  
  /* Apply the pulse-slow animation */
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
  </style>
  