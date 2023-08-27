<script setup lang="ts">
import { ref } from 'vue'
import type { tabsOptionsType } from '../../../types.ts'

const options: tabsOptionsType = [
  {
    lable: '活动信息',
    key: 'activity',
  },
  {
    lable: '队伍信息',
    key: 'team',
  },
  {
    lable: '评论（10）',
    key: 'comment',
    slotName: 'comment',

  },
]
const index = ref(0)
</script>

<template>
  <div>
    <div @click="index++">
      v-model:value的值{{ index }} 点击＋1
    </div>
    <DadaTabs v-model:value="index" :tabs-options="options">
      <template #slot-0>
        <div>
          activity
        </div>
      </template>
      <template #slot-1>
        <div>
          team
        </div>
      </template>
      <template #comment>
        <div>
          comment
        </div>
      </template>
    </DadaTabs>
  </div>
</template>

<style>

</style>
