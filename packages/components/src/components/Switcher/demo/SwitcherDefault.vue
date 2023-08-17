<script setup lang="ts">
import { ref, watch } from 'vue'
import type { switcherOptionsType } from '../Switcher.vue'

const value = ref(0)

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
watch(value, (newVal) => {
  console.log(newVal)
})
</script>

<template>
  <dada-switcher v-model:value="value" :switcher-options="options" />
</template>
