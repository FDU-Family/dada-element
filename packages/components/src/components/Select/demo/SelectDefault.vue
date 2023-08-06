<script setup lang="ts">
import { ref } from 'vue'

const index = ref(1)
const options = ref([
  {
    label: '吃饭',
    value: 0,
  },
  {
    label: '喝水',
    value: 1,
  },
  {
    label: '上撤朔',
    value: 2,
  },
])
</script>

<template>
  <div>
    <div class="mt ml">
      {{ index }}
      <dada-select v-model:value="index" :options="options" shadow type="primary" size="large" label="测试" placeholder="测试测试" />
    </div>
    <div class="mt ml">
      <dada-select v-model:value="index" :options="options" border type="primary" size="large" label="测试" placeholder="测试测试" />
    </div>
    <div class="mt ml">
      <dada-select v-model:value="index" :options="options" placeholder="测试测试" />
    </div>
  </div>
</template>

<style>

</style>
