<script setup lang="ts">
import '@dada-element/style/src/Image.scss'
import { ref, watch, watchEffect } from 'vue'
import { formatBase64MineType } from '@dada-element/utils'
import type { ImageMode } from '../../types'

const props = withDefaults(defineProps<{
  /**
   * 图片填充模式
   */
  mode: ImageMode

  /**
   * 图片缩略图url
   */
  src: string

  /**
   * 图片预览url
   */
  previewSrc?: string

  /**
   * 是否可以预览
   */
  preview?: boolean
}>(), {
  preview: true,
  mode: 'aspectFit',
  lazy: false,
})

const loadingImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MTJfMjE5OSkiPgo8cmVjdCB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzQxMl8yMTk5KSIvPgo8cGF0aCBkPSJNMCAxMzMuNUg2LjczNEMxMi40MzIgMTMzLjUgMTQuMTkzMiAxNDkgMjMuMzEgMTQ5QzM0LjcwNiAxNDkgNDMuNjE1NiAxMTAgNTguNTM0IDExMEM3My40NTI0IDExMCA4My43MDg4IDE2MSA5OS40NTYgMTYxQzEyMy4yODQgMTYxIDEzMy4xMjYgMTAwIDE1Ny45OSAxMDBDMTgyLjg1NCAxMDAgMTg0LjkyNiAxMzggMjAyLjAyIDEzOEMyMTIuMzggMTM4IDIxNy43NjcgMTE1LjUgMjI4Ljk1NiAxMTUuNUMyMzcuNzYyIDExNS41IDI0MC4zNTIgMTMxLjUgMjQ4LjY0IDEzMS41QzI1NS4yNyAxMzEuNSAyNTYuNTgzIDEzMS41IDI1OSAxMzEuNSIgc3Ryb2tlPSJ1cmwoI3BhaW50MV9saW5lYXJfNDEyXzIxOTkpIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTEyNSAxMDguMjZDMTI5LjY4IDEwOC4yNiAxMzQuMzcyIDEwOC4yNiAxMzkuMDUyIDEwOC4yNkMxMzkuODU3IDEwOC4yNTkgMTQwLjY2MSAxMDguMzM2IDE0MS40NTIgMTA4LjQ4OEMxNDIuMzc4IDEwOC42MDEgMTQzLjI0MyAxMDkuMDE0IDE0My45MTIgMTA5LjY2NEMxNDQuNTgyIDExMC4zMTQgMTQ1LjAyIDExMS4xNjUgMTQ1LjE2IDExMi4wODhDMTQ1LjMwNiAxMTIuODQ4IDE0NS4zODYgMTEzLjYxOSAxNDUuNCAxMTQuMzkyQzE0NS40IDEyMS4zOTIgMTQ1LjQgMTI4LjM5MiAxNDUuNCAxMzUuMzkyQzE0NS40IDEzNi4wMzYgMTQ1LjMzOSAxMzYuNjc5IDE0NS4yMiAxMzcuMzEyQzE0NS4xMDIgMTM4LjM3MSAxNDQuNjI4IDEzOS4zNTggMTQzLjg3NiAxNDAuMTEyQzE0My4xMjQgMTQwLjg2NiAxNDIuMTM4IDE0MS4zNDMgMTQxLjA4IDE0MS40NjRDMTQwLjExIDE0MS42NCAxMzkuMTI2IDE0MS43MzMgMTM4LjE0IDE0MS43NEgxMTEuMzJDMTEwLjQxOCAxNDEuNzQ3IDEwOS41MTcgMTQxLjY2MiAxMDguNjMyIDE0MS40ODhDMTA3LjY5MiAxNDEuMzIyIDEwNi44MjQgMTQwLjg3NCAxMDYuMTQ1IDE0MC4yMDNDMTA1LjQ2NSAxMzkuNTMyIDEwNS4wMDYgMTM4LjY3IDEwNC44MjggMTM3LjczMkMxMDQuNjcgMTM2Ljk4NyAxMDQuNTkzIDEzNi4yMjYgMTA0LjYgMTM1LjQ2NEMxMDQuNiAxMjguNDg4IDEwNC42IDEyMS41MjggMTA0LjYgMTE0LjU4NEMxMDQuNjA1IDExMy43NzkgMTA0LjY4MSAxMTIuOTc2IDEwNC44MjggMTEyLjE4NEMxMDQuOTU0IDExMS4zMDcgMTA1LjM0OCAxMTAuNDkgMTA1Ljk1NiAxMDkuODQ2QzEwNi41NjMgMTA5LjIwMSAxMDcuMzU2IDEwOC43NjEgMTA4LjIyNCAxMDguNTg0QzEwOS4xMDQgMTA4LjM0MSAxMTAuMDExIDEwOC4yMTIgMTEwLjkyNCAxMDguMkgxMjVWMTA4LjI2Wk0xMjQuODggMTE0LjJIMTEyLjc2QzExMC43NjggMTE0LjIgMTEwLjU1MiAxMTQuNDI4IDExMC41NCAxMTYuNDMyQzExMC41NCAxMjIuMDk2IDExMC41NCAxMjcuNzcyIDExMC41NCAxMzMuNDM2QzExMC41NCAxMzQuMTIgMTEwLjIxNiAxMzUuMDMyIDExMS4wNDQgMTM1LjQyOEMxMTEuODcyIDEzNS44MjQgMTEyLjUyIDEzNS4wMDggMTEzLjE1NiAxMzQuNTRDMTEzLjM5IDEzNC4zNTIgMTEzLjYxMSAxMzQuMTQ3IDExMy44MTYgMTMzLjkyOEwxMjEuMjIgMTI2LjU4NEMxMjQuNDcyIDEyMy4zNjggMTI1LjQ5MiAxMjMuMzY4IDEyOC43MzIgMTI2LjU4NEwxMzcuMDQ4IDEzNC44NTJDMTM3LjQ4IDEzNS4yOTYgMTM3Ljk2IDEzNS43MDQgMTM4LjYzMiAxMzUuNDRDMTM5LjMwNCAxMzUuMTc2IDEzOS4xNzIgMTM0LjYyNCAxMzkuMTcyIDEzNC4xMDhDMTM5LjE3MiAxMjguMTQgMTM5LjE3MiAxMjIuMTcyIDEzOS4xNzIgMTE2LjIwNEMxMzkuMTcyIDExNC40NzYgMTM4LjgzNiAxMTQuMTc2IDEzNy4xMzIgMTE0LjE3NkwxMjQuODggMTE0LjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTM2LjQxMiAxMjAuNzUyQzEzNi40NCAxMjEuMjY3IDEzNi4zNjIgMTIxLjc4MyAxMzYuMTgyIDEyMi4yNjZDMTM2LjAwMiAxMjIuNzUgMTM1LjcyNCAxMjMuMTkxIDEzNS4zNjYgMTIzLjU2M0MxMzUuMDA4IDEyMy45MzQgMTM0LjU3NyAxMjQuMjI4IDEzNC4xMDEgMTI0LjQyNkMxMzMuNjI0IDEyNC42MjQgMTMzLjExMiAxMjQuNzIxIDEzMi41OTYgMTI0LjcxMkMxMzEuNTU2IDEyNC42NzQgMTMwLjU2OSAxMjQuMjQ3IDEyOS44MjkgMTIzLjUxNkMxMjkuMDg5IDEyMi43ODUgMTI4LjY1IDEyMS44MDMgMTI4LjYgMTIwLjc2NEMxMjguNjQxIDExOS43MDYgMTI5LjA3OCAxMTguNzAxIDEyOS44MjUgMTE3Ljk1QzEzMC41NzIgMTE3LjE5OSAxMzEuNTc0IDExNi43NTUgMTMyLjYzMiAxMTYuNzA4QzEzMy4xNDggMTE2LjcxNyAxMzMuNjU4IDExNi44MyAxMzQuMTI5IDExNy4wNEMxMzQuNjAxIDExNy4yNDkgMTM1LjAyNiAxMTcuNTUyIDEzNS4zNzkgMTE3LjkyOUMxMzUuNzMyIDExOC4zMDYgMTM2LjAwNSAxMTguNzUxIDEzNi4xODIgMTE5LjIzNkMxMzYuMzYgMTE5LjcyMSAxMzYuNDM4IDEyMC4yMzYgMTM2LjQxMiAxMjAuNzUyWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQxMl8yMTk5IiB4MT0iMjUwIiB5MT0iMCIgeDI9Ii01LjQ5OTk4IiB5Mj0iMjQ1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFMERFRUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjJGMkYyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl80MTJfMjE5OSIgeDE9IjAuNTE4IiB5MT0iMTMwLjUiIHgyPSIyNTUuMzU3IiB5Mj0iMTM4LjU0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzQyMDcwIiBzdG9wLW9wYWNpdHk9IjAiLz4KPHN0b3Agb2Zmc2V0PSIwLjI4NjQ1OCIgc3RvcC1jb2xvcj0iIzM0MjA3MCIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KPHN0b3Agb2Zmc2V0PSIwLjU2NzcwOCIgc3RvcC1jb2xvcj0iIzM0MjA3MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNDIwNzAiIHN0b3Atb3BhY2l0eT0iMC4xIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDEyXzIxOTkiPgo8cmVjdCB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K'
const picSrc = ref(loadingImage)
const previewSrc = ref(loadingImage)
const previewFlag = ref(false)
let isPreviewLoad = false

watchEffect(() => {
  uni.request({
    url: props.src, responseType: 'arraybuffer',
  }).then((res) => {
    const base64 = uni.arrayBufferToBase64(res.data as ArrayBuffer)
    const type = formatBase64MineType(base64[0])
    picSrc.value = `data:${type};base64,${base64}`
  })
})

watch(() => props.previewSrc, () => {
  previewFlag.value = false
  isPreviewLoad = false
})

function previewHandle() {
  if (props.preview) {
    // 先显示图片
    previewFlag.value = true
    if (isPreviewLoad === false) {
      // 第一次加载
      if (props.previewSrc) {
        uni.request({
          url: props.previewSrc, responseType: 'arraybuffer',
        }).then((res) => {
          const base64 = uni.arrayBufferToBase64(res.data as ArrayBuffer)
          const type = formatBase64MineType(base64[0])
          previewSrc.value = `data:${type};base64,${base64}`
        })
      }
      else {
        previewSrc.value = picSrc.value
      }
    }
  }
}

function closePreview() {
  previewFlag.value = false
}
</script>

<template>
  <div class="__dd-image-container">
    <image class="__dd-image" :src="picSrc" :mode="mode" @click="previewHandle" />
    <div v-if="previewFlag" class="__dd-image-preview-area">
      <image class="__dd-image" :src="previewSrc" mode="aspectFit" @click="closePreview" />
    </div>
  </div>
</template>

<style></style>
