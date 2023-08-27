<script setup lang="ts">
import type { TouchEvent } from '@uni-helper/uni-app-types'
import { computed } from 'vue'
import '@dada-element/style/src/Button.scss'
import { pxToVw } from '@dada-element/utils'

interface ButtonProps {
  type?: 'default' | 'primary' | 'secondary' | 'warning' | 'info'
  width?: number | string
  text?: boolean
  textColor?: string
  size?: 'small' | 'medium' | 'large'
  circle?: boolean
  block?: boolean
  shadow?: boolean
}
interface ButtonEmits {
  (e: 'click', event: TouchEvent): void
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  text: false,
  size: 'medium',
  circle: false,
  block: false,
  shadow: false,
})

const emit = defineEmits<ButtonEmits>()

function click(event: TouchEvent) {
  emit('click', event)
}

const classAry = computed(() => {
  const { type, text, size, circle, block, shadow } = props
  return [
    `__dd-button-type-${type}`,
    `__dd-button-size-${size}`,
    text ? '__dd-button-text' : '',
    circle ? '__dd-button-circle' : '',
    block ? '__dd-button-block' : '',
    shadow ? '__dd-button-shadow' : '',
  ]
})
const styleObj = computed(() => {
  const { width, textColor } = props
  const obj: Record<string, any> = {}
  if (width)
    obj.width = pxToVw(width)
  if (textColor)
    obj.color = textColor
  return obj
})
</script>

<template>
  <div class="dada-element-wrapper __dd-button" :class="classAry" :style="styleObj" @click="click">
    <slot />
  </div>
</template>
