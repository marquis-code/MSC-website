<template>
    <div class="shadow py-4">
        <div class="w-10/12 mx-auto flex items-center justify-between">
            <div class="flex items-center space-x-1">
                <img src="/assets/img/msc-logo.png" alt="" class="size-[30px]">
                <NuxtLink to="/" class="font-bold text-primary text-2xl">MSC</NuxtLink>
            </div>
            <nav>
                <ul class="flex items-center space-x-7">
                    <li v-for="route in useRoutes()" :key="route.path">
                        <NuxtLink :to="route.path" class="text-primary font-medium hover:text-primary/60">{{
                            route.title }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div></div>
        </div>
    </div>
</template>