<script setup lang="ts">
import DadaModal from '../Modal/Modal.vue'

interface ToastProp {
  /**
   * 控制消息显示
   */
  visible: boolean

  /**
   * 消息标题
   */
  title: string
}

interface ToastEmits {
  /**
   * 当消息框的可见性发生变化时触发
   *
   * @param e 事件名称（'update:visible'）
   * @param value 新的可见性值
   */
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
