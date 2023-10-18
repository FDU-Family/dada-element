<script setup lang="ts">
</script>

<template>
  <div class="tag-demo">
    <DadaTag size="small">
      Tag小
    </DadaTag>

    <DadaTag size="medium">
      Tag中
    </DadaTag>

    <DadaTag size="large">
      Tag大
    </DadaTag>

    <DadaTag width="350">
      Tag指定长度
    </DadaTag>

    <DadaTag bg-color="red">
      Tag变色
    </DadaTag>

    <DadaTag text-size="50">
      Tag指定文字大小
    </DadaTag>

    <DadaTag text-weight="400">
      Tag指定文字粗细
    </DadaTag>
    <DadaTag type="warning">
      warning
    </DadaTag>
    <DadaTag type="primary">
      primary
    </DadaTag>
    <DadaTag type="secondary" width="200px">
      secondary
    </DadaTag>
  </div>
</template>

<style>
.tag-demo {
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 20px;
}
</style>
