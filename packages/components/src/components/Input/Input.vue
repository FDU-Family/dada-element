<script setup lang="ts">
import '@dada-element/style/src/Input.scss'
import { computed, ref } from 'vue'

interface InputProps {
  placeholder?: string | [string, string]
  readonly?: boolean
  size?: 'small' | 'medium' | 'large'
  type?: 'text' | 'number' | 'password' | 'idcard' | 'textarea'
  modelValue?: string
  disabled?: boolean
  invalid?: boolean
  focus?: boolean
  password?: boolean
  clearable?: boolean
  width?: number | string
}

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: undefined,
  readonly: false,
  size: 'medium',
  type: 'text',
  modelValue: '',
  disabled: false,
  focus: false,
  password: false,
  clearable: false,
})

const emits = defineEmits(['update:modelValue', 'input', 'clear'])
const inputRef = ref()

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', target.value)
  emits('input', e)
}

function onClear() {
  emits('clear')
}

const inputClass = computed(() => {
  const { size } = props
  return [
      `__dd-input-size-${size}`,
  ]
})

const inputStyle = computed(() => {
  const { width } = props
  const obj: Record<string, any> = {}
  if (width)
    obj.width = `${width}px`
  return obj
})
</script>

<template>
  <div class="dada-element-wapper __dd-input">
    <slot />
    <input
      ref="inputRef"
      :class="inputClass"
      :style="inputStyle"
      :focus="focus"
      :password="password"
      :value="modelValue"
      :clearable="clearable"
      :placeholder="placeholder"
      @input="handleInput"
    >
  </div>
</template>
