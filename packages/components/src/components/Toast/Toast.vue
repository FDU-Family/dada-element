<script setup lang="ts">
import '@dada-element/style/src/Toast.scss'
import { computed } from 'vue'
import DadaPopOut from '../PopOut/PopOut.vue'

export interface ToastProp {
  visible: boolean
  preset?: 'loading' | 'success'
  icon?: string
  canClose?: boolean // 是否能手动关闭
  message?: string
}

export interface ToastEmits {
  (e: 'update:visible', value: boolean): void
}
const props = withDefaults(defineProps<ToastProp>(), {
  preset: 'loading',
  canClose: false,
})

const emits = defineEmits<ToastEmits>()

const presetClass = computed(() => ({
  loading: {
    class: 'dada-func-refresh __dd-toast-icon-loading',
    content: '正在加载',
  },
  success: {
    class: 'dada-mani-confirm',
    content: props.message && props.message.trim() !== '' ? props.message : '成功',
  },
  error: {
    class: 'dada-mani-cancel',
    content: props.message && props.message.trim() !== '' ? props.message : '失败',
  },
}))

const classAry = computed(() => {
  const { preset, icon } = props
  return [
    icon ?? '', // 如果有icon，就设置为icon（优先级最高）
    !icon && preset ? presetClass.value[preset].class : '', // 没有icon的话再考虑preset
  ]
})

function updateHandle(value: boolean) {
  const { canClose } = props
  if (canClose)
    emits('update:visible', value)
}
</script>

<template>
  <DadaPopOut :visible="visible" @update:visible="updateHandle">
    <div class="dada-element-wrapper __dd-toast">
      <div class="iconfont __dd-toast-icon" :class="classAry" />
      <div>
        <template v-if="!icon && preset">
          {{ presetClass[preset].content }}
        </template>
        <slot v-else />
      </div>
    </div>
  </DadaPopOut>
</template>

<style></style>
