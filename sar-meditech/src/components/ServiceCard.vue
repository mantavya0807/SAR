<template>
  <div
    class="service-card bg-neutral-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
    @click="$emit('click')"
    data-aos="fade-up"
  >
    <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-2xl font-semibold text-primary-light mb-2">{{ service.title }}</h3>
      <p class="text-neutral-200 mb-4">{{ service.description }}</p>
      <button class="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Service } from '../type';

export default defineComponent({
  name: 'ServiceCard',
  props: {
    service: {
      type: Object as PropType<Service>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Optional: Additional styles for the Service Card */
</style>
