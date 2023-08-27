<script setup lang="ts">
import { ref } from 'vue'
import type { switcherOptionsType } from '../../../types'

const value = ref('1')
const tagValue = ref('feature')

const options: switcherOptionsType = [
  {
    label: '队内成员',
    key: '1',
    checked: true,
  },
  {
    label: '组队申请',
    key: '2',
    checked: false,
  },
]

const tagOptions: switcherOptionsType = [
  {
    label: '搭子特征',
    key: 'feature',
    checked: true,
  },
  {
    label: '活动描述',
    key: 'describe',
    checked: false,
  },
]
</script>

<template>
  <div class="dada-element-wrapper page">
    <div @click="value = '2'">
      {{ value }}
    </div>
    <div class="ml mt mc">
      <dada-switcher v-model:value="value" :switcher-options="options" />
    </div>
    <div class="ml mt mc">
      <dada-switcher v-model:value="tagValue" type="tag" :switcher-options="tagOptions" />
    </div>
    <div class="ml mt mc">
      <dada-switcher v-model:value="tagValue" type="tag" :switcher-options="tagOptions" />
    </div>
    {{ tagValue }}
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  background-color: var(--sub-primary);
}
</style>
