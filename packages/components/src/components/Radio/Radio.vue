<script setup lang="ts">
import '@dada-element/style/src/Radio.scss'
import { computed, watchEffect } from 'vue'
import { useRadio } from './hooks'

export interface RadioProps {
  muti?: boolean
  name?: string
  label?: string
  unique?: string
  value?: boolean
  type?: 'default' | 'primary'
}

export interface RadioEmits {
  (e: 'update:value', v: boolean): null
}

const props = withDefaults(defineProps<RadioProps>(), {
  muti: false,
  value: false,
  type: 'default',
})
const emits = defineEmits<RadioEmits>()

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
