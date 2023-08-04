<script setup lang="ts">
import { ref } from 'vue'

const r1 = ref(false)
const r2 = ref(false)
</script>

<template>
  <div class="mt">
    <div>muti可以开启多选</div>
    <div style="display: flex;">
      <DadaRadio v-model:value="r1" unique="demo-mult-group" label="No.1" name="r1" muti />
      <DadaRadio v-model:value="r2" unique="demo-mult-group" label="No.2" name="r2" muti />
    </div>
    <div>No.1: {{ r1 }}, No.2: {{ r2 }}</div>
  </div>
</template>
