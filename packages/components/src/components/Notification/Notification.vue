<script setup lang="ts">
import DadaModal from '../Modal/Modal.vue'

interface ToastProp {
  visible: boolean
  title: string
}

interface ToastEmits {
  (e: 'update:visible', value: boolean): void
}
withDefaults(defineProps<ToastProp>(), {
  title: '标题',
})

const emits = defineEmits<ToastEmits>()

function updateHandle(value: boolean) {
  emits('update:visible', value)
}
</script>

<template>
  <DadaModal :visible="visible" :title="title" @update:visible="updateHandle">
    <slot />
  </DadaModal>
</template>

<style>

</style>
