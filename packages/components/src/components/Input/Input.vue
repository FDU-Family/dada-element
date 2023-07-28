<script setup lang="ts">
import type { InputOnInputEvent } from '@uni-helper/uni-app-types'
import '@dada-element/style/src/Input.scss'
import { computed, ref } from 'vue'

export interface InputProps {
  placeholder?: string
  width?: string | number
  shadow?: boolean
  border?: boolean
  size?: 'small' | 'medium' | 'large'
  value?: string
}

export interface InputEmits {
  (e: 'update:value', value: string): void
}

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  width: 200,
  shadow: false,
  border: false,
  size: 'medium',
})

const emits = defineEmits<InputEmits>()

const isFocus = ref(false)

const containerClassAry = computed(() => {
  const { shadow, border } = props
  return [
    shadow ? '__dd-input-shadow' : '',
    border ? '__dd-input-border' : '',
  ]
})

const areaClassAry = computed(() => {
  const { size } = props
  return [
    `__dd-input-size-${size}`,
  ]
})

const classAry = computed(() => {
  return [
  ]
})

const styleObj = computed(() => {
  const { width } = props
  const obj: Record<string, any> = {}
  if (width)
    obj.width = `${width}px`
  return obj
})

function inputHandle(e: InputOnInputEvent) {
  emits('update:value', e.detail.value)
}

function blurHandle() {
  isFocus.value = false
}

function focus() {
  isFocus.value = true
}

defineExpose({
  focus,
})
</script>

<template>
  <div
    class="dada-element-wrapper __dd-input-container"
    :class="containerClassAry"
  >
    <div :class="areaClassAry">
      <input
        :class="classAry"
        :style="styleObj"
        :placeholder="placeholder"
        placeholder-class="__dd-input-placeholder"
        :value="value"
        :focus="isFocus"
        @input="inputHandle"
        @blur="blurHandle"
      >
    </div>
  </div>
</template>
