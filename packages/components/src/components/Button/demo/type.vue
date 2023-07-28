<script setup lang="ts">

</script>

<template>
  <div>
    <h1>正常按钮</h1>
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
      <DadaButton type="info">
        按钮
      </DadaButton>
      <DadaButton type="info" text-color="red">
        按钮
      </DadaButton>
      <DadaButton :width="80">
        按钮
      </DadaButton>
    </div>
  </div>
</template>

<style></style>
