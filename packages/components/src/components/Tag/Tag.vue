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
}

const props = withDefaults(defineProps<TagProps>(), {
  size: 'medium',
  textColor: '#FFFFFF',
  bgColor: '#5D3EBD',
})

const classAry = computed(() => {
  const { size } = props
  return [
    `__dd-tag-size-${size}`,
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
