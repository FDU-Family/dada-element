<script setup lang="ts">
import { computed } from 'vue'
import '@dada-element/style/src/Icon.scss'

const props = withDefaults(defineProps<{
  /**
   * 图标的名称
   */
  name?: string

  /**
   * 图标的尺寸
   */
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'

  /**
   * 图标的颜色
   */
  color?: string

  /**
   * 图标的背景颜色
   */
  bgColor?: string

  /**
   * 图标的类型
   */
  type?: 'none' | 'default' | 'primary' | 'secondary' | 'warning' | 'info'

  /**
   * 图标文字的类型
   */
  textType?: 'default' | 'primary' | 'secondary' | 'warning' | 'info'

  /**
   * 图标文字的颜色
   */
  textColor?: string

  /**
   * 图标的形状
   */
  shape?: 'circle' | 'square'

  /**
   * 是否带有边框
   */
  border?: boolean

  /**
   * 标签位置
   */
  labelPosition?: 'top' | 'right' | 'bottom' | 'left'

  /**
   * 是否带有阴影
   */
  shadow?: boolean

  /**
   * 图标的标签
   */
  label?: string
}>(), {
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
