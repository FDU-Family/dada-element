<script setup lang="ts">
import { pxToVw } from '@dada-element/utils'
import { computed } from 'vue'
import type { SwiperOnChangeEvent } from '@uni-helper/uni-app-types'
import type { ImageMode } from '../../types'
import '@dada-element/style/src/Swiper.scss'
import DadaImage from '../Image/Image.vue'

export interface SwiperImage {
  id: string
  src: string
}

export interface SwiperProps {
  /**
   * 每张图像点的颜色
   */
  dotColor: string
  /**
   * 选中的点的颜色
   */
  dotActiveColor: string
  /**
   * 是否自动播放
   */
  autoplay: boolean
  /**
   * 每帧停留多长时间 1000 = 1s
   */
  interval: number
  /**
   * 滑动方向是否为纵向
   */
  vertical: boolean
  /**
   * 	是否采用衔接滑动，即播放到末尾后重新回到开头
   */
  circular: boolean
  /**
   * 当前所在滑块的 index
   */
  current?: number
  /**
   * 当前所在滑块的 item-id ，不能与 current 被同时指定
   */
  currentItemId?: string
  /**
   * 是否监听用户的触摸事件，只在初始化时有效，不能动态变更
   */
  touch: boolean
  /**
   * 是否显示面板指示点
   */
  dots: boolean
  /**
   *
   */
  text?: boolean
  /**
   * 图像地址
   */
  images?: SwiperImage[]
  /**
   * 图像展示mode
   */
  mode: ImageMode
  /**
   * 是否可预览
   */
  preview?: boolean
  /**
   * Swiper宽度
   */
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
  /**
   * 发生点击时触发
   *
   * @param e 事件名称（'update:value'）
   * @param value 新的选中值
   */
  (e: 'imageEvent', value: string | number | object): void
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

function imageHandler(value: string | number | object) {
  emits('imageEvent', value)
}
</script>

<template>
  <div class="dada-element-wrapper __dd-swiper">
    <swiper
      :indicator-dots="dots" :autoplay="autoplay" :circular="circular" :dot-color="dotColor"
      :dot-active-color="dotActiveColor" :interval="interval" :vertical="vertical" :touchable="touch" :current="current"
      :current-item-id="currentItemId" :style="styleObj" @change="changeHandle"
    >
      <div v-for="item in images" :key="item.id">
        <swiper-item :itemid="item.id" @click="imageHandler(item.id)">
          <DadaImage :src="item.src" :preview="preview" :mode="mode" />
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>
