<script setup lang="ts">
import '@dada-element/style/src/Radio.scss'
// import type { RadioGroupProps } from '@uni-helper/uni-app-types'
import { computed, ref } from 'vue'

export interface RangeItem {
  value: string,
  name: string,
  checked?: boolean
}

export interface RadioProps {
  value?: string 
  checked?: boolean
  disabled?: boolean
  type?: 'primary' | 'default'
  color?: string
  range?: RangeItem[],
  direction?: 'row' | 'column'

}

const props = withDefaults(defineProps<RadioProps>(), {
  value: '',
  checked: false,
  disabled: false,
})

const classAry = computed(() => {
  const { type } = props
  return [
    `__dd-radio-type-${type}`,
  ]
  return []
})

const styleAry = computed(() => {
  // const { type } = props
  const obj:Record<string, any> = {}
  // if(type) {
  //   obj.color = type
  // }
  return obj
})

const current = ref(0)

const groupClass = computed(() => {
  const { direction } = props
  return [
    `__dd-radio-direction-${direction}`,
  ]
})


function radioChange(evt: any) {
  const radioAry = props.range
  if (radioAry) {
    for (let i = 0; i < radioAry.length; i++) {
      if (radioAry[i].value === evt.detail.value) {
        current.value = i
        break
      }
   }
  }
}

</script>

<template>
  <div class="dada-element-wrapper __dd-radio-container">
    <radio-group @change="radioChange" :class="groupClass">
      <label v-for="(item, index) in range" class="radio-label-list" :key="item.value">
          <div>
            <radio
              :style="styleAry"
              :class="classAry"
              :value="item.value"
              :checked="index === current"
              :type="type"
              :color="color"
            />
          </div>
          <div>
          {{ item.name }}
          </div>
      </label>
    </radio-group>
  </div>
</template>
