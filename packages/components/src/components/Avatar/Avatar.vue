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
  <div class="dada-element-wrapper __dada-avatar-container" :class="ClassAry">
    <DadaImage :src="props.src" :preview="props.preview" :mode="props.mode" />
  </div>
</template>
