<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Data for steps
const steps = [
    {
        icon: 'mdi:magnify', // 🔍 Search
        title: "Browse & Search",
        description: "Quickly explore a wide range of products using our smart search and easy to navigate categories",
        step: "Step 1"
    },
    {
        icon: 'mdi:cart-outline', // 🛒 Shopping cart
        title: "Add to Cart",
        description: "Select the product you need and add them to cart with clear product details and pricing",
        step: "Step 2"
    },
    {
        icon: 'mdi:credit-card-outline', // 💳 Credit Card
        title: "Checkout",
        description: "Complete purchase securely with secure payment",
        step: "Step 3"
    },
    {
        icon: 'mdi:truck-delivery-outline', // 🚚 Truck
        title: "Fast & Safe Delivery",
        description: "Enjoy peace of mind as your order is carefully packed and delivered swiftly to your doorstep",
        step: "Step 4"
    }
]
</script>

<template>
    <section class="py-16 md:py-24 bg-muted/30">
        <div class="container mx-auto px-4">
            <!-- Header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    🔹 How it works
                </h2>
                <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Simple 4-step process to get the pharmaceutical products you need
                </p>
            </div>

            <!-- Steps Vertical Flow -->
            <div class="max-w-4xl mx-auto">
                <div v-for="(step, index) in steps" :key="index" class="relative">
                    <div class="flex items-start space-x-6 pb-12">

                        <!-- Step Number & Icon -->
                        <div class="flex-shrink-0 relative">
                            <!-- Step Number -->
                            <div
                                class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 relative z-10 animate-pulse">
                                {{ index + 1 }}
                            </div>
                            <!-- Icon Circle -->
                            <div
                                class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto -mt-18 relative group-hover:scale-110 transition-transform duration-300">
                                <Icon :icon="step.icon"
                                    class="h-8 w-8 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-accent" />
                            </div>

                            <!-- Connecting Line -->
                            <div v-if="index !== steps.length - 1"
                                class="absolute top-20 left-1/2 w-0.5 h-20 bg-primary/30 -translate-x-0.5" />
                        </div>

                        <!-- Card Content -->
                        <div class="flex-1 pt-2">
                            <div class="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 hover:bg-gradient-to-br hover:from-background hover:to-primary/5 animate-fade-slide"
                                :style="{ animationDelay: `${index * 0.2}s` }">
                                <div class="p-6">
                                    <h3
                                        class="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {{ step.title }}
                                    </h3>
                                    <p class="text-muted-foreground text-sm font-medium">
                                        {{ step.step }}
                                    </p>
                                    <p class="text-foreground/80 leading-relaxed mt-2">
                                        {{ step.description }}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
