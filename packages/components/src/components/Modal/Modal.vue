<script setup lang="ts">
import '@dada-element/style/src/Modal.scss'
import { computed, defineEmits, defineProps, withDefaults } from 'vue'

export interface modalProps {
  visible?: boolean
  masked?: boolean
  closeOnClickMask?: boolean
}

const props = withDefaults(defineProps<modalProps>(), {
  visible: false,
  masked: false,
  closeOnClickMask: true,
})

const emits = defineEmits(['update:visible'])

const classAry = computed(() => {
  const { masked, visible } = props
  return [
    masked ? '__modal-mask' : '',
    visible ? '__open-animation' : '__close-animation',
  ]
})

const animationClass = computed(() => {
  const { visible } = props
  return [
    visible ? '__open-animation' : '__close-animation',
  ]
})

function closeOnMaskClick() {
  if (props.masked && props.closeOnClickMask)
    emits('update:visible', false)
}
</script>

<template>
  <div v-if="props.visible" :class="animationClass" class="dada-element-wrapper __modal-container">
    <div v-if="props.masked" :class="classAry" @click="closeOnMaskClick" />
    <div class="__modal-content" @click.stop>
      <slot />
    </div>
  </div>
</template>
