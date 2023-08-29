<script setup lang="ts">
import '@dada-element/style/src/PopOut.scss'
import { ref, watch, watchEffect, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * 控制组件弹出
   */
  visible?: boolean

  /**
   * 是否显示遮罩
   */
  mask?: boolean

  /**
   * 点击遮罩后是否可以关闭
   */
  maskClosable?: boolean
}>(), {
  visible: false,
  mask: true,
  maskClosable: true,
})

const emits = defineEmits<{
  /**
   * 当弹出组件的可见性发生变化时触发
   *
   * @param e 事件名称（'update:visible'）
   * @param value 新的可见性值
   */
  (e: 'update:visible', value: boolean): null
}>()

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
    setTimeout(() => {
      classObj.value['__dd-pop-out-to'] = true
    }, 50)
  }
  else {
    delete maskClassObj.value['__dd-pop-out-mask-to']
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
