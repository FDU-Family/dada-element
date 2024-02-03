<script setup lang="ts">
import { pxToVw } from '@dada-element/utils'
import { computed } from 'vue'
import type { SwiperOnChangeEvent } from '@uni-helper/uni-app-types'
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

const emits = defineEmits<{
  /**
   * 发生滑动时时触发
   *
   * @param e 事件名称（'update:value'）
   * @param value 新的选中值
   */
  (e: 'update:current', value: number): void
}>()

const styleObj = computed(() => {
  const { height } = props
  const obj: Record<string, string> = {}
  if (height)
    obj.height = pxToVw(height)

  return obj
})

function changeHandle(event: SwiperOnChangeEvent) {
  emits('update:current', event.detail.current)
}
</script>

<template>
  <div class="dada-element-wrapper __dd-swiper">
    <swiper
      :indicator-dots="dots" :autoplay="autoplay" :circular="circular" :dot-color="dotColor"
      :dot-active-color="dotActiveColor" :interval="interval" :vertical="vertical" :touch="touch" :current="current"
      :current-item-id="currentItemId" :style="styleObj" @change="changeHandle"
    >
      <div v-for="item in images" :key="item.id">
        <swiper-item :itemid="item.id">
          <DadaImage :src="item.src" :preview="preview" :mode="mode" />
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>
