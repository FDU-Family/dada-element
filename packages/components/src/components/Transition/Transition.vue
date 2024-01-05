<script setup lang="ts">
import { computed, provide } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  count: number
}>(), {
})

provide('transition', props)

const styleObj = computed(() => ({
  width: `${100 * props.count}vw`,
  transform: `translateX(${props.value * -100}vw)`,
}))
</script>

<template>
  <div :style="styleObj" class="__dada-transition">
    <slot />
  </div>
</template>

<style lang="scss" src="@dada-element/style/src/Transition.scss"></style>
