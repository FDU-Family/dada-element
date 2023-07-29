<script setup lang="ts">

</script>

<template>
  <div class="mt">
    <DadaInput size="medium" placeholder="请输入新标签" />
  </div>
  <div class="mt">
    <DadaInput border width="600px" placeholder="请输入新标签">
      <template #inputRight>
        <div class="testIcon">
          <div class="iconfont dada-mani-confirm" />
        </div>
      </template>
    </DadaInput>
  </div>
  <div class="mt">
    <DadaInput border width="600px" value="计算机科学">
      <template #inputRight>
        <div class="testIcon">
          <div class="iconfont dada-calc-minus" />
        </div>
      </template>
    </DadaInput>
  </div>
  <div class="mt">
    <DadaInput border width="600px" value="处女座">
      <template #inputRight>
        <div class="testIcon">
          <div class="iconfont dada-mani-confirm" />
          <div class="iconfont dada-calc-minus" />
        </div>
      </template>
    </DadaInput>
  </div>
</template>

<style scoped>
.mt {
    margin-top: 20px;
    margin-bottom: 10px;
}

.testIcon {
  display: flex;
  flex-direction: row;
  font-size: 55px;
}
.testIcon .iconfont {
  margin-left: 10px;
  color: var(--main-primary);
}
</style>
