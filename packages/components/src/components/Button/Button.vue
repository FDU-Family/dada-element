<script setup lang="ts">
import type { TouchEvent } from '@uni-helper/uni-app-types'
import { computed } from 'vue'
import '@dada-element/style/src/Button.scss'
import { pxToVw } from '@dada-element/utils'

interface ButtonProps {
  /**
   * 按钮类型
   */
  type?: 'default' | 'primary' | 'secondary' | 'warning' | 'info'

  /**
   * 是否是文字按钮
   */
  text?: boolean

  /**
   * 按钮的尺寸
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * 按钮的宽度，当设置`block`为`true`时不可用
   */
  width?: number | string

  /**
   * 是否是圆形按钮
   */
  circle?: boolean

  /**
   * 是否为块状元素
   */
  block?: boolean

  /**
   * 是否有阴影
   */
  shadow?: boolean

  /**
   * 文字颜色
   */
  textColor?: string
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
