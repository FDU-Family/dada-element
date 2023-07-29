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
  disabled?: boolean
  maxlength?: number
  isFocus?: boolean
  password?: boolean
}

export interface InputEmits {
  (e: 'update:value', value: string): void
  (e: 'update:focus', value: string, height?: number): void
}

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  width: 630,
  shadow: false,
  border: false,
  size: 'medium',
  disabled: false,
  maxlength: -1,
})

const emits = defineEmits<InputEmits>()
const isFocus = ref(false)
const slots = useSlots()

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

const inputClass = computed(() => ({
  'input': true,
  'prefix-icon': slots['prefix-icon'],
  'suffix-icon': slots['suffix-icon'],
}))

const styleObj = computed(() => {
  const { width } = props
  const obj: Record<string, any> = {}
  if (width)
    obj.width = `${width}px`
  return obj
})

const inputStyle = computed(() => {
  const obj: Record<string, any> = {}
  obj.width = '600px'
  return obj
})

function inputHandle(e: InputOnInputEvent) {
  emits('update:value', e.detail.value)
}

function blurHandle() {
  isFocus.value = false
}

function focusHandle(e: InputOnFocusEvent) {
  isFocus.value = true
  emits('update:focus', e.detail.value, e.detail.height)
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
    <div :class="areaClassAry" :style="styleObj" class="__dd-input-area">
      <div v-if="label" class="__dd-input-label">
        {{ label }}
      </div>
      <div class="__dd-input-zone">
        <div class="__dd-input-pre-slot slot">
          <slot name="prefix-icon" />
        </div>
        <input
          :class="inputClass"
          :style-="inputStyle"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :maxlength="props.maxlength"
          placeholder-class="__dd-input-placeholder"
          :value="props.value"
          :password="props.password"
          @input="inputHandle"
          @blur="blurHandle"
          @focus="focusHandle"
        >
        <div class="__dd-input-suf-slot slot">
          <slot name="suffix-icon" />
        </div>
      </div>
    </div>
  </div>
</template>
