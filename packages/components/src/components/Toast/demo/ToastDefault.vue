<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
</script>

<template>
  <div>
    <div class="mt ml">
      <div>
        <DadaButton @click="visible1 = true">
          loading 预设(默认)
        </DadaButton>
      </div>
      <DadaToast v-model:visible="visible1">
        测试
      </DadaToast>
    </div>
    <div class="mt ml">
      <div>
        <DadaButton @click="visible2 = true">
          success预设
        </DadaButton>
      </div>
      <DadaToast v-model:visible="visible2" preset="success" />
    </div>
    <div class="mt ml">
      <div>
        <DadaButton @click="visible3 = true">
          error预设
        </DadaButton>
      </div>
      <DadaToast v-model:visible="visible3" preset="error" />
    </div>
    <div class="mt ml">
      <div>
        <DadaButton @click="visible4 = true">
          自定义icon
        </DadaButton>
      </div>
      <DadaToast v-model:visible="visible4" icon="dada-att-gender-female">
        测试
      </DadaToast>
    </div>
  </div>
</template>

<style>

</style>
