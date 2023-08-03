<script setup lang="ts">

</script>

<template>
  <div>
    <div class="line" />
    <div class="mt ml">
      <DadaInput shadow placeholder="请输入新标签">
        <template #suffix>
          <div class="iconfont dada-calc-plus testIcon" />
        </template>
      </DadaInput>
    </div>
    <div class="mt ml">
      <DadaInput shadow type="primary" border value="计算机科学">
        <template #suffix>
          <div class="iconfont dada-mani-confirm" />
        </template>
      </DadaInput>
    </div>
    <div class="mt ml">
      <DadaInput shadow type="primary" border value="处女座">
        <template #suffix>
          <div class="testIcon">
            <div class="iconfont dada-mani-confirm" />
            <div class="iconfont dada-calc-minus" />
          </div>
        </template>
      </DadaInput>
    </div>
  </div>
</template>

<style>

</style>
