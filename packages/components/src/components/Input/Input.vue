<script setup lang="ts">
import type { InputOnBlurEvent, InputOnFocusEvent, InputOnInputEvent } from '@uni-helper/uni-app-types'
import '@dada-element/style/src/Input.scss'
import type { Ref } from 'vue'
import { computed, inject, ref, useSlots, watch } from 'vue'
import { pxToVw } from '@dada-element/utils'
import type { RuleItem } from '../../types'

const props = withDefaults(defineProps<{
  /**
   * 输入框的占位文本
   */
  placeholder?: string

  /**
   * 输入框的宽度（以像素或其他 CSS 单位表示）
   */
  width?: string | number

  /**
   * 是否带有阴影
   */
  shadow?: boolean

  /**
   * 是否带有边框
   */
  border?: boolean

  /**
   * 输入框的类型
   */
  type?: 'default' | 'primary'

  /**
   * 输入框的尺寸
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * 输入框的值
   */
  value?: string

  /**
   * 输入框的标签
   */
  label?: string

  /**
   * 是否是密码输入框
   */
  password?: boolean

  /**
   * 最大输入长度
   */
  maxlength?: number

  /**
   * 是否禁用输入框
   */
  disabled?: boolean

  /**
   * 是否显示右侧的线
   */
  line?: boolean

  /**
   * 是否为块状元素
   */
  block?: boolean
}>(), {
  placeholder: '',
  shadow: false,
  border: false,
  size: 'medium',
  line: false,
  maxlength: 140,
  type: 'default',
  block: false,
})

const emits = defineEmits<{
  /**
   * 输入框的值发生变化时触发
   *
   * @param e 事件名称（'update:value'）
   * @param value 新的输入框值
   */
  (e: 'update:value', value: string): void
  (e: 'onFocus', value: InputOnFocusEvent): void
  (e: 'onBlur', value: InputOnBlurEvent): void
}>()

const isFocus = ref(false)
const slots = useSlots()
const keyboardHeight = ref()
const isShake = ref(false)

const rule = inject<RuleItem>('rule', null)
const validate = inject<{
  trigger: Ref<boolean>
  setIsValidate: (value: boolean) => void
}>('validate', null)

if (validate) {
  watch(validate.trigger, () => {
    if (rule && rule.trigger.includes('submit')) {
      const ans = rule.handle(props.value)

      validate.setIsValidate(ans)
      if (!ans)
        shake()
    }
  })
}

const containerClassAry = computed(() => {
  const { shadow, border, type, block } = props
  return [
    shadow ? '__dd-input-shadow' : '',
    border ? '__dd-input-border' : '',
    block ? '__dd-input-block' : '',
    `__dd-input-type-${type}`,
    isShake.value ? 'shake-animation' : '',
  ]
})

const areaClassAry = computed(() => {
  const { size } = props
  return [
    `__dd-input-size-${size}`,
  ]
})

const classAry = computed(() => {
  const { line } = props
  return [
    (slots.suffix && line) ? 'suffix' : '',
  ]
})

const styleObj = computed(() => {
  const { width } = props
  const obj: Record<string, any> = {}
  if (width)
    obj.width = pxToVw(width)
  return obj
})

function inputHandle(e: InputOnInputEvent) {
  emits('update:value', e.detail.value)
}

function blurHandle(e: InputOnBlurEvent) {
  isFocus.value = false
  emits('onBlur', e)

  if (rule && rule.trigger.includes('blur') && !rule.handle(props.value))
    shake()
}

function shake() {
  isShake.value = true
  setTimeout(() => {
    isShake.value = false
  }, 600)
}

function focus() {
  isFocus.value = true
}

function focusHandle(e: InputOnFocusEvent) {
  keyboardHeight.value = e.detail.height
  emits('onFocus', e)
}

defineExpose({
  focus,
})
</script>

<template>
  <div class="dada-element-wrapper __dd-input-container" :class="containerClassAry" :style="styleObj">
    <div :class="areaClassAry" class="__dd-input-area">
      <div v-if="label" class="__dd-input-label">
        {{ label }}
      </div>
      <div class="__dd-input-slot prefix">
        <slot name="prefix" />
      </div>
      <input class="__dd-input" :class="classAry" :placeholder="placeholder" placeholder-class="__dd-input-placeholder"
        :value="value" :focus="isFocus" :password="props.password" :maxlength="props.maxlength" :disabled="props.disabled"
        @input="inputHandle" @blur="blurHandle" @focus="focusHandle">
      <div class="__dd-input-slot suffix">
        <slot name="suffix" />
      </div>
    </div>
  </div>
</template>
