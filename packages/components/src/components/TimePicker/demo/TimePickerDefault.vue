<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <div class="ml mt">
      {{ value }}
    </div>
    <div class="ml mt">
      <dada-time-picker v-model:value="value" placeholder="请输入时间" />
    </div>
    <div class="ml mt">
      <dada-time-picker v-model:value="value" type="primary" placeholder="请输入时间" />
    </div>
    <div class="ml mt">
      <dada-time-picker v-model:value="value" type="primary" border size="large" label="时间" placeholder="请输入时间" />
    </div>
    <div class="ml mt">
      <dada-time-picker v-model:value="value" type="primary" shadow placeholder="请输入时间" />
    </div>
  </div>
</template>

<style>

</style>
