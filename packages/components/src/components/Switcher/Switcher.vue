<script setup lang="ts">
import '@dada-element/style/src/Switcher.scss'
import { computed } from 'vue'

export type switcherOptionsType = Array<{
  label: string
  key: string
  checked?: boolean
}>

export interface SwitcherProps {
  switcherOptions?: switcherOptionsType
  value: string
  type: 'default' | 'tag'
}

export interface SwitcherEmits {
  (e: 'update:value', value: string): void
}

const props = withDefaults(defineProps<SwitcherProps>(), {
  type: 'default',
})

const emits = defineEmits<SwitcherEmits>()

function handleSwitcherClick(key: string) {
  emits('update:value', key)
}
const currentIndex = computed(() => props.switcherOptions?.findIndex(item => props.value === item.key))
</script>

<template>
  <div class="dada-element-wrapper">
    <div v-if="props.type === 'default'">
      <div class="__dada-switcher-container __dada-switcher-default">
        <div
          v-for="(item) in switcherOptions"
          :key="item.key"
          class="__dada-switcher-item"
          :style="`--index: ${currentIndex}`"
          @click="handleSwitcherClick(item.key)"
        >
          <div class="__dada-switcher-text">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="props.type === 'tag'">
      <div class="__dada-switcher-container">
        <div
          v-for="(item) in switcherOptions"
          :key="item.key"
          class="__dada-switcher-tag-item"
          :class="{ selected: props.value === item.key }"
          @click="handleSwitcherClick(item.key)"
        >
          <div class="__dada-switcher-tag-text">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
