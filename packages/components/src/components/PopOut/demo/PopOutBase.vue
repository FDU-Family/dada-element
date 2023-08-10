<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<template>
  <div>
    <div class="mt ml">
      <div>
        <DadaButton @click="visible1 = true">
          点击
        </DadaButton>
      </div>
      <DadaPopOut v-model:visible="visible1">
        modal test
      </DadaPopOut>
    </div>
    <div class="mt ml">
      <div>
        <DadaButton @click="visible2 = true">
          点击(没有mask)
        </DadaButton>
      </div>
      <DadaPopOut v-model:visible="visible2" :mask="false">
        modal test
      </DadaPopOut>
    </div>
  </div>
</template>
