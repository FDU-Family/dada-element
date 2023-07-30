<script setup lang="ts">

</script>

<template>
  <div>
    <div class="line" />
    <div class="mt">
      <DadaInput shadow placeholder="请输入新标签">
        <template #suffix>
          <div class="iconfont dada-calc-plus testIcon" />
        </template>
      </DadaInput>
    </div>
    <div class="mt">
      <DadaInput shadow border value="计算机科学">
        <template #suffix>
          <div class="iconfont dada-mani-confirm" />
        </template>
      </DadaInput>
    </div>
    <div class="mt">
      <DadaInput shadow border value="处女座">
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

<style scoped>
.mt {
  margin-top: 30px;
  margin-left: 50px;
}
.line {
    width: 100%;
    height: 5px;
    background-color: #b80808;
    margin-top: 30px;
}
.testIcon {
    color: var(--main-primary);
    display: flex;
    flex-direction: row;
}
</style>
