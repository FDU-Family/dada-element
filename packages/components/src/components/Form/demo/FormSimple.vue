<script setup lang="ts">
import { ref } from 'vue'
import { FormRules } from '../../../types'
const formData = ref({
    name: ''
})

const rules = ref<FormRules>({
    name: {
        handle: (value) => Boolean(value),
        trigger: ['blur', 'submit']
    },
})

const form = ref()

async function clickHandle() {
    console.log(await form.value.validate());
}
</script>

<template>
    <div class="mt">
        <dada-form :rules="rules" ref="form">
            <dada-form-item name="name">
                <dada-input v-model:value="formData.name" />
            </dada-form-item>
        </dada-form>
        <dada-button @click="clickHandle()">验证</dada-button>
    </div>
</template>

<style></style>