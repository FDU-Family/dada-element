<script setup lang="ts">
import '@dada-element/style/src/Select.scss'
import type { Ref } from 'vue'
import { computed, inject, ref, watch } from 'vue'
import { pxToVw } from '@dada-element/utils'
import type { RegionPickerOnChangeEvent } from '@uni-helper/uni-app-types'
import type { RuleItem } from '../../types'

// TODO: 这里还少一个block属性，记得顺便改文档

const props = withDefaults(defineProps<{
  /**
   * 占位文本，在输入为空时显示
   */
  placeholder?: string

  /**
   * 地区选择器的宽度（以像素或其他 CSS 单位表示）
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
   * 地区选择器按钮的类型
   */
  type?: 'default' | 'primary'

  /**
   * 地区选择器按钮的尺寸
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * 选定的地区值（字符串数组格式）
   */
  value?: string[]

  /**
   * 地区选择器的标签
   */
  label?: string
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
   * 选定的地区值发生变化时触发
   *
   * @param e 事件名称（'update:value'）
   * @param value 新选定的地区值（字符串格式）
   */
  (e: 'update:value', value: string[]): void
}>()

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

function shake() {
  isShake.value = true
  setTimeout(() => {
    isShake.value = false
  }, 600)
}

function bindPickerChange(e: RegionPickerOnChangeEvent) {
  emits('update:value', e.detail.value)
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
      <picker
        mode="region" :value="value" class="__dd-select"
        @change="bindPickerChange"
      >
        <template v-if="value">
          {{ value.join('-') }}
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
