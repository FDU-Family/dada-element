<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
function confirmHandle() {
  console.log('确认')
}
function cancelHandle() {
  console.log('取消')
}
</script>

<template>
  <div class="mt ml">
    <DadaButton @click="value = true">
      模态框
    </DadaButton>
    <DadaModal v-model:visible="value" preset="default" @confirm="confirmHandle" @cancel="cancelHandle">
      这是一条通知消息
    </DadaModal>
  </div>
</template>

<style>

</style>
