<script setup lang="ts">
import '@dada-element/style/src/Radio.scss'
import { computed, watchEffect } from 'vue'
import { useRadio } from './hooks'

const props = withDefaults(defineProps<{
  /**
   * 是否支持多选
   */
  muti?: boolean

  /**
   * 单选框的名称
   */
  name?: string

  /**
   * 单选框的标签
   */
  label?: string

  /**
   * 唯一标识符
   */
  unique?: string

  /**
   * 单选框的选中状态
   */
  value?: boolean

  /**
   * 单选框的类型
   */
  type?: 'default' | 'primary'
}>(), {
  muti: false,
  value: false,
  type: 'default',
})
const emits = defineEmits<{
  /**
   * 选中状态发生变化时触发
   *
   * @param e 事件名称（'update:value'）
   * @param v 新的选中状态值
   */
  (e: 'update:value', v: boolean): null
}>()

const { value, setValue, store } = useRadio(props)

// 与store绑定
watchEffect(() => {
  const { unique, name } = props
  if (unique && name)
    emits('update:value', store.get(unique)!.get(name)!)
})

const containerClassAry = computed(() => {
  const { type } = props
  return [
    `__dd-radio-type-${type}`,
  ]
})

const classAry = computed(() => {
  return [
    value.value ? 'select' : '',
  ]
})

function clickHandle() {
  setValue(!value.value)
}
</script>

<template>
  <div class="dada-element-wrapper __dd-radio-container" :class="containerClassAry">
    <div class=" __dd-radio iconfont dada-mani-confirm" :class="classAry" @click="clickHandle" />
    <div class="__dd-radio-label">
      {{ label }}
    </div>
  </div>
</template>
