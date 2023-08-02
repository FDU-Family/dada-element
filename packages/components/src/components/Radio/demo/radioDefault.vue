<script setup lang="ts">
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
</script>

<template>
  <DadaRadio :range="radioAry" direction="row" type="primary" />
  <DadaRadio :range="radioAry" direction="column" type="default" />
</template>
