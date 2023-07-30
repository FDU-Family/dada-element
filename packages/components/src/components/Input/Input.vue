<script setup lang="ts">
import type { InputOnFocusEvent, InputOnInputEvent } from '@uni-helper/uni-app-types'
import '@dada-element/style/src/Input.scss'
import { computed, ref, useSlots } from 'vue'

export interface InputProps {
  placeholder?: string
  width?: string | number
  shadow?: boolean
  border?: boolean
  size?: 'small' | 'medium' | 'large'
  value?: string
  label?: string
  password?: boolean
  maxlength?: number
  disabled?: boolean
  line?: boolean
}

export interface InputEmits {
  (e: 'update:value', value: string): void
}

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  width: 600,
  shadow: false,
  border: false,
  size: 'medium',
  line: false,
  maxlength: 140,
})

const emits = defineEmits<InputEmits>()

const isFocus = ref(false)
const slots = useSlots()
const keyboardHeight = ref()

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
  const { line } = props
  return [
    (slots.suffix && line) ? 'suffix' : '',
  ]
})

const styleObj = computed(() => {
  const { width } = props
  const obj: Record<string, any> = {}
  if (width)
    obj.width = `${Number(width) / 7.5}vw`
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

function focusHandle(e: InputOnFocusEvent) {
  keyboardHeight.value = e.detail.height
}

defineExpose({
  focus,
})
</script>

<template>
  <div
    class="dada-element-wrapper __dd-input-container"
    :class="containerClassAry"
    :style="styleObj"
  >
    <div :class="areaClassAry" class="__dd-input-area">
      <div v-if="label" class="__dd-input-label">
        {{ label }}
      </div>
      <div class="__dd-input-slot prefix">
        <slot name="prefix" />
      </div>
      <input
        class="__dd-input"
        :class="classAry"
        :placeholder="placeholder"
        placeholder-class="__dd-input-placeholder"
        :value="value"
        :focus="isFocus"
        :password="props.password"
        :maxlength="props.maxlength"
        :disabled="props.disabled"
        @input="inputHandle"
        @blur="blurHandle"
        @focus="focusHandle"
      >
      <div class="__dd-input-slot suffix">
        <slot name="suffix" />
      </div>
    </div>
  </div>
</template>
