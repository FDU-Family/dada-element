<script setup lang="ts">
import { computed } from 'vue'
import '@dada-element/style/src/Icon.scss'

interface IconProps {
  name?: string
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
  color?: string
  bgColor?: string
  type?: 'none' | 'default' | 'primary' | 'secondary' | 'warning' | 'info'
  textType?: 'default' | 'primary' | 'secondary' | 'warning' | 'info'
  textColor?: string
  shape?: 'circle' | 'square'
  border?: boolean
  labelPosition?: 'top' | 'right' | 'bottom' | 'left'
  shadow?: boolean
  label?: string
}
const props = withDefaults(defineProps<IconProps>(), {
  size: 'medium',
  type: 'default',
  shape: 'circle',
  border: false,
  labelPosition: 'bottom',
  textType: 'default',
})

const iconClassAry = computed(() => {
  const { name, size, type, shadow, shape, border, labelPosition } = props
  return [
    name,
    `__dd-icon-size-${size}`,
    `__dd-icon-type-${type}`,
    `__dd-icon-shape-${shape}`,
    `__dd-icon-label-${labelPosition}`,
    shadow ? '__dd-icon-shadow' : '',
    border ? '__dd-icon-border' : '',
  ]
})

const iconStyleAry = computed(() => {
  const { bgColor, color } = props
  const obj: Record<string, any> = {}
  if (bgColor)
    obj.backgroundColor = bgColor
  if (color)
    obj.color = color
  return obj
})

const classAry = computed(() => {
  const { labelPosition } = props
  return [`__dd-icon-label-${labelPosition}`]
})

const labelStyleAry = computed(() => {
  const { textColor } = props
  const obj: Record<string, any> = {}
  if (textColor)
    obj.color = textColor
  return obj
})
</script>

<template>
  <div class="dada-element-wrapper __dd-icon-container" :class="classAry">
    <div class="iconfont __dd-icon-area" :class="iconClassAry" :style="iconStyleAry" />
    <div v-if="props.label" class="__dd-icon-label" :style="labelStyleAry">
      {{ props.label }}
    </div>
  </div>
</template>
