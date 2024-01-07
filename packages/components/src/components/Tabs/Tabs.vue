<script setup lang="ts">
import type { SwiperOnChangeEvent, TouchEvent } from '@uni-helper/uni-app-types'
import '@dada-element/style/src/Tabs.scss'
import { computed } from 'vue'
import type { tabsOptionsType } from '../../types'

const props = withDefaults(defineProps<{
  /**
   * 标签的类型
   */
  type?: 'primary' | 'secondary'

  /**
   * 标签的尺寸
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * 当前选中的标签值
   */
  value: number | string

  /**
   * 是否显示点状标记
   */
  dotted?: boolean

  /**
   * 是否带有边框
   */
  border?: boolean
  
  /**
   * 是否删除显示主体
   */
  noBody?:boolean

  /**
   * 标签选项配置
   */
  tabsOptions?: tabsOptionsType

  /**
   * 时间函数，用于标签切换的动画
   */
  timeFunction?: 'default' | 'linear' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic'
}>(), {
  size: 'medium',
  type: 'primary',
  border: true,
  dotted: false,
  noBody: false,
  timeFunction: 'default',
})

const emits = defineEmits<{
  /**
   * 当选中的标签值发生变化时触发
   *
   * @param e 事件名称（'update:value'）
   * @param value 新的选中的标签值
   */
  (e: 'update:value', value: number | string): void

  /**
   * 当标签切换时触发
   *
   * @param e 事件名称（'change'）
   * @param event Swiper 切换事件对象
   */
  (e: 'change', event: SwiperOnChangeEvent): void
}>()

const slotArray = computed(() => {
  return props.tabsOptions
    ? props.tabsOptions.map((item, index) => {
      if (item.slotName)
        return item.slotName
      else
        return `slot-${index}`
    })
    : []
})

const labelAreaClassAry = computed(() => {
  const { size, type, dotted, border } = props
  return [
     `__dd-tabs-size-${size}`,
     `__dd-tabs-type-${type}`,
     dotted ? 'dotted' : 'linear',
     border ? 'border' : '',
  ]
})

const labelStyleObj = computed(() => {
  return {
    width: `${100 / slotArray.value.length}%`,
  }
})

const markPosition = computed(() => {
  // 这里的位置信息是根据flex space-arroud来计算的
  const blockWidth = 100 / slotArray.value.length
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
    <swiper v-if="!noBody" easing-function="easeInOutCubic" :current="Number(value)" @change="changeHandle">
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
