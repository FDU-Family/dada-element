<script setup lang="ts">
import '@dada-element/style/src/PopOut.scss'
import { computed, defineEmits, defineProps, withDefaults } from 'vue'

export interface PopOutProps {
  visible?: boolean
  mask?: boolean
  maskClosable?: boolean
}

export interface PopOutEmits {
  (e: 'update:visible', value: boolean): null
}

const props = withDefaults(defineProps<PopOutProps>(), {
  visible: false,
  mask: true,
  maskClosable: true,
})

const emits = defineEmits<PopOutEmits>()

const classAry = computed(() => {
  const { mask } = props
  return [
    mask ? '__dd-pop-out-mask' : '',
  ]
})

function clickHandle() {
  if (props.maskClosable)
    emits('update:visible', false)
}
</script>

<template>
  <div v-if="visible" class="dada-element-wrapper  __dd-pop-out-container" @click="clickHandle">
    <div :class="classAry" />
    <div class="__dd-pop-out">
      <slot />
    </div>
  </div>
</template>
