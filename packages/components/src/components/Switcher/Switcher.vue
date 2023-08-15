<script setup lang="ts">
import '@dada-element/style/src/Switcher.scss'
import { ref } from 'vue'

export type switcherOptionsType = Array<{
  label: string
  key: string
  checked?: boolean
}>

export interface SwitcherProps {
  switcherOptions?: switcherOptionsType
  value: number
}

export interface SwitcherEmits {
  (e: 'update:value', value: number): void
}

const props = withDefaults(defineProps<SwitcherProps>(), {

})

const emits = defineEmits<SwitcherEmits>()

const currentIndex = ref(0)

function handleSwitcherClick(index: number) {
  currentIndex.value = index
  emits('update:value', index)
}

function labelClassAry(index: number) {
  return [
    currentIndex.value === index ? '__dada-switcher-item-active' : '',
  ]
}
</script>

<template>
  <div class="dada-element-wrapper __dada-switcher-container">
    <div
      v-for="(item, index) in props.switcherOptions"
      :key="item.key"
      :class="labelClassAry(index)"
      class="__dada-switcher-item"
      @click="handleSwitcherClick(index)"
    >
      <div class="__dada-switcher-text">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
