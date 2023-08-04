<script setup lang="ts">
import { ref } from 'vue'

const r1 = ref(false)
const r2 = ref(false)
</script>

<template>
  <div class="mt">
    <div>unique属性用来标记单选框组，name属性用于区分组内不同单选框，也是组件框的值，label是组件框的标签</div>
    <DadaRadio v-model:value="r1" unique="demo-default-group" label="No.1" name="r1" />
    <DadaRadio v-model:value="r2" unique="demo-default-group" label="No.2" name="r2" />
    <div>No.1: {{ r1 }}, No.2: {{ r2 }}</div>
  </div>
</template>
