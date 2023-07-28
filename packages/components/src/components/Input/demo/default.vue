<script setup lang="ts">
import { ref } from 'vue'

const value = ref('123')
</script>

<template>
  <div>
    <div class="mt">
      <DadaInput v-model:value="value" placeholder="芝士输入框" />{{ value }}
    </div>
    <div class="mt">
      <DadaInput shadow placeholder="芝士输入框" />
    </div>
    <div class="mt">
      <DadaInput border placeholder="芝士输入框" />
    </div>
  </div>
</template>

<style>
.mt {
  margin-top: 30px;
}
</style>
