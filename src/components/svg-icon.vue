<template>
    <svg :class="svgClass" aria-hidden="true">
        <use class="svg-use" :href="symbolId" />
    </svg>
</template>

<script setup lang="ts">import { computed } from 'vue';

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        required: true
    },
    className: {
        type: String,
        default: ''
    }
})
const symbolId = computed(() => `#${props.name}`)
const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`
    }
    return 'svg-icon'
})
</script>
<style scope lang="less">
.svg-icon {
    fill: currentColor;
}
</style>