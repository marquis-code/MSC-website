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

// Feature items
const features = [
  {
    icon: "mdi:check-circle", // ✅ Simple process
    title: "Simple, transparent buying process",
    description: "Streamlined ordering with clear pricing and no hidden fees.",
  },
  {
    icon: "mdi:shield-check", // 🛡️ Verified suppliers
    title: "Verified suppliers for guaranteed quality",
    description: "All suppliers are verified and products meet regulatory standards.",
  },
  {
    icon: "mdi:truck-delivery-outline", // 🚚 Delivery
    title: "Nationwide delivery with tracking",
    description: "Real-time tracking and reliable delivery across the country.",
  },
  {
    icon: "mdi:chart-bar", // 📊 Pricing & tracking
    title: "Affordable bulk pricing & expiry tracking",
    description: "Competitive bulk rates with full expiry-date transparency and batch tracking.",
  },
]

const sampleProducts = [
  {
    id: 1,
    name: "UniCure IBUTEN 200",
    brand: "UniCure",
    description: "Ibuprofen 200mg tablets for pain and inflammation relief",
    category: "Pain Relief",
    image: Hero1,
    inStock: true,
    prescription: false
  },
  {
    id: 2,
    name: "Plumal DS",
    brand: "UniCure",
    description: "Artemether + Lumefantrine antimalarial combination therapy",
    category: "Antimalarial",
    image: Hero1,
    inStock: true,
    prescription: true
  },
  {
    id: 3,
    name: "Luthermin Injection",
    brand: "Unique Pharmaceuticals",
    description: "Artemether injection for severe malaria treatment",
    category: "Antimalarial",
    image: Hero1,
    inStock: true,
    prescription: true
  },
  {
    id: 4,
    name: "Curefenac 100",
    brand: "UniCure",
    description: "Diclofenac 100mg for anti-inflammatory pain relief",
    category: "Pain Relief",
    image: Hero1,
    inStock: true,
    prescription: false
  },
  {
    id: 5,
    name: "Aluminocure",
    brand: "UniCure",
    description: "Antacid tablets for stomach acid relief and digestive comfort",
    category: "Gastroenterology",
    image: Hero1,
    inStock: true,
    prescription: false
  },
  {
    id: 6,
    name: "DEXACURE",
    brand: "UniCure",
    description: "Dexamethasone tablets for inflammation and immune disorders",
    category: "Corticosteroids",
    image: Hero1,
    inStock: true,
    prescription: true
  }
];

const categories = ["All", "Pain Relief", "Antimalarial", "Gastroenterology", "Corticosteroids"]

const selectedCategory = ref("All")
const searchTerm = ref("")

const filteredProducts = computed(() => {
  return sampleProducts.filter(product => {
    const matchesCategory = selectedCategory.value === "All" || product.category === selectedCategory.value
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <div>
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
          <UiButton class="mt-6 gap-2 transform hover:scale-105 transition-transform rounded-full px-5" rounded>
            Learn More
            <Icon icon="lets-icons:arrow-right-light" width="24" height="24" />
          </UiButton>
        </div>
      </SwiperSlide>


    </Swiper>

    <section id="why" class="w-10/12 mx-auto py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why MSC?
        </h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Four key reasons why MSC is the right choice for your pharmaceutical needs.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index"
          class="border-0 rounded-xl p-6 bg-card transition-el shadow-sm card-futuristic hover-glow group animate-fade-slide"
          :style="{ animationDelay: `${index * 0.1}s` }">
          <!-- Icon -->
          <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 
                   bg-gradient-to-br from-primary/10 to-accent/10 
                   group-hover:from-primary/20 group-hover:to-accent/20 
                   transition-all duration-300">
            <Icon :icon="feature.icon"
              class="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>

          <!-- Title -->
          <h3 class="text-xl font-semibold group-hover:text-primary transition-colors animate-slide-up">
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p class="mt-3 text-base text-muted-foreground leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <LandingProductCatalogue />
    </section>

    <section>
      <LandingBuyingProcess />
    </section>

    <section>
      <LandingFAQ />
    </section>

    <section>
      <LandingNewsletter />
    </section>
  </div>

</template>
