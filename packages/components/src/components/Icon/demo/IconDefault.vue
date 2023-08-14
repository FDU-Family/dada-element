<script setup lang="ts">
const name = 'dada-da-love'
</script>

<template>
  <div class="ml mr rowDir">
    <dada-icon :name="name" size="tiny" type="primary" />
    <dada-icon :name="name" size="small" type="secondary" />
    <dada-icon :name="name" size="medium" type="warning" />
    <dada-icon :name="name" size="large" type="default" />
    <dada-icon :name="name" size="huge" type="info" color="#f5cf39" bg-color="#9b9b9b" />
  </div>
  <div class="ml mr rowDir">
    <dada-icon :name="name" size="tiny" type="primary" border />
    <dada-icon :name="name" size="small" type="secondary" border />
    <dada-icon :name="name" size="medium" type="warning" border />
    <dada-icon :name="name" size="large" type="default" border />
    <dada-icon :name="name" size="huge" type="info" border />
  </div>
  <div class="ml mr rowDir">
    <dada-icon :name="name" size="tiny" type="primary" label="hello" label-position="top" />
    <dada-icon :name="name" size="small" type="secondary" label="hello" label-position="bottom" />
    <dada-icon :name="name" size="medium" type="warning" label="hello" label-position="left" />
    <dada-icon :name="name" size="large" type="default" label="hello" label-position="right" />
    <dada-icon :name="name" size="huge" type="info" />
  </div>
  <div class="ml mr rowDir">
    <dada-icon :name="name" size="tiny" type="primary" shape="square" />
    <dada-icon :name="name" size="small" type="secondary" shape="square" />
    <dada-icon :name="name" size="medium" type="warning" shape="square" />
    <dada-icon :name="name" size="large" type="default" shape="square" />
    <dada-icon :name="name" size="huge" type="info" shape="square" />
  </div>
  <div class="ml mr rowDir">
    <dada-icon :name="name" size="tiny" type="primary" shape="square" border />
    <dada-icon :name="name" size="small" type="secondary" shape="square" border />
    <dada-icon :name="name" size="medium" type="warning" shape="square" border />
    <dada-icon :name="name" size="large" type="default" shape="square" border />
    <dada-icon :name="name" size="huge" type="info" shape="square" border />
  </div>
</template>

<style lang="scss">
.rowDir {
  display: flex;
  flex-direction: row;
}
.colDir {
  display: flex;
  flex-direction: column;
}
</style>
