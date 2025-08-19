<template>
    <footer class="bg-[#202C3C] py-10">
        <div class="w-10/12 mx-auto ">

            <div class="grid grid-cols-[30%_23.3%_23.3%_23.3%] gap-4 text-white">
                <!-- MSC -->
                <div>
                    <div class="flex items-center space-x-3">
                        <!-- <h2 class="text-sm bg-primary rounded-md py-1.5 text-white px-0.5 font-semibold">MSC</h2> -->
                        <img src="/assets/img/msc-logo-transparent.png" alt="" class="size-[30px]">
                        <h1 class="font-semibold text-lg">Medicare Supply Chain</h1>
                    </div>
                    <p class="my-4 text-white/80 w-10/12">Revolutionizing pharmaceutical distribution in Africa through
                        technology,
                        transparency, and trusted
                        partnerships.</p>

                    <ul class="flex items-center space-x-4">
                        <li v-for="social in socialLinks">
                            <NuxtLink :to="social.path" target="_blank" rel="noopener noreferrer"
                                class="hover:text-primary text-white/60">
                                <Icon :icon="social.icon" class="size-[22px]" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Quick Links -->
                <div>
                    <h1 class="font-semibold text-lg mb-4">Quick Links</h1>
                    <ul class="flex flex-col space-y-3 text-white/80">
                        <li v-for="route, i in useRoutes().slice(1)" :key="i">
                            <NuxtLink :to="route.path" class="hover:text-primary/60">{{
                                i == 2 ? 'Services' : i == 4 ? 'Contact' : route.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h1 class="font-semibold text-lg mb-4">Services</h1>
                    <p v-for="service in services" class="text-white/80 mb-3">
                        {{ service }}
                    </p>
                </div>

                <!-- Contact Info -->
                <div>
                    <h1 class="font-semibold text-lg mb-4">Contact Info</h1>
                    <div v-for="contact in contactInfo" class="text-white/80 mb-4 flex items-center space-x-3">
                        <Icon :icon="contact.icon" class="size-[18px] text-primary" />
                        <h4>{{ contact.text }}</h4>
                    </div>
                </div>
            </div>

            <div class="py-4 mt-5 mb-5 border-t text-sm border-[#424f60] flex items-center justify-between">
                <p class="text-white/70">© 2024 Medicare Supply Chain. All rights reserved.</p>
                <div class="flex items-center space-x-4 text-white/60">
                    <NuxtLink to="#" class="hover:text-primary">Privacy Policy</NuxtLink>
                    <NuxtLink to="#" class="hover:text-primary">Terms of Service</NuxtLink>
                </div>
            </div>
        </div>

    </footer>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const socialLinks = ref([
    {
        path: 'https://google.com',
        icon: 'mynaui:brand-facebook'
    },
    {
        path: 'https://google.com',
        icon: 'si:twitter-line'
    },
    {
        path: 'https://google.com',
        icon: 'lucide:linkedin'
    },
    {
        path: 'https://google.com',
        icon: 'iconoir:instagram'
    },
])

const services = ref(['Pharmaceutical Distribution', 'Inventory Management', 'Supply Chain Analytics', 'Compliance Tracking', 'Partner Network'])

const contactInfo = ref([
    {
        icon: 'solar:phone-outline',
        text: '+234 123 456 7890'
    },
    {
        icon: 'oui:email',
        text: 'info@msc-platform.com'
    },
    {
        icon: 'basil:location-outline',
        text: 'Lagos, Nigeria'
    },
])


</script>

<style></style>