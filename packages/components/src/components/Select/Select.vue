<script setup lang="ts">
import '@dada-element/style/src/Select.scss'
import type { Ref } from 'vue'
import { computed, inject, ref, watch } from 'vue'
import { pxToVw } from '@dada-element/utils'
import type { SelectorPickerOnChangeEvent } from '@uni-helper/uni-app-types'
import type { RuleItem } from '../../types'

interface optionsProp {
  label: string | number
  value: string | number
}

const props = withDefaults(defineProps<{
  /**
   * 下拉框的占位文本
   */
  placeholder?: string

  /**
   * 下拉框的宽度（以像素或其他 CSS 单位表示）
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
   * 下拉框的类型
   */
  type?: 'default' | 'primary'

  /**
   * 下拉框的尺寸
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * 下拉框的值
   */
  value?: string | number

  /**
   * 下拉框的标签
   */
  label?: string

  /**
   * 下拉框的选项列表
   */
  options: Array<optionsProp>
}>(), {
  placeholder: '',
  width: 600,
  shadow: false,
  border: false,
  size: 'medium',
  maxlength: 140,
  type: 'default',
})

const emits = defineEmits<{
  /**
   * 选中值发生变化时触发
   *
   * @param e 事件名称（'update:value'）
   * @param value 新的选中值
   */
  (e: 'update:value', value: string | number): void
}>()

const index = computed(() => props.options.findIndex(item => item.value === props.value))
const array = computed(() => props.options.map(item => item.label))
const isShake = ref(false)

const rule = inject<RuleItem>('rule')
const validate = inject<{
  trigger: Ref<boolean>
  setIsValidate: (value: boolean) => void
}>('validate')

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

function bindPickerChange(e: SelectorPickerOnChangeEvent) {
  const _index = Number(e.detail.value)
  if (_index >= 0)
    emits('update:value', props.options[_index].value)
  else
    emits('update:value', '')
}

const containerClassAry = computed(() => {
  const { shadow, border, type } = props
  return [
    shadow ? '__dd-input-shadow' : '',
    border ? '__dd-input-border' : '',
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

const styleObj = computed(() => {
  const { width } = props
  const obj: Record<string, any> = {}
  if (width)
    obj.width = pxToVw(width)
  return obj
})

function shake() {
  isShake.value = true
  setTimeout(() => {
    isShake.value = false
  }, 600)
}
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
      <picker :value="index" :range="array" class="__dd-select" @change="bindPickerChange">
        <template v-if="index >= 0">
          {{ array[index] }}
        </template>
        <template v-else>
          <span class="__dd-input-placeholder">
            {{ placeholder }}
          </span>
        </template>
      </picker>
      <div class="__dd-input-slot suffix">
        <div class="iconfont dada-func-arrow __dd-select-icon" />
      </div>
    </div>
  </div>
</template>
