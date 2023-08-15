<script setup lang="ts">
const imageSrc = 'https://placekitten.com/200/300'
const image1Src = 'https://placekitten.com/800/1200'
</script>

<template>
  <div>
    <div class="img ml mt rowDir">
      <dada-avatar :src="imageSrc" shape="circle" size="small" />
      <dada-avatar :src="imageSrc" shape="circle" />
      <dada-avatar :src="imageSrc" shape="circle" size="large" />
    </div>
    <div class="img ml mt rowDir">
      <dada-avatar :src="imageSrc" shape="circle" shadow="none" size="small" />
      <dada-avatar :src="imageSrc" shape="circle" shadow="medium" />
      <dada-avatar :src="imageSrc" shape="circle" shadow="large" size="large" />
    </div>
    <div class="img ml mt rowDir">
      <dada-avatar :src="imageSrc" shape="circle" border />
      <dada-avatar :src="imageSrc" shape="circle" />
    </div>
    <div class="img ml mt rowDir">
      <dada-avatar :src="image1Src" shape="square" size="small" />
      <dada-avatar :src="image1Src" shape="square" />
      <dada-avatar :src="image1Src" shape="square" size="large" />
    </div>
    <div class="img ml mt rowDir">
      <dada-avatar :src="image1Src" shape="square" border />
      <dada-avatar :src="image1Src" shape="square" shadow="medium" />
      <dada-avatar :src="image1Src" shape="square" shadow="medium" border />
    </div>
  </div>
</template>

<style>
</style>
