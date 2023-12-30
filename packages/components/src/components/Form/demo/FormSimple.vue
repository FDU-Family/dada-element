<script setup lang="ts">
import { ref } from 'vue'
import type { FormRules } from '../../../types'

const formData = ref({
  name: '',
  sex: '',
  date: '',
  time: '',
})

const sexOption = ref([
  {
    label: '不清楚',
    value: 'unknown',
  },
  {
    label: '男',
    value: 'male',
  },
  {
    label: '女',
    value: 'female',
  },
])

const rules = ref<FormRules>({
  name: {
    handle: value => Boolean(value),
    trigger: ['blur', 'submit'],
  },
  sex: {
    handle: (value) => {
      return ['male', 'female'].includes(value)
    },
    trigger: ['submit'],
  },
  date: {
    handle: (value: string) => {
      if (value)
        return value.split('-')[1] === '12'
      else
        return false
    },
    trigger: ['submit'],
  },
  time: {
    handle: (value: string) => {
      if (value)
        return value.split(':')[0] === '00'
      else
        return false
    },
    trigger: ['submit'],
  },
})

const form = ref()

async function clickHandle() {
  console.log(await form.value.validate())
}
</script>

<template>
  <div class="mt">
    <p>blur的trigger只对input生效</p>
    <div>说明</div>
    <p>名字不能为空，性别只能是男或女，日期必须是十二月，时间必须是00点</p>
    <dada-form ref="form" :rules="rules">
      <dada-form-item name="name">
        <dada-input v-model:value="formData.name" placeholder="名字" />
      </dada-form-item>
      <dada-form-item name="sex">
        <dada-select v-model:value="formData.sex" :options="sexOption" placeholder="性别" />
      </dada-form-item>
      <dada-form-item name="date">
        <dada-date-picker v-model:value="formData.date" placeholder="请选择日期" start="2023-01-01" end="2023-12-31" />
      </dada-form-item>
      <dada-form-item name="time">
        <dada-time-picker v-model:value="formData.time" placeholder="请输入时间" />
      </dada-form-item>
    </dada-form>
    <dada-button @click="clickHandle()">
      验证
    </dada-button>
  </div>
</template>

<style></style>
