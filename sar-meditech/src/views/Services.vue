<template>
  <main class="w-full mt-16"> <!-- Adjust top margin for fixed navbar -->
    <!-- Hero Section -->
    <section
      class="hero bg-gradient-to-tr from-accent via-primary to-secondary text-white h-64 md:h-96 flex items-center justify-center relative"
      data-aos="fade-down"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-3xl md:text-5xl font-bold mb-2">Our Services</h1>
        <p class="text-md md:text-lg">Delivering Excellence in Healthcare Solutions</p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 w-full bg-neutral-800" data-aos="fade-up">
      <div class="mx-auto px-4 max-w-7xl">
        <h2 class="text-3xl font-semibold text-center text-primary-light mb-12">What We Offer</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :service="service"
            @click="openModal(service)"
          />
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

    <!-- Call to Action Section -->
    <section class="cta bg-accent text-white py-16 w-full" data-aos="fade-up">
      <div class="mx-auto px-4 max-w-7xl text-center">
        <h2 class="text-3xl font-semibold mb-4">Ready to Transform Your Healthcare Solutions?</h2>
        <p class="mb-8">Contact us today to discuss how we can help you achieve excellence in your healthcare projects.</p>
        <router-link
          to="/contact-us"
          class="px-6 py-3 bg-primary-light rounded-lg hover:bg-primary transition-colors duration-300"
        >
          Get in Touch
        </router-link>
      </div>
    </section>
  </main>

  <!-- Modal for Service Details -->
  <transition name="fade">
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-neutral-800 rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 relative">
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white hover:text-accent transition-colors duration-300"
          aria-label="Close Modal"
        >
          <!-- Close Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 class="text-2xl font-semibold text-primary-light mb-4">{{ selectedService.title }}</h3>
        <img
          :src="selectedService.image"
          :alt="selectedService.title"
          class="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p class="text-neutral-200">{{ selectedService.details }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ServiceCard from '../components/ServiceCard.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import { Service, Testimonial } from '../type.ts';

export default defineComponent({
  name: 'Services',
  components: {
    ServiceCard,
    ScrollToTop,
  },
  setup() {
    const services = ref<Service[]>([
      {
        title: 'Medical Equipment Supply',
        description: 'Providing high-quality medical equipment tailored to your needs.',
        image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Medical+Equipment',
        details:
          'Our Medical Equipment Supply service ensures that your healthcare facility is equipped with the latest and most reliable medical instruments. We offer a wide range of products, including diagnostic tools, surgical instruments, and patient care equipment, all sourced from reputable manufacturers.',
      },
      {
        title: 'Healthcare Consulting',
        description: 'Expert advice to optimize your healthcare operations.',
        image: 'https://placehold.co/600x400/10b981/ffffff?text=Healthcare+Consulting',
        details:
          'Our Healthcare Consulting services are designed to help you streamline your operations, improve patient care, and enhance overall efficiency. Our team of experts works closely with you to identify areas of improvement and implement strategic solutions that drive success.',
      },
      {
        title: 'IT Solutions for Healthcare',
        description: 'Innovative IT services to support your healthcare infrastructure.',
        image: 'https://placehold.co/600x400/6366f1/ffffff?text=IT+Solutions',
        details:
          'We provide comprehensive IT Solutions tailored for the healthcare industry. From electronic health records (EHR) implementation to cybersecurity measures, our services ensure that your IT infrastructure is robust, secure, and compliant with industry standards.',
      },
      {
        title: 'Medical Training Programs',
        description: 'Training programs to enhance the skills of your healthcare staff.',
        image: 'https://placehold.co/600x400/ec4899/ffffff?text=Medical+Training',
        details:
          'Our Medical Training Programs are designed to equip your healthcare staff with the necessary skills and knowledge to excel in their roles. We offer a variety of courses, including clinical training, administrative workshops, and specialized certifications, all led by experienced professionals.',
      },
    ]);

    const testimonials = ref<Testimonial[]>([
      {
        id: 1,
        name: 'Alice Johnson',
        position: 'Hospital Administrator',
        message:
          'SAR Meditech has significantly improved our equipment procurement process with their reliable and efficient services.',
        photo: 'https://placehold.co/200x200/3b82f6/ffffff?text=AJ',
      },
      {
        id: 2,
        name: 'Michael Lee',
        position: 'Chief Medical Officer',
        message:
          'Their healthcare consulting services have been invaluable in optimizing our operations and enhancing patient care.',
        photo: 'https://placehold.co/200x200/10b981/ffffff?text=ML',
      },
      {
        id: 3,
        name: 'Sarah Williams',
        position: 'IT Manager',
        message:
          'The IT solutions provided by SAR Meditech have strengthened our infrastructure and ensured compliance with industry standards.',
        photo: 'https://placehold.co/200x200/ec4899/ffffff?text=SW',
      },
    ]);

    // Modal State
    const showModal = ref(false);
    const selectedService = ref<Service | null>(null);

    // Event Handlers
    const openModal = (service: Service) => {
      selectedService.value = service;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
      selectedService.value = null;
    };

    return {
      services,
      testimonials,
      showModal,
      selectedService,
      openModal,
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

/* Hover Effects */
.service-card:hover {
  /* Additional hover effects if needed */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .services .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

/* Modal Content Scrollbar */
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
  color: #3b82f6; /* Tailwind's blue-500 */
}

.text-secondary-light {
  color: #ec4899; /* Tailwind's pink-500 */
}

.bg-accent {
  background-color: #10b981; /* Tailwind's green-500 */
}

.bg-accent-dark {
  background-color: #059669; /* Tailwind's green-600 */
}

.bg-secondary-dark {
  background-color: #db2777; /* Tailwind's pink-600 */
}
</style>
