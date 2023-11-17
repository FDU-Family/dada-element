<script setup lang="ts">
import { reactive, ref } from 'vue'

const modalVisible = ref(false)

const describeData = {
  concatTitle: '联系方式（至少其一）*',
  concatShownTitle: '选择联系方式可见范围*',
  homepageTitle: '选择个人主页可见范围*',
  concatType: [
    {
      label: '手机',
      key: 'phone',
      placeholder: '请输入手机号',
      value: ref(''),
    },
    {
      label: '微信',
      key: 'wechat',
      placeholder: '请输入微信号',
      value: ref(''),
    },
    {
      label: 'QQ',
      key: 'qq',
      placeholder: '请输入QQ号',
      value: ref(''),
    },
  ],
}

const selectOptions = [
  {
    name: '选择联系方式可见范围*',
    key: 'concatOpt',
    options: [
      {
        label: '组队成功后发起人可见',
        value: 'owner',
      },
      {
        label: '团队成员可见',
        value: 'team',
      },
    ],
    value: ref(''),
  },
  {
    name: '选择个人主页可见范围*',
    key: 'homepageOpt',
    options: [
      {
        label: '对内所有搭子可见',
        value: 'all',
      },
      {
        label: '不可见',
        value: 'team',
      },
    ],
    value: ref(''),
  },

]

const formData = reactive({
  reason: '',
})

function confirmHandle() {
  modalVisible.value = false
}

function cancelHandle() {
  modalVisible.value = false
}
</script>

<template>
  <DadaButton @click="modalVisible = true">
    自定义模态框
  </DadaButton>
  <DadaModal :visible="modalVisible" preset="default" title="模态框" @confirm="confirmHandle" @cancel="cancelHandle">
    <textarea
      v-model="formData.reason"
      placeholder="输入申请理由(选填)"
      placeholder-class="textarea-placeholder"
      class="mt-22px h-120px w-480px rd-10px text-26px font-400"
    />
    <div class="mt-18px w-420px">
      <div class="h-60px text-26px font-700">
        {{ describeData.concatTitle }}
      </div>
      <div v-for="(item) in describeData.concatType" :key="item.key" class="mt-5px h-60px">
        <span class="text-26px font-700 leading-32px c-$main-deep">{{ item.label }}</span>
        <dada-input v-model:value="item.value.value" :placeholder="item.placeholder" :shadow="true" width="240px" />
      </div>
    </div>
    <div class="mt-15px">
      <div v-for="item in selectOptions" :key="item.key">
        <span class="h-60px text-26px font-700 leading-32px c-$main-primary">{{ item.name }}</span>
        <dada-select v-model:value="item.value.value" :options="item.options" width="440px" />
      </div>
    </div>
  </DadaModal>
</template>
