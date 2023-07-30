<script setup lang="ts">
import { ref } from 'vue'

const selected = [
  {
    id: 1,
    label: 'CN+86',
    value: '86',
  },
  {
    id: 2,
    label: 'EN+16',
    value: '16',
  },
]
const selectAry = selected.map(item => item.label)
const selectedValue = ref('CN+86')
function handlePicker(e: any) {
  const index = e.detail.value
  selectedValue.value = selected[index]?.label
}
</script>

<template>
  <div>
    <div class="line" />
    <div class="mt ml">
      <DadaInput placeholder="请输入手机号" border type="primary" :maxlength="11" size="large" :shadow="true" label="手机号">
        <template #prefix>
          <picker
            mode="selector"
            :range="selectAry"
            :value="selectedValue"
            @change="handlePicker"
          >
            <div class="testIcon">
              <div>{{ selectedValue }}</div>
              <div class="iconfont dada-func-arrow" :style="{ transform: 'rotate(90deg)' }" />
            </div>
          </picker>
        </template>
      </DadaInput>
    </div>
    <div class="mt ml">
      <DadaInput placeholder="请输入密码" border type="primary" :password="true" size="large" :shadow="true" label="密码" />
    </div>
    <div class="mt ml">
      <DadaInput placeholder="请输入验证码" line border type="primary" :maxlength="6" size="large" :shadow="true" label="验证码">
        <template #suffix>
          <DadaButton type="info">
            获取验证码
          </DadaButton>
        </template>
      </DadaInput>
    </div>
  </div>
</template>

<style>
</style>
