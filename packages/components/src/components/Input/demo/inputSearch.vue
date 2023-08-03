<script setup lang="ts">

</script>

<template>
  <div>
    <div class="line" />
    <div class="mt ml">
      <DadaInput shadow placeholder="输入关键字查找想要的队伍" type="primary" size="large">
        <template #prefix>
          <div class="iconfont dada-func-search testIcon" />
        </template>
      </DadaInput>
    </div>
    <div class="mt ml">
      <DadaInput placeholder="输入关键字查找想要的队伍" shadow type="primary" size="large">
        <template #suffix>
          <div class="testIcon">
            <div class="iconfont dada-mani-confirm" />
          </div>
        </template>
      </DadaInput>
    </div>
    <div class="mt ml">
      <DadaInput placeholder="输入关键字查找想要的队伍" shadow type="primary" size="large">
        <template #suffix>
          <div class="testIcon">
            <div class="iconfont dada-calc-minus" />
          </div>
        </template>
      </dadainput>
    </div>
  </div>
</template>

<style>
</style>
