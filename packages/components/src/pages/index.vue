<script setup lang="ts">
import { ref } from 'vue'
function routeTo(path: string) {
  uni.navigateTo({
    url: `/pages${path}`,
  })
}

const types = ['default', 'primary', 'secondary', 'warning', 'info']

function randomType() {
  return types[Math.floor(Math.random() * 5)]
}

const pages = ref([
  { lable: '按钮', to: '/button', type: randomType() },
  { lable: '文本框', to: '/input', type: randomType() },
  { lable: '单选框', to: '/radio', type: randomType() },
  { lable: 'Tab', to: '/tabs', type: randomType() },
  { lable: '选择器', to: '/select', type: randomType() },
  { lable: '日历选择器', to: '/date-picker', type: randomType() },
  { lable: '时间选择器', to: '/time-picker', type: randomType() },
  { lable: '图片', to: '/image', type: randomType() },
  { lable: '弹窗', to: '/pop-out', type: randomType() },
  { lable: '图标', to: '/icon', type: randomType() },
  { lable: '切换', to: '/switcher', type: randomType() },
  { lable: '头像', to: '/avatar', type: randomType() },
  { lable: 'Tag', to: '/tag', type: randomType() },
  { lable: 'swiper', to: '/swiper', type: randomType() },
  { lable: '表单', to: '/form', type: randomType() },
])
</script>

<template>
  <div class="index-page">
    <DadaButton v-for="item in pages" :key="item.lable" width="325" class="mt" size="large" :type="item.type"
      @click="routeTo(item.to)">
      {{ item.lable }}
    </DadaButton>
  </div>
</template>

<style lang="scss">
.index-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 25px;
}
</style>
