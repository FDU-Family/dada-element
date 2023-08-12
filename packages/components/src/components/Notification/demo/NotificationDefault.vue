<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <div class="mt ml">
    <DadaButton @click="value = true">
      通知
    </DadaButton>
    <DadaNotification v-model:visible="value" title="通知">
      这是一条通知消息
    </DadaNotification>
  </div>
</template>

<style>

</style>
