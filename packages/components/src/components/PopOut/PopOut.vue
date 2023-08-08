<script setup lang="ts">
import '@dada-element/style/src/PopOut.scss'
import { defineEmits, defineProps, ref, watch, watchEffect, withDefaults } from 'vue'

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

const isAnimate = ref(false)
let timer: null | NodeJS.Timeout = null

watch(() => props.visible, (newVal) => {
  if (newVal) {
    // true，表示显示弹出框
    isAnimate.value = true // 开启动画
    if (timer)
      clearTimeout(timer)
  }
  else {
    // false
    timer = setTimeout(() => {
      isAnimate.value = false // 关闭动画
    }, 300)
  }
})
const maskClassObj = ref<Record<string, boolean>>({})
const classObj = ref<Record<string, boolean>>({})

watchEffect(() => {
  const { mask, visible } = props
  maskClassObj.value['__dd-pop-out-mask'] = mask
  maskClassObj.value['__dd-pop-out-mask-from'] = mask
  if (visible) {
    setTimeout(() => {
      maskClassObj.value['__dd-pop-out-mask-to'] = true
    }, 50)
  }
  else {
    delete maskClassObj.value['__dd-pop-out-mask-to']
  }
})

watchEffect(() => {
  const { visible } = props
  if (visible) {
    setTimeout(() => {
      classObj.value['__dd-pop-out-to'] = true
    }, 50)
  }
  else {
    delete classObj.value['__dd-pop-out-to']
  }
})

function clickHandle() {
  if (props.maskClosable)
    emits('update:visible', false)
}
</script>

<template>
  <div v-if="visible || isAnimate" class="dada-element-wrapper  __dd-pop-out-container" @click="clickHandle">
    <div :class="maskClassObj" />
    <div class="__dd-pop-out __dd-pop-out-from" :class="classObj">
      <slot />
    </div>
  </div>
</template>
