<script setup lang="ts">
import '@dada-element/style/src/Switcher.scss'
import { computed } from 'vue'
import type { switcherOptionsType } from '../../types'

const props = withDefaults(defineProps<{
  /**
   * 切换栏选项
   */
  switcherOptions?: switcherOptionsType
  /**
   * 切换栏当前指向的key
   */
  value: string
  /**
   * 切换栏的样式类型
   */
  type: 'default' | 'tag'
}>(), {
  type: 'default',
})

const emits = defineEmits<{
  /**
   * 切换值发生变化时触发
   *
   * @param e 事件名称（'update:value'）
   * @param value 新的选中值
   */
  (e: 'update:value', value: string): void
}>()

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
