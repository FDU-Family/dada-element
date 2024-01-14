<script setup lang="ts">
import { reactive } from 'vue'

const visible = reactive(Array.from({ length: 4 }).map(() => false))
const message = '测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度，测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度'

function clickHandle(index: number) {
  visible[index] = true
  setTimeout(() => {
    visible[index] = false
  }, 2000)
}
</script>

<template>
  <div>
    <div class="mt ml">
      <div>
        <DadaButton @click="clickHandle(1)">
          loading 预设(默认222222)
        </DadaButton>
      </div>
      <!-- <DadaToast v-model:visible="visible[1]">
        测试
      </DadaToast> -->
      <DadaToast v-model:visible="visible[1]" preset="error" :message="message">
        测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度,测试文本长度
      </DadaToast>
    </div>
    <div class="mt ml">
      <div>
        <DadaButton @click="clickHandle(2)">
          success预设
        </DadaButton>
      </div>
      <DadaToast v-model:visible="visible[2]" preset="success" />
    </div>
    <div class="mt ml">
      <div>
        <DadaButton @click="clickHandle(3)">
          error预设
        </DadaButton>
      </div>
      <DadaToast v-model:visible="visible[3]" preset="error" message="ceshicfsafdasfasfddasfsf" />
    </div>
    <div class="mt ml">
      <div>
        <DadaButton @click="clickHandle(4)">
          自定义icon
        </DadaButton>
      </div>
      <DadaToast v-model:visible="visible[4]" icon="dada-att-gender-female">
        测试
      </DadaToast>
    </div>
  </div>
</template>

<style>

</style>
