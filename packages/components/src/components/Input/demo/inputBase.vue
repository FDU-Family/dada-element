<script setup lang="ts">
import { ref } from 'vue'

const value = ref('123')
const input = ref()

function clickHandle() {
  input.value.focus()
}

function focusTest() {
  // eslint-disable-next-line no-console
  console.log('hello, focus has listened')
}
</script>

<template>
  <div>
    <div class="mt ml">
      <DadaInput type="primary" border placeholder="测试一下onFocus" @on-focus="focusTest" />
    </div>
    <div class="mt ml">
      <DadaInput shadow placeholder="不带shadow" />
    </div>
    <div class="mt ml">
      <DadaInput type="primary" border placeholder="带border" />
    </div>
    <div class="mt ml">
      <DadaInput v-model:value="value" placeholder="响应式测试" />{{ value }}
    </div>
    <div class="mt ml">
      <DadaInput :disabled="true" placeholder="disabled测试" />
    </div>
    <div class="mt ml">
      <DadaInput ref="input" placeholder="聚焦测试" />
    </div>
    <div class="mt ml">
      <DadaButton @click="clickHandle">
        聚焦
      </DadaButton>
    </div>
    <div class="mt ml">
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
    <div class="mt ml">
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

<style>
</style>
