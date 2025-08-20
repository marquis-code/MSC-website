<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
    modelValue?: string
    placeholder?: string
    startIcon?: string
    endIcon?: string
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    placeholder: '',
    startIcon: '',
    endIcon: '',
    class: ''
})

const emit = defineEmits(['update:modelValue'])

const isFocused = ref(false)
</script>

<template>
    <div class="flex px-4 items-center rounded-md border transition-all duration-200" :class="[
        isFocused ? 'border-primary shadow-sm' : 'border-gray-300',
        props.class
    ]">
        <!-- Start Icon -->
        <Icon v-if="props.startIcon" :icon="props.startIcon" class="text-gray-400 mr-2" />

        <!-- Input -->
        <input type="text" :placeholder="props.placeholder"
            class="flex-1 focus:outline-none focus:ring-0 bg-transparent border-none text-gray-700 placeholder-gray-400"
            :value="props.modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            @focus="isFocused = true" @blur="isFocused = false" />

        <!-- End Icon -->
        <Icon v-if="props.endIcon" :icon="props.endIcon" class="text-gray-400 ml-2  hover:text-gray-600 transition" />
    </div>
</template>
