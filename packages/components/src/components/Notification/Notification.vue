<script setup lang="ts">
import { computed } from '@vue/runtime-core'

export interface ToastProp {
  visible: boolean
  title: string
}

export interface ToastEmits {
  (e: 'update:visible', value: boolean): void
}
const props = withDefaults(defineProps<ToastProp>(), {
  title: '标题',
})

const emits = defineEmits<ToastEmits>()

const classAry = computed(() => {

})

function updateHandle(value: boolean) {
  emits('update:visible', value)
}
</script>

<template>
  <DadaPopOut :visible="visible" @update:visible="updateHandle">
    <div class="dada-element-wrapper __dd-toast">
      <div class="iconfont __dd-toast-icon" :class="classAry" />
      <div>
        <slot />
      </div>
    </div>
  </DadaPopOut>
</template>

<style>

</style>
