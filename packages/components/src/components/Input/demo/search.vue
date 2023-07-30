<script setup lang="ts">

</script>

<template>
  <div>
    <div class="line" />
    <div class="mt">
      <DadaInput boundless shadow placeholder="输入关键字查找想要的队伍" size="large">
        <template #prefix>
          <div class="iconfont dada-func-search testIcon" />
        </template>
      </DadaInput>
    </div>
    <div class="mt">
      <DadaInput boundless placeholder="输入关键字查找想要的队伍" shadow size="large">
        <template #suffix>
          <div class="testIcon">
            <div class="iconfont dada-mani-confirm" />
          </div>
        </template>
      </DadaInput>
    </div>
    <div class="mt">
      <DadaInput boundless placeholder="输入关键字查找想要的队伍" shadow size="large">
        <template #suffix>
          <div class="testIcon">
            <div class="iconfont dada-calc-minus" />
          </div>
        </template>
      </dadainput>
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
    font-size: 60px;
}
</style>
