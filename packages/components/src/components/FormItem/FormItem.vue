<script setup lang="ts">
import { inject, provide } from 'vue'
import type { FormRules } from '../../types'

const props = defineProps<{
  name: string
}>()
const rule = inject<Readonly<FormRules>>('form')!

provide('rule', rule[props.name])
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style></style>
