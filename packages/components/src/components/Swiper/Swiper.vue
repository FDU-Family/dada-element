<script setup lang="ts">
import { pxToVw } from '@dada-element/utils'
import { computed } from 'vue'
import type { ImageMode } from '../../types'
import '@dada-element/style/src/Swiper.scss'
import DadaImage from '../Image/Image.vue'

export interface swiperImage {
  id: string
  src: string
}

export interface SwiperProps {
  dotColor: string
  dotActiveColor: string
  autoplay: boolean
  interval: number
  vertical: boolean
  circular: boolean
  current?: number
  currentItemId?: string
  touch: boolean
  dots: boolean
  text?: boolean
  images?: swiperImage[]
  mode: ImageMode
  preview?: boolean
  height?: string | number
}

const props = withDefaults(defineProps<SwiperProps>(), {
  dotColor: '#ffffff',
  dotActiveColor: '#5d3ebd',
  autoplay: true,
  interval: 3000,
  vertical: false,
  circular: false,
  touch: true,
  dots: true,
  text: false,
  mode: 'aspectFill',
  preview: false,
})

const styleAry = computed(() => {
  const { height } = props
  const obj: Record<string, string> = {}
  if (height)
    obj.height = pxToVw(height)

  return obj
})
</script>

<template>
  <div class="dada-element-wrapper __dd-swiper">
    <swiper
      :indicator-dots="props.dots"
      :autoplay="props.autoplay"
      :circular="props.circular"
      :dot-color="props.dotColor"
      :dot-active-color="props.dotActiveColor"
      :interval="props.interval"
      :vertical="props.vertical"
      :touch="props.touch"
      :current="props.current"
      :current-item-id="props.currentItemId"
      :style="styleAry"
    >
      <div v-for="(item) in props.images" :key="item.id">
        <swiper-item :itemid="item.id">
          <DadaImage :src="item.src" :preview="props.preview" :mode="props.mode" />
          <slot />
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>
