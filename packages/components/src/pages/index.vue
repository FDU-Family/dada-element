<script setup lang="ts">
function routeTo(path: string) {
  uni.navigateTo({
    url: `/pages${path}`,
  })
}
</script>

<template>
  <div class="index-page">
    <DadaButton width="700" class="mt" size="large" type="primary" @click="routeTo('/button')">
      按钮
    </DadaButton>
    <DadaButton width="700" class="mt" size="large" @click="routeTo('/input')">
      文本框
    </DadaButton>
    <DadaButton width="700" class="mt" size="large" type="secondary" @click="routeTo('/radio')">
      单选框
    </DadaButton>
    <DadaButton width="700" class="mt" size="large" type="secondary" @click="routeTo('/tabs')">
      Tab
    </DadaButton>
  </div>
</template>

<style lang="scss">
.index-page{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
