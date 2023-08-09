<script setup lang="ts">
import '@dada-element/style/src/Modal.scss'

export interface HardPopOutProps {
  title?: string
  content?: string
  visible?: boolean
}

const props = withDefaults(defineProps<HardPopOutProps>(), {
  title: '',
  content: '',
  visible: false,
})
const emits = defineEmits<HardPopOutEmits>()

export interface HardPopOutEmits {
  (e: 'update:onClick', value: string): null
}

function handleConfirmBtn() {
  emits('update:onClick', 'ok')
}

function handleCancelBtn() {
  emits('update:onClick', 'cancel')
}
</script>

<template>
  <div class="dada-element-wrapper">
    <DadaPopOut :visible="props.visible">
      <div class="__dada-modal-container">
        <div class="modal-title">
          {{ props.title }}
        </div>
        <div class="modal-content">
          {{ props.content }}
        </div>
        <div class="modal-button">
          <DadaButton size="large" type="primary" :width="480" @click="handleConfirmBtn">
            确认
          </DadaButton>
          <DadaButton size="large" type="warning" :width="480" @click="handleCancelBtn">
            取消
          </DadaButton>
        </div>
      </div>
    </DadaPopOut>
  </div>
</template>
