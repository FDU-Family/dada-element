<script setup lang="ts">
import BtnType from '~/components/Button/demo/type.vue'
import BtnText from '~/components/Button/demo/text.vue'
import BtnSize from '~/components/Button/demo/size.vue'
import BtnCircle from '~/components/Button/demo/circle.vue'
</script>

<template>
  <div>
    <div>
      <BtnType />
      <BtnText />
      <BtnSize />
      <BtnCircle />
    </div>
    <div>
      <InputDemo />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
