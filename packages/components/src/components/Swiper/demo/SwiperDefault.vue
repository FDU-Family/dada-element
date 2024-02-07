<script setup lang="ts">
import { ref } from 'vue'

const images = [
  {
    id: 'A',
    src: 'https://placekitten.com/200/300',
  },
  {
    id: 'B',
    src: 'https://placekitten.com/800/1200',
  },
]
const singleImage = [
  {
    id: 'A',
    src: 'https://placekitten.com/200/300',
  },
]
const color = '#f5cf39'
const current = ref(0)

function getImageMsg(value: string) {
  console.log('what i had have', value)
}
</script>

<template>
  <div class="outside">
    <dada-swiper class="casual" :text="true" :images="images" :dot-color="color" />
  </div>
  <div class="outside">
    <dada-swiper
      v-model:current="current" class="casual" height="500px" :text="true" :images="images"
      :dot-color="color"
    />
  </div>
  <div class="outside">
    <dada-swiper
      v-model:current="current" class="casual" height="500px" :text="true" :images="singleImage" :dots="false"
      :dot-color="color"
    />
  </div>
  <div class="outside">
    <dada-swiper
      v-model:current="current" class="casual" height="500px" :text="true" :images="images" :dots="false"
      :dot-color="color" @image-event="getImageMsg"
    />
  </div>
  <div>{{ current + 1 }}/{{ images.length }}</div>
</template>

<style scoped lang="scss">
.outside {
  width: 700px;
  display: block;
  margin-bottom: 100px;
  border-radius: 20px;
  overflow: hidden;
}
</style>
