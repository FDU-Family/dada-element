<script setup lang="ts">
import { computed } from 'vue'
import '@dada-element/style/src/Avatar.scss'
import DadaImage from '../Image/Image.vue'
import type { ImageMode } from '../../types'

const props = withDefaults(defineProps<{
  /**
   * 头像url
   */
  src: string

  /**
   * 头像尺寸
   */
  size: 'tiny' | 'small' | 'medium' | 'large' | 'huge'

  /**
   * 头像形状
   */
  shape: 'circle' | 'square'

  /**
   * 图片显示模式
   */
  mode: ImageMode

  /**
   * 是否有头像边框
   */
  border: boolean

  /**
   * 是否有阴影
   */
  shadow: 'none' | 'medium' | 'large'

  /**
   * 是否能预览
   */
  preview: boolean

  /**
   * 预览url
   */
  previewSrc: string

  /**
   * 设置大小，默认宽高相等
   */
  width: number | string
}>(), {
  src: '',
  size: 'medium',
  mode: 'aspectFill',
  shape: 'circle',
  shadow: 'none',
  lazy: false,
  preview: false,
  previewSrc: '',
  border: false,
})

const StyleObj = computed(() => {
  const obj: Record<string, string> = {}
  const { width } = props
  if (width) {
    obj.width = `${width}px`
    obj.height = `${width}px`
  }
  return obj
})

const ClassAry = computed(() => {
  const { size, shape, shadow, border } = props
  return [
    `__dd-avatar-size-${size}`,
    `__dd-avatar-shape-${shape}`,
    `__dd-avatar-shadow-${shadow}`,
    border ? '__dd-avatar-border' : '',
  ]
})
</script>

<template>
  <div class="dada-element-wrapper __dada-avatar-container" :class="ClassAry" :style="StyleObj">
    <DadaImage :src="props.src" :preview="props.preview" :mode="props.mode" />
  </div>
</template>
