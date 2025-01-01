<template>
  <main class="w-full mt-16">
    <!-- Contact Form Section -->
    <section class="contact-form bg-neutral-800 py-16 w-full" data-aos="fade-up">
      <div class="mx-auto px-4 max-w-7xl">
        <h2 class="text-3xl font-semibold text-center text-primary-light mb-8">Get in Touch</h2>
        
        <!-- Form and Contact Info Container -->
        <div class="flex flex-col lg:flex-row justify-center items-start gap-8">
          <!-- Contact Form -->
          <div class="w-full lg:w-1/2">
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
              <div>
                <label for="name" class="block text-neutral-200 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label for="email" class="block text-neutral-200 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  :required="true"
                  class="w-full px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label for="message" class="block text-neutral-200 mb-1">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div v-if="successMessage" class="mt-4 p-4 bg-green-800 text-green-100 rounded-lg">
                {{ successMessage }}
              </div>
              <div v-if="errorMessage" class="mt-4 p-4 bg-red-800 text-red-100 rounded-lg">
                {{ errorMessage }}
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="w-full lg:w-1/2 space-y-6">
            <!-- WhatsApp Button -->
            <a
              href="https://wa.me/+919811211838"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              <span class="mr-2">Chat on WhatsApp</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 16.19C16.36 16.45 15.93 16.43 15.59 16.27C14.71 15.87 13.84 15.47 12.96 15.07C12.47 14.83 12.24 14.24 12.24 13.72V9.25C12.24 8.83 12.57 8.5 12.99 8.5C13.41 8.5 13.74 8.83 13.74 9.25V13.16L15.62 14.13C15.9 14.27 16.13 14.51 16.24 14.81C16.35 15.11 16.33 15.44 16.19 15.72L16.64 16.19Z"/>
              </svg>
            </a>

            <!-- Schedule Meeting Button -->
            <button
              @click="showMeetingModal = true"
              class="w-full flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              <span class="mr-2">Schedule a Meeting</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>

            <!-- Map Section -->
            <div class="mt-8">
              <h3 class="text-xl font-semibold text-primary-light mb-4">Our Location</h3>
              <div class="rounded-lg overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.897498579564!2d77.19882279357908!3d28.676219999999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdbc9b0c9ae5%3A0x493c9400a2d861c4!2sDr%20Lal%20Pathlabs%20-%20Patient%20Service%20Centre!5e0!3m2!1sen!2sus!4v1735680255346!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Meeting Modal -->
  <Teleport to="body">
    <div v-if="showMeetingModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-neutral-800 rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-2xl font-semibold text-primary-light">Schedule a Meeting</h3>
          <button @click="showMeetingModal = false" class="text-neutral-400 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="calendar-container">
          <vue-cal
            :events="availableSlots"
            :time-from="9 * 60"
            :time-to="18 * 60"
            :disable-views="['years', 'year', 'month']"
            :hide-weekends="true"
            @cell-click="handleTimeSlotSelection"
            class="custom-calendar"
          />
        </div>
        
        <div class="mt-6 flex justify-end space-x-4">
          <button
            @click="showMeetingModal = false"
            class="px-4 py-2 text-neutral-200 hover:text-white transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            @click="confirmMeeting"
            :disabled="!selectedTimeSlot"
            class="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition duration-300 disabled:opacity-50"
          >
            Confirm Meeting
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

// Types
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface TimeSlot {
  start: Date;
  end: Date;
  title: string;
}

// State
const form = ref<ContactForm>({ name: '', email: '', message: '' });
const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const showMeetingModal = ref(false);
const selectedTimeSlot = ref<TimeSlot | null>(null);

// Generate available time slots for the next 14 days
const availableSlots = generateTimeSlots();

function generateTimeSlots(): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const today = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    if (date.getDay() !== 0 && date.getDay() !== 6) { // Exclude weekends
      for (let hour = 9; hour < 17; hour++) {
        slots.push({
          start: new Date(date.setHours(hour, 0, 0, 0)),
          end: new Date(date.setHours(hour + 1, 0, 0, 0)),
          title: 'Available',
        });
      }
    }
  }
  
  return slots;
}

async function handleSubmit() {
  try {
    isSubmitting.value = true;
    errorMessage.value = '';
    
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
        meeting_time: selectedTimeSlot.value?.start.toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      successMessage.value = 'Message sent successfully!';
      form.value = { name: '', email: '', message: '' };
      selectedTimeSlot.value = null;
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    errorMessage.value = 'Failed to send message. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
}

function handleTimeSlotSelection(event: any) {
  selectedTimeSlot.value = {
    start: event.start,
    end: event.end,
    title: 'Selected',
  };
}

function confirmMeeting() {
  if (selectedTimeSlot.value) {
    form.value.message += `\n\nRequested meeting time: ${selectedTimeSlot.value.start.toLocaleString()}`;
    showMeetingModal.value = false;
  }
}
</script>

<style scoped>
.custom-calendar {
  --vue-cal-selected-bg: theme('colors.primary.DEFAULT');
  --vue-cal-today-bg: theme('colors.neutral.700');
  --vue-cal-cell-hover-bg: theme('colors.neutral.600');
  background-color: theme('colors.neutral.800');
  color: theme('colors.neutral.200');
  border-radius: theme('borderRadius.lg');
  overflow: hidden;
}

.calendar-container {
  max-height: 60vh;
  overflow-y: auto;
}
</style>