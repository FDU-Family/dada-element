<script setup lang="ts">
import '@dada-element/style/src/Select.scss'
import { computed } from 'vue'
import { pxToVw } from '@dada-element/utils'
import type { DatePickerOnChangeEvent } from '@uni-helper/uni-app-types'

// YYYY-MM-DD
type dateRule = `${number}${number}${number}${number}-${number}${number}-${number}${number}`

export interface DatePickerProps {
  placeholder?: string
  width?: string | number
  shadow?: boolean
  border?: boolean
  type?: 'default' | 'primary'
  size?: 'small' | 'medium' | 'large'
  start?: dateRule
  end?: dateRule
  fields?: 'year' | 'month' | 'day'
  value?: string
  label?: string
}

export interface DatePickerEmits {
  (e: 'update:value', value: string): void
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: '',
  width: 600,
  shadow: false,
  border: false,
  size: 'medium',
  maxlength: 140,
  type: 'default',
  fields: 'day',
  start: '2023-01-01',
  end: '2023-12-31',
})

const emits = defineEmits<DatePickerEmits>()

function bindPickerChange(e: DatePickerOnChangeEvent) {
  emits('update:value', e.detail.value)
}

const containerClassAry = computed(() => {
  const { shadow, border, type } = props
  return [
    shadow ? '__dd-input-shadow' : '',
    border ? '__dd-input-border' : '',
    `__dd-input-type-${type}`,
  ]
})

const areaClassAry = computed(() => {
  const { size } = props
  return [
    `__dd-input-size-${size}`,
  ]
})

const styleObj = computed(() => {
  const { width } = props
  const obj: Record<string, any> = {}
  if (width)
    obj.width = pxToVw(width)
  return obj
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
      <picker mode="date" :value="value" :start="start" :end="end" :fields="fields" class="__dd-select" @change="bindPickerChange">
        <template v-if="value">
          {{ value }}
        </template>
        <template v-else>
          <span class="__dd-input-placeholder">
            {{ placeholder }}
          </span>
        </template>
      </picker>
      <div class="__dd-input-slot suffix">
        <div class="iconfont dada-func-arrow __dd-select-icon" />
      </div>
    </div>
  </div>
</template>