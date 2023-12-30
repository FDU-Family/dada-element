<script setup lang="ts">
import { nextTick, provide, ref } from 'vue'
import type { FormRules } from '../../types'

const props = defineProps<{
  rules?: FormRules
}>()

const isValidate = ref<boolean>(true)
const trigger = ref<boolean>(false)

function setIsValidate(value: boolean) {
  isValidate.value = isValidate.value && value
}

async function validate() {
  isValidate.value = true
  // 主动触发校验
  trigger.value = !trigger.value
  await nextTick()
  return isValidate.value
}

provide('form', props.rules ?? {})
provide('validate', {
  trigger,
  setIsValidate,
})

defineExpose({
  validate,
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style></style>
