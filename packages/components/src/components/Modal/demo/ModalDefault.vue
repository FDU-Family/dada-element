<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
const value1 = ref(false)
const str = ref('')
function confirmHandle() {
  console.log('确认')
}
function cancelHandle() {
  console.log('取消')
}
</script>

<template>
  <div>
    <div class="mt ml">
      <DadaButton @click="value = true">
        模态框
      </DadaButton>
      <DadaModal v-model:visible="value" preset="default" @confirm="confirmHandle" @cancel="cancelHandle">
        这是一条通知消息
      </DadaModal>
    </div>
    <div class="mt ml">
      <DadaButton @click="value1 = true">
        模态框input
      </DadaButton>
      <DadaModal v-model:visible="value1">
        这是一条通知消息{{ str }}
        <template #footer>
          <DadaInput v-model:value="str" block />
        </template>
      </DadaModal>
    </div>
  </div>
</template>

<style>

</style>
