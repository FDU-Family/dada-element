<script setup lang="ts">
import { computed } from 'vue'
import '@dada-element/style/src/Avatar.scss'
import DadaImage from '../Image/Image.vue'
import type { ImageMode } from '../../types'

interface AvatarProps {
  src: string
  size: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
  shape: 'circle' | 'square'
  mode: ImageMode
  border: boolean
  shadow: 'none' | 'medium' | 'large'
  preview: boolean
  previewSrc: string
  width: number | string
}

const props = withDefaults(defineProps<AvatarProps>(), {
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
