<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div class="mt ml">
    <DadaButton size="large" @click="visible = true">
      点击
    </DadaButton>
  </div>
  <DadaPopOut v-model:visible="visible">
    modal test
  </DadaPopOut>
</template>
