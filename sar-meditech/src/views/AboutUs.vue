<template>
    <main class="w-full mt-16"> <!-- Added top margin to account for fixed navbar -->
      <!-- Hero Section -->
      <section class="hero bg-gradient-to-tr from-primary-dark via-primary to-accent text-white h-64 md:h-96 flex items-center justify-center relative" data-aos="fade-down">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative z-10 text-center px-4">
          <h1 class="text-3xl md:text-5xl font-bold mb-2">About Us</h1>
          <p class="text-md md:text-lg">Committed to Excellence in Healthcare Solutions</p>
        </div>
      </section>
  
      <!-- Company History or Timeline -->
      <section class="history bg-neutral-800 py-16 w-full" data-aos="fade-up">
        <div class="mx-auto px-4 max-w-7xl">
          <h2 class="text-3xl font-semibold text-center text-primary-light mb-8">Our Journey</h2>
          <div class="timeline relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-neutral-600"></div>
  
            <!-- Timeline Events -->
            <div
              v-for="(event, index) in timelineEvents"
              :key="index"
              class="mb-8 flex items-center"
              :class="index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'"
              @mouseenter="handleMouseEnter(event)"
              @mouseleave="handleMouseLeave"
            >
              <!-- Event Content -->
              <div class="w-1/2 px-6 py-4 bg-neutral-700 rounded-lg shadow-lg" :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'">
                <h3 class="text-xl font-bold text-primary-light mb-2">{{ event.year }}</h3>
                <p class="text-neutral-200">{{ event.description }}</p>
              </div>
  
              <!-- Event Marker -->
              <div class="w-1/2 flex justify-center">
                <div class="w-4 h-4 bg-accent rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Team Section -->
      <section class="team bg-neutral-900 py-16 w-full" data-aos="fade-up">
        <div class="mx-auto px-4 max-w-7xl">
          <h2 class="text-3xl font-semibold text-center text-secondary-light mb-8">Meet Our Team</h2>
          <div class="team-members grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="member bg-neutral-700 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300"
              data-aos="zoom-in"
              v-for="member in team"
              :key="member.name"
            >
              <img
                :src="member.photo"
                :alt="member.name"
                class="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 class="text-2xl font-bold text-secondary-light text-center mb-2">{{ member.name }}</h3>
              <p class="text-neutral-200 text-center">{{ member.role }}</p>
              <p class="text-neutral-400 text-center mt-2">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="testimonials bg-neutral-800 py-16 w-full" data-aos="fade-up">
        <div class="mx-auto px-4 max-w-7xl">
          <h2 class="text-3xl font-semibold text-center text-primary-light mb-8">What Our Clients Say</h2>
          <div class="testimonials-carousel flex flex-col md:flex-row justify-center items-center gap-8">
            <div
              class="testimonial bg-neutral-700 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300"
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              data-aos="zoom-in"
            >
              <img
                :src="testimonial.photo"
                :alt="testimonial.name"
                class="w-16 h-16 object-cover rounded-full mb-4"
              />
              <p class="text-neutral-200 italic mb-4">"{{ testimonial.message }}"</p>
              <h4 class="text-xl font-bold text-secondary-light">{{ testimonial.name }}</h4>
              <p class="text-neutral-400">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Mission and Vision -->
      <section class="mission-vision bg-neutral-900 py-16 w-full" data-aos="fade-up">
        <div class="mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Mission -->
          <div class="mission p-6 bg-neutral-700 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-primary-light mb-4">Our Mission</h3>
            <p class="text-neutral-200">
              To deliver innovative and reliable healthcare solutions that enhance the quality of life for our clients and their patients.
            </p>
          </div>
          <!-- Vision -->
          <div class="vision p-6 bg-neutral-700 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-primary-light mb-4">Our Vision</h3>
            <p class="text-neutral-200">
              To be a leading provider of advanced medical technologies, setting benchmarks in quality, service, and sustainability.
            </p>
          </div>
        </div>
      </section>
    </main>
  
    <!-- Modal for Timeline Events -->
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-neutral-800 rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 relative">
          <button @click="closeModal" class="absolute top-4 right-4 text-white hover:text-accent transition-colors duration-300">
            <!-- Close Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 class="text-2xl font-semibold text-primary-light mb-4">{{ selectedTimelineEvent.year }}</h3>
          <p class="text-neutral-200">{{ selectedTimelineEvent.details }}</p>
        </div>
      </div>
    </transition>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ScrollToTop from '../components/ScrollToTop.vue';
  
  export default defineComponent({
    name: 'AboutUs',
    components: {
      ScrollToTop,
    },
    setup() {
        const team = ref<TeamMember[]>([
  {
    name: 'Dr. Vishal Mahajan',
    role: 'Managing Director',
    bio: 'With over 25 years of experience in the healthcare industry, Dr. Vishal Mahajan leads our company with vision and expertise.',
    photo: 'https://ui-avatars.com/api/?name=Vishal+Mahajan&size=150&background=4F46E5&color=fff',
  },
  {
    name: 'Dr. Anil Kumar',
    role: 'Director - Technical',
    bio: 'Dr. Anil Kumar oversees all technical aspects, ensuring our solutions are cutting-edge and reliable.',
    photo: 'https://ui-avatars.com/api/?name=Anil+Kumar&size=150&background=10B981&color=fff',
  },
  {
    name: 'Ms. Tanya Mahajan',
    role: 'Director - Corporate Affairs',
    bio: 'Ms. Tanya Mahajan manages corporate relationships and ensures our operations align with our strategic goals.',
    photo: 'https://ui-avatars.com/api/?name=Tanya+Mahajan&size=150&background=F59E0B&color=fff',
  },
]);

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: 'John Doe',
    position: 'Hospital Administrator',
    message: 'SAR Meditech has transformed our procurement process with their reliable and efficient solutions.',
    photo: 'https://ui-avatars.com/api/?name=John+Doe&size=150&background=6366F1&color=fff',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Medical Practitioner',
    message: 'Their commitment to excellence is evident in every interaction. Highly recommended!',
    photo: 'https://ui-avatars.com/api/?name=Jane+Smith&size=150&background=8B5CF6&color=fff',
  },
  {
    id: 3,
    name: 'Robert Brown',
    position: 'Healthcare Consultant',
    message: 'A trusted partner in delivering top-notch medical equipment and services.',
    photo: 'https://ui-avatars.com/api/?name=Robert+Brown&size=150&background=EC4899&color=fff',
  },
]);
  
      const timelineEvents = ref([
        {
          year: '1999',
          description: 'Founded SAR Meditech Private Limited with a vision to revolutionize healthcare solutions.',
          details: 'In 1999, SAR Meditech Private Limited was established with the goal of providing innovative healthcare solutions. Our initial focus was on delivering high-quality medical instruments and establishing strong relationships with healthcare providers.',
        },
        {
          year: '2005',
          description: 'Expanded our services to include a wide range of medical instruments and implants.',
          details: 'By 2005, SAR Meditech expanded its product line to encompass a diverse array of medical instruments and implants. This expansion allowed us to cater to a broader clientele and address more comprehensive healthcare needs.',
        },
        {
          year: '2015',
          description: 'Achieved a milestone of facilitating 3000-crore business for diverse clientele.',
          details: 'In 2015, SAR Meditech celebrated a significant milestone by facilitating business worth 3000 crores. This achievement was a testament to our unwavering commitment to excellence and the trust our clients place in us.',
        },
        {
          year: '2024',
          description: 'Continuing our journey towards innovation and excellence in healthcare commerce.',
          details: 'As we move forward in 2024, SAR Meditech remains dedicated to pushing the boundaries of innovation in healthcare commerce. Our focus is on integrating advanced technologies and sustainable practices to deliver unparalleled value to our clients.',
        },
      ]);
  
      // Modal State
      const showModal = ref(false);
      const selectedTimelineEvent = ref(null);
  
      // Event Handlers
      const handleMouseEnter = (event: any) => {
        selectedTimelineEvent.value = event;
        showModal.value = true;
      };
  
      const handleMouseLeave = () => {
        // Optional: Add a delay before closing the modal to allow interaction
        setTimeout(() => {
          showModal.value = false;
          selectedTimelineEvent.value = null;
        }, 300); // Adjust delay as needed
      };
  
      const closeModal = () => {
        showModal.value = false;
        selectedTimelineEvent.value = null;
      };
  
      return {
        team,
        testimonials,
        timelineEvents,
        showModal,
        selectedTimelineEvent,
        handleMouseEnter,
        handleMouseLeave,
        closeModal,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Fade transition for modal */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  /* Additional hover effects */
  .contact-form form input,
  .contact-form form textarea,
  .contact-form form button {
    @apply transition-transform duration-300 ease-in-out;
  }
  
  .contact-form form input:focus,
  .contact-form form textarea:focus {
    @apply scale-105;
  }
  
  /* Vue Cal Customization */
  .vuecal {
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  /* Optional: Add box-shadow to calendar */
  .vuecal-wrapper {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Modal Styling */
  .fixed {
    z-index: 50;
  }
  
  .bg-opacity-50 {
    opacity: 0.5;
  }
  
  .bg-neutral-800 {
    background-color: #1f2937;
  }
  
  .text-primary-light {
    color: #3b82f6; /* Example: Tailwind's blue-500 */
  }
  
  .text-secondary-light {
    color: #ec4899; /* Example: Tailwind's pink-500 */
  }
  
  .bg-accent {
    background-color: #10b981; /* Example: Tailwind's green-500 */
  }
  
  .bg-accent-dark {
    background-color: #059669; /* Example: Tailwind's green-600 */
  }
  
  .bg-secondary-dark {
    background-color: #db2777; /* Example: Tailwind's pink-600 */
  }
  
  @media (max-width: 768px) {
    .timeline::before {
      left: 20px;
    }
  
    .timeline > div {
      flex-direction: column !important;
    }
  
    .timeline > div > div:nth-child(1) {
      margin-left: 40px;
    }
  
    .timeline > div > div:nth-child(2) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  /* Hover Effects for Timeline Events */
  .timeline > div > div:nth-child(1) .bg-neutral-700,
  .timeline > div > div:nth-child(2) .bg-neutral-700 {
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  .timeline > div > div:nth-child(1) .bg-neutral-700:hover,
  .timeline > div > div:nth-child(2) .bg-neutral-700:hover {
    background-color: #374151; /* Tailwind's bg-neutral-600 */
    transform: translateY(-5px);
  }
  
  /* Modal Content Scrollbar */
  .modal-content {
    max-height: 80vh;
    overflow-y: auto;
  }
  </style>
  