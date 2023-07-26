<script setup lang="ts">
import type { TouchEvent } from '@uni-helper/uni-app-types'
import { computed } from 'vue'
import '@dada-element/style/src/Button.scss'

export interface ButtonProps {
  type?: 'default' | 'primary' | 'secondary' | 'warning' | 'info'
}
export interface ButtonEmits {
  (e: 'click', event: TouchEvent): void
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
})

const emit = defineEmits<ButtonEmits>()

function click(event: TouchEvent) {
  emit('click', event)
}

const classAry = computed(() => {
  const { type } = props
  return [
    `__dd-button-type-${type}`,
  ]
})
</script>

<template>
  <div class="dada-element-wapper __dd-button" :class="classAry" @click="click">
    <slot />
  </div>
</template>
