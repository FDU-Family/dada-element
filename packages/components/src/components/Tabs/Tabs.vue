<script setup lang="ts">
import type { SwiperOnChangeEvent, TouchEvent } from '@uni-helper/uni-app-types'
import '@dada-element/style/src/Tabs.scss'
import { computed } from 'vue'

export type tabsOptionsType = Array<{
  lable: string
  key: string
  slotName?: string
}>

export interface TabsProps {
  type?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  value: number | string
  dotted?: boolean
  tabsOptions?: tabsOptionsType
  timeFunction?: 'default' | 'linear' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic'
}

export interface TabsEmits {
  (e: 'update:value', value: number | string): void
  (e: 'change', event: SwiperOnChangeEvent): void
}

const props = withDefaults(defineProps<TabsProps>(), {
  size: 'medium',
  type: 'primary',
  dotted: false,
  timeFunction: 'default',
})

const emits = defineEmits<TabsEmits>()

const slotArray = props.tabsOptions
  ? props.tabsOptions.map((item, index) => {
    if (item.slotName)
      return item.slotName
    else
      return `slot-${index}`
  })
  : []

const labelAreaClassAry = computed(() => {
  const { size, type, dotted } = props
  return [
     `__dd-tabs-size-${size}`,
     `__dd-tabs-type-${type}`,
     dotted ? 'dotted' : 'linear',
  ]
})

const labelStyleObj = computed(() => {
  return {
    width: `${100 / slotArray.length}%`,
  }
})

const markPosition = computed(() => {
  // 这里的位置信息是根据flex space-arroud来计算的
  const blockWidth = 100 / slotArray.length
  const { value } = props

  // 起始位置 + 间隔的文字距离 + 选中块的中心位置
  return blockWidth * (Number(value) + 0.5)
})

const labelAreaStyleObj = computed(() => {
  return {
    '--left-pos': `${markPosition.value}%`,
    '--opacity': '1',
  }
})

function labelClassAry(index: number) {
  const { value } = props
  return [
    index === Number(value) ? 'selected' : '',
  ]
}

function changeHandle(e: SwiperOnChangeEvent) {
  emits('update:value', typeof props.value === 'string' ? String(e.detail.current) : e.detail.current)
  emits('change', e)
}
function clickLableHandle(e: TouchEvent, index: number) {
  emits('update:value', typeof props.value === 'string' ? String(index) : index)
}
</script>

<template>
  <div class="dada-element-wrapper">
    <div
      class="__dd-tabs-label-area"
      :class="labelAreaClassAry"
      :style="labelAreaStyleObj"
    >
      <div
        v-for="item, index in tabsOptions"
        :key="item.key"
        class="__dd-tabs-label trans-all"
        :class="labelClassAry(index)"
        :style="labelStyleObj"
        @click="clickLableHandle($event, index)"
      >
        {{ item.lable }}
      </div>
    </div>
    <swiper easing-function="easeInOutCubic" :current="Number(value)" @change="changeHandle">
      <template v-for="item in slotArray" :key="item">
        <swiper-item>
          <slot :name="item" />
        </swiper-item>
      </template>
    </swiper>
  </div>
</template>

<style>

</style>
