<script setup lang="ts">
import { ref } from 'vue'

const value = ref('123')
const input = ref()

function clickHandle() {
  input.value.focus()
}
</script>

<template>
  <div>
    <div class="mt">
      <DadaInput shadow placeholder="不带shadow" />
    </div>
    <div class="mt">
      <DadaInput border placeholder="带border" />
    </div>
    <div class="mt">
      <DadaInput v-model:value="value" placeholder="响应式测试" />{{ value }}
    </div>
    <div class="mt">
      <DadaInput :disabled="true" placeholder="disabled测试" />
    </div>
    <div class="mt">
      <DadaInput ref="input" placeholder="聚焦测试" />
    </div>
    <div class="mt">
      <DadaButton @click="clickHandle">
        聚焦
      </DadaButton>
    </div>
    <div class="mt">
      <DadaInput placeholder="前后缀测试">
        <template #prefix>
          <div>
            我是前缀
          </div>
        </template>
        <template #suffix>
          我是后缀别太长
        </template>
      </DadaInput>
    </div>
    <div class="mt">
      <DadaInput placeholder="芝士输入框">
        <template #prefix>
          <div>
            <div class="iconfont dada-calc-plus" />
          </div>
        </template>
        <template #suffix>
          <div class="iconfont dada-mani-confirm" />
        </template>
      </DadaInput>
    </div>
  </div>
</template>

<style scoped>
.mt {
  margin-top: 30px;
  margin-left: 50px;
}
</style>
