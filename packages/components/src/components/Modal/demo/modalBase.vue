<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

function showModal() {
  visible.value = !visible.value
}
</script>

<template>
  <DadaButton size="large" @click="showModal">
    点击
  </DadaButton>
  <DadaModal :visible="visible" masked :close-on-click-mask="true" @update:visible=" visible = $event">
    modal test
  </DadaModal>
</template>
