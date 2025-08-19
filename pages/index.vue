<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Icon } from '@iconify/vue'
import Hero1 from '@/assets/img/hero-image-1.jpeg'
import Hero2 from '@/assets/img/hero-image-2.jpeg'
import Hero3 from '@/assets/img/hero-image-3.jpeg'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 👇 import your button component
import Button from '@/components/ui/Button.vue'

const slides = [
  {
    id: 1,
    title: "Delivered safe, Delivered Fast",
    description: "Reliable delivery straight to your doorstep, hassle free",
    image: Hero1
  },
  {
    id: 2,
    title: "Affordable & Quick",
    description: "We ensure fast delivery at affordable rates",
    image: Hero2
  },
  {
    id: 3,
    title: "Trusted by Thousands",
    description: "Your packages, delivered securely and on time",
    image: Hero3
  }
]
</script>

<template>
  <Swiper :modules="[Navigation, Pagination, Autoplay]" :slides-per-view="1" :loop="true" :autoplay="{ delay: 5000 }"
    navigation pagination class="w-full h-[480px] relative">
    <SwiperSlide v-for="slide, i in slides" :key="slide.id" class="relative w-full h-full">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${slide.image})` }" />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40" />

      <!-- Content -->
      <div class="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 text-white">
        <h2 class="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
          {{ slide.title }}
        </h2>
        <p class="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
          {{ slide.description }}
        </p>

        <!-- 🔹 Integrated AppButton -->
        <Button class="mt-6 gap-2 transform hover:scale-105 transition-transform rounded-full px-5" rounded>
          Learn More
          <Icon icon="lets-icons:arrow-right-light" width="24" height="24" />
        </Button>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
