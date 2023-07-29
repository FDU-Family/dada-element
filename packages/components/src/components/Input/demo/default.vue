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
      <DadaInput v-model:value="value" placeholder="芝士输入框" />{{ value }}
    </div>
    <div class="mt">
      <DadaInput shadow placeholder="芝士输入框" />
    </div>
    <div class="mt">
      <DadaInput border placeholder="芝士输入框" />
    </div>
    <div class="mt">
      <DadaInput ref="input" placeholder="芝士输入框" />
    </div>
    <DadaButton @click="clickHandle">
      聚焦
    </DadaButton>
    <div class="mt">
      <DadaInput border label="密码" placeholder="芝士输入框" />
    </div>
    <div class="mt">
      <DadaInput placeholder="芝士输入框">
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
    <div class="mt">
      <DadaInput placeholder="芝士输入框" size="large" :border="true" :shadow="true" label="手机号">
        <template #prefix>
          <div>
            <div class="iconfont dada-calc-plus" />
          </div>
        </template>
        <template #suffix>
          <DadaButton>获取验证码</DadaButton>
        </template>
      </DadaInput>
    </div>
  </div>
</template>

<style>
.mt {
  margin-top: 30px;
}
</style>
