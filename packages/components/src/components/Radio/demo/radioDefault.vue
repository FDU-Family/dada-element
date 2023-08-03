<script setup lang="ts">
import { ref } from 'vue'

const radioAry = [{
  value: 'USA',
  name: '美国',
  checked: 'true',
},
{
  value: 'CHN',
  name: '中国',
},
{
  value: 'BRA',
  name: '巴西',
},
{
  value: 'ENG',
  name: '英国',
},
{
  value: 'FRA',
  name: '法国',
},
]
const radioValue = ref(0)

const dadaRadio = ref()

function getRadioValue() {
  radioValue.value = dadaRadio.value.radioValue()
}
</script>

<template>
  <DadaRadio :range="radioAry" direction="row" type="primary" />
  <DadaRadio :range="radioAry" direction="column" type="default" />
  <DadaRadio ref="dadaRadio" :range="radioAry" direction="row" />
  <DadaButton @click="getRadioValue">
    获取radioValue
  </DadaButton>
  <text>radioValue的值是: {{ radioAry[radioValue].value }}</text>
</template>
