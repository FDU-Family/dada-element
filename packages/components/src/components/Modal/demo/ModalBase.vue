<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

function onClickHandler(val: string) {
  switch (val) {
    case 'ok':
      console.log('ok')
      break
    case 'cancel':
      console.log('cancel')
      break
  }
}
</script>

<template>
  <div class="mt ml">
    <DadaButton size="large" @click="visible = true">
      modal
    </DadaButton>
  </div>
  <DadaModal v-model:visible="visible" title="hello" content="world">
    modal test
  </DadaModal>
</template>
