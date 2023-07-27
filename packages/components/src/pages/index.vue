<script setup lang="ts">
</script>

<template>
  <div>
    <DadaButton>按钮</DadaButton>
    <DadaButton type="primary">
      按钮
    </DadaButton>
    <DadaButton type="secondary">
      按钮
    </DadaButton>
    <DadaButton type="warning">
      按钮
    </DadaButton>
    <DadaButton type="info" :width="100">
      按钮
    </DadaButton>
    <DadaButton>
      <view class="w-btn">
        按钮
      </view>
    </DadaButton>
  </div>
</template>

<style lang="scss" scoped>
.w-btn {
  width: 400px;
}
</style>
