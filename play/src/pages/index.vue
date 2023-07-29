<script setup lang="ts">
function clickHandle() {
  console.log(1)
}
</script>

<template>
  <div>
    123
    <DadaButton @click="clickHandle">
      123
    </DadaButton>
  </div>
</template>

<style></style>
