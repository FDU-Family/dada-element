import { computed, reactive, ref } from 'vue'
import type { RadioProps } from '../Radio.vue'

export type RadioDataItem = Map<string, boolean>

const RadioStore = reactive((new Map<string, RadioDataItem>()))

export function useRadio(props: RadioProps) {
  // 首先进行安装
  const { unique, name } = props

  if (!unique || !name) {
    // 如果 unique 或者 name 没有设置，就不使用store
    const _v = ref(false)
    return {
      value: computed(() => _v.value),
      setValue: (value: boolean) => { _v.value = value },
      store: RadioStore,
    }
  }
  if (!RadioStore.has(unique))
    RadioStore.set(unique, new Map<string, boolean>())

  if (!RadioStore.get(unique)!.has(name))
    RadioStore.get(unique)!.set(name, props.value!)

  // value 是一个getter，首先会从props里拿，其次从store里
  const value = computed(() => {
    return RadioStore.get(unique)!.get(name)
  })

  const setValue = (value: boolean) => {
    const rMap = RadioStore.get(unique)!
    // 单选
    if (!props.muti) {
      if (value) {
        // 将某个值设置为true的时候，将所有先设置成false
        rMap.forEach((_, k) => {
          rMap.set(k, false)
        })
      }
      else {
        // 不可以吧某个值设置为false
        return
      }
    }
    rMap.set(name, value)
  }
  return {
    value,
    setValue,
    store: RadioStore,
  }
}
