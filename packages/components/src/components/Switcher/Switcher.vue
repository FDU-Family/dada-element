<script setup lang="ts">
import '@dada-element/style/src/Switcher.scss'
import { computed, ref } from 'vue'
import { pxToVw } from '@dada-element/utils'

export type switcherOptionsType = Array<{
  label: string
  key: string
  checked?: boolean
}>

export interface SwitcherProps {
  switcherOptions?: switcherOptionsType
  value: number
  type: 'default' | 'tag'
}

export interface SwitcherEmits {
  (e: 'update:value', value: number): void
}

const props = withDefaults(defineProps<SwitcherProps>(), {
  type: 'default',
})

const emits = defineEmits<SwitcherEmits>()

const currentIndex = ref(0)

function handleSwitcherClick(index: number) {
  currentIndex.value = index
  emits('update:value', index)
}

function labelClassAry(index: number) {
  return [
    currentIndex.value === index ? 'selected' : '',
  ]
}

const sliderPosition = computed(() => {
  return pxToVw(`${currentIndex.value * 300 + (currentIndex.value === 0 ? 10 : 20)}px`)
})
</script>

<template>
  <div class="dada-element-wrapper __dada-switcher-container">
    <div v-if="props.type === 'default'" class="__dada-switcher-area">
      <div class="__dada-slider-background" :style="{ left: sliderPosition }" />
      <div
        v-for="(item, index) in props.switcherOptions"
        :key="item.key"
        :class="labelClassAry(index)"
        :style="`--index: ${index}`"
        class="__dada-switcher-item"
        @click="handleSwitcherClick(index)"
      >
        <div class="__dada-switcher-text">
          {{ item.label }}
        </div>
      </div>
    </div>
    <div v-if="props.type === 'tag'">
      hello tag
    </div>
  </div>
</template>
