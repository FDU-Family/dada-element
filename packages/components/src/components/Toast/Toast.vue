<script setup lang="ts">
import '@dada-element/style/src/Toast.scss'
import { computed } from 'vue'
import DadaPopOut from '../PopOut/PopOut.vue'

const props = withDefaults(defineProps<{
  /**
   * 是否可见，控制 Toast 是否显示
   */
  visible: boolean

  /**
   * 预设的样式，如 loading、success、error
   */
  preset?: 'loading' | 'success' | 'error'

  /**
   * 自定义图标的名称（如果需要）
   */
  icon?: string

  /**
   * 是否允许手动关闭 Toast
   */
  canClose?: boolean

  /**
   * Toast 显示的消息文本
   */
  message?: string
}>(), {
  preset: 'loading',
  canClose: false,
})

const emits = defineEmits<{
  /**
   * 当 Toast 的可见性发生变化时触发
   *
   * @param e 事件名称（'update:visible'）
   * @param value 新的可见性值
   */
  (e: 'update:visible', value: boolean): void
}>()

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
          <div class="__dd-toast-content">
            {{ presetClass[preset].content }}
          </div>
        </template>
        <slot v-else />
      </div>
    </div>
  </DadaPopOut>
</template>

<style></style>
