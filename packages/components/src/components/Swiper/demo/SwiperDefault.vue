<script setup lang="ts">
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
const color = '#f5cf39'
</script>

<template>
  <div class="outside">
    <dada-swiper class="casual" :text="true" :images="images" :dot-color="color" />
  </div>
</template>

<style scoped lang="scss">
.outside {
    width: 700px;
    display: block;
    margin: auto;
    border-radius: 20px;
    overflow: hidden;
}
</style>
