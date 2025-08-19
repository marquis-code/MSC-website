<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    label?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'danger'
    disabled?: boolean
    class?: string
    rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Click Me',
    type: 'button',
    variant: 'primary',
    disabled: false,
    class: '',
    rounded: false
})

// 🎨 Base styles
const baseClasses =
    'px-3 py-1 font-semibold focus:outline-none transition-colors transition-el duration-200 flex items-center justify-center'

// 🔹 Variant styles
const variantClasses = computed(() => {
    switch (props.variant) {
        case 'secondary':
            return 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        case 'danger':
            return 'bg-red-500 text-white hover:bg-red-600'
        default: // primary
            return 'bg-primary text-white hover:bg-primary/80'
    }
})
</script>

<template>
    <div>
        <button :type="props.type" :disabled="props.disabled" :class="[
            baseClasses,
            variantClasses, props.rounded ? 'rounded-full' : 'rounded-md',
            props.disabled ? 'opacity-50 cursor-not-allowed' : '',
            props.class
        ]">
            <slot>{{ props.label }}</slot>
        </button>
    </div>
</template>
