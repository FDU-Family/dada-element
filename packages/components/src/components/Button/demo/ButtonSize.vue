<script setup lang="ts">

</script>

<template>
  <div>
    <h1>按钮大小</h1>
    <DadaButton class="mr">
      按钮
    </DadaButton>
    <DadaButton class="mr" size="large">
      按钮
    </DadaButton>
    <DadaButton class="mr" size="small">
      按钮
    </DadaButton>
    <DadaButton :width="375" size="large" type="primary">
      <div class="slot-test">
        <div class="iconfont dada-da-like" />
        <div class="">
          99
        </div>
      </div>
    </DadaButton>
  </div>
</template>

<style>
.slot-test {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
