<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
const value1 = ref(false)
const str = ref('')
function confirmHandle() {
  console.log('确认')
  value1.value = true
}
function cancelHandle() {
  console.log('取消')
}
</script>

<template>
  <div>
    <DadaModal v-model:visible="value1" z-index="10">
      这是一条通知消息{{ str }}
      <template #footer>
        <DadaInput v-model:value="str" block />
      </template>
    </DadaModal>
    <DadaModal v-model:visible="value" preset="default" title="模态框" @confirm="confirmHandle" @cancel="cancelHandle">
      这是一条通知消息
    </DadaModal>
    <div class="mt ml">
      <DadaButton @click="value = true">
        模态框
      </DadaButton>
    </div>
    <div class="mt ml">
      <DadaButton @click="value1 = true">
        模态框input
      </DadaButton>
    </div>
  </div>
</template>

<style>

</style>
