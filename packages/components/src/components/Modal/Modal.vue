<script setup lang="ts">
import '@dada-element/style/src/Modal.scss'
import type { TouchEvent } from '@uni-helper/uni-app-types'
import DadaPopOut from '../PopOut/PopOut.vue'

interface ModalProp {
  visible: boolean
  title?: string
  preset?: 'default'
}

interface ModalEmits {
  (e: 'update:visible', value: boolean): void
  (e: 'confirm', event: TouchEvent): void
  (e: 'cancel', event: TouchEvent): void
}

withDefaults(defineProps<ModalProp>(), {
  title: '标题',
})

const emits = defineEmits<ModalEmits>()

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
          <DadaButton
            :block="true"
            size="large"
            :shadow="true"
            type="primary"
            @click="(e: TouchEvent) => $emit('confirm', e)"
          >
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
