<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>

<template>
    <div>
        transition
        <button @click="value--">-1</button>
        <button @click="value++">+1</button>
        <dada-transition :count="3" :value="value">
            <div class="class">
                class1
                <div>123123</div>
            </div>
            <div class="class">
                class2
            </div>
            <div class="class">
                class3
            </div>
        </dada-transition>
    </div>
</template>

<style>
.class {
    width: 100vw;
    background: blanchedalmond;
}
</style>