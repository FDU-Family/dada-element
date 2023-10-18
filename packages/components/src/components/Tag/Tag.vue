<script setup lang="ts">
import { computed } from 'vue'
import '@dada-element/style/src/Tag.scss'
import { pxToVw } from '@dada-element/utils'

// import { pxToVw } from '@dada-element/utils'

export interface TagProps {
  width?: number | string
  textColor?: string
  size?: 'small' | 'medium' | 'large'
  textWeight?: number | string
  textSize?: number | string
  bgColor?: string
  type: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}

const props = withDefaults(defineProps<TagProps>(), {
  size: 'medium',
  type: 'default',
})

const classAry = computed(() => {
  const { size, type } = props
  return [
    `__dd-tag-size-${size}`,
    `__dd-tag-type-${type}`,
  ]
})

const styleObj = computed(() => {
  const { width, textColor, bgColor, textWeight, textSize } = props
  const obj: Record<string, any> = {}
  if (textColor)
    obj.color = textColor
  if (bgColor)
    obj.backgroundColor = bgColor
  if (textWeight)
    obj.fontWeight = textWeight
  if (width)
    obj.width = pxToVw(width)
  if (textSize)
    obj.fontSize = pxToVw(textSize)
  return obj
})
</script>

<template>
  <div class="dada-element-wrapper __dd-tag" :class="classAry" :style="styleObj">
    <slot />
  </div>
</template>
