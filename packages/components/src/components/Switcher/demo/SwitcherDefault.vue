<script setup lang="ts">
import { ref } from 'vue'
import type { switcherOptionsType } from '../Switcher.vue'

const value = ref('1')

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
</script>

<template>
  <div @click="value = '2'">
    {{ value }}
  </div>
  <div class="ml mt mc">
    <dada-switcher v-model:value="value" :switcher-options="options" />
  </div>
  <div class="ml mt mc">
    <dada-switcher v-model:value="value" type="tag" :switcher-options="options" />
  </div>
</template>
