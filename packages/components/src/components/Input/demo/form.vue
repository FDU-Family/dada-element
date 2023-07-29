<script setup lang="ts">

</script>

<template>
  <div class="mt">
    <DadaInput size="medium" :disabled="true" placeholder="示范用" />
  </div>
  <div class="mt">
    <DadaInput border label="手机号" :focus="true" placeholder="请输入手机号">
      <template #prefix-icon>
        <div class="testIcon">
          <div class="iconfont dada-mani-confirm" />
        </div>
      </template>
    </DadaInput>
  </div>
  <div class="mt">
    <DadaInput border label="密码" :password="true" placeholder="请输入密码" />
  </div>
  <div class="mt">
    <DadaInput border label="验证码" :maxlength="6" placeholder="请输入验证码">
      <template #suffix-icon>
        <div class="testIcon">
          <div class="iconfont dada-mani-confirm" />
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

  color: var(--main-primary);
}
</style>
