<script setup lang="ts">
import '@dada-element/style/src/Toast.scss'
import { computed } from '@vue/runtime-core'

export interface ToastProp {
  visible: boolean
  preset: 'loading' | 'success'
  icon: string
}

export interface ToastEmits {
  (e: 'update:visible', value: boolean): void
}
const props = withDefaults(defineProps<ToastProp>(), {
  preset: 'loading',
})

defineEmits<ToastEmits>()

const presetClass = {
  loading: {
    class: 'dada-func-refresh __dd-toast-icon-loading',
    content: '正在加载',
  },
  success: {
    class: 'dada-mani-confirm',
    content: '成功！',
  },
  error: {
    class: 'dada-mani-cancel',
    content: '失败！',
  },
}

const classAry = computed(() => {
  const { preset, icon } = props
  return [
    icon ?? '', // 如果有icon，就设置为icon（优先级最高）
    !icon && preset ? presetClass[preset].class : '', // 没有icon的话再考虑preset
  ]
})
</script>

<template>
  <DadaPopOut :visible="visible" @update:visible="(value:boolean) => $emit('update:visible', value)">
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

<style>

</style>
