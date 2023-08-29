<script setup lang="ts">
import '@dada-element/style/src/Modal.scss'
import type { TouchEvent } from '@uni-helper/uni-app-types'
import DadaPopOut from '../PopOut/PopOut.vue'

withDefaults(defineProps<{
  /**
   * 是否可见，控制模态框是否弹出显示
   */
  visible: boolean

  /**
   * 模态框的标题
   */
  title?: string

  /**
   * 使用预设的类型
   */
  preset?: 'default'
}>(), {
  title: '标题',
})

const emits = defineEmits<{
  /**
   * 当模态框的可见性发生变化时触发
   *
   * @param e 事件名称（'update:visible'）
   * @param value 新的可见性值
   */
  (e: 'update:visible', value: boolean): void

  /**
   * 当确认按钮被点击时触发
   *
   * @param e 事件名称（'confirm'）
   * @param event 点击事件对象
   */
  (e: 'confirm', event: TouchEvent): void

  /**
   * 当取消按钮被点击时触发
   *
   * @param e 事件名称（'cancel'）
   * @param event 点击事件对象
   */
  (e: 'cancel', event: TouchEvent): void
}>()

function updateHandle(value: boolean) {
  emits('update:visible', value)
}
</script>

<template>
  <DadaPopOut :visible="visible" @update:visible="updateHandle">
    <div class="dada-element-wrapper __dd-modal-container" @click.stop="">
      <div class="__dd-modal-title">
        {{ title }}
      </div>
      <DadaHr />
      <div class="__dd-modal-content-area">
        <div class="__dd-modal-content">
          <slot />
        </div>
      </div>
      <div class="__dd-modal-button-group">
        <template v-if="preset === 'default'">
          <DadaButton :block="true" size="large" :shadow="true" type="primary" @click="(e: TouchEvent) => $emit('confirm', e)">
            确认
          </DadaButton>
          <DadaButton :block="true" size="large" :shadow="true" @click="(e: TouchEvent) => $emit('cancel', e)">
            取消
          </DadaButton>
        </template>
        <template v-else>
          <slot name="footer" />
        </template>
      </div>
    </div>
  </DadaPopOut>
</template>

<style></style>
