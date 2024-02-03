import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import Input from '../Input.vue'

// 默认设置，如果之后有组件默认设置的更改，请修改测试的对应位置
const defaultProps = {
  border: false,
  disabled: false,
  label: undefined,
  line: false,
  maxlength: 140,
  password: false,
  placeholder: '',
  shadow: false,
  size: 'medium',
  type: 'default',
  value: undefined,
  width: 600,
}

describe('input.vue', () => {
  it('测试组件导入', () => {
    expect(Input).toBeTruthy()
  })
  it('测试默认设置', () => {
    const wrapper = mount(Input)
    expect(wrapper.props()).toStrictEqual(defaultProps)
  })
  it('测试label是否正确渲染', async () => {
    const wrapper = mount(Input, {
      props: {
        label: 'It is a test',
      },
    })
    expect(wrapper.find('.__dd-input-label')).toBeTruthy()
    wrapper.setProps({
      label: undefined,
    })
    await nextTick()
    expect(wrapper.find('.__dd-input-label').exists()).toBeFalsy()
  })
  it('测试初始聚焦状态', async () => {
    const wrapper = mount(Input)
    // 测试Expose的方法是否正常
    expect(wrapper.vm.focus).toBeDefined()
    expect(wrapper.find('input').element.focus).toBeFalsy()
    wrapper.vm.focus()
    await nextTick()
    expect(wrapper.find('input').element.focus).toBeTruthy()
  })
  it('测试失焦事件', async () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').element.focus).toBeFalsy()
    wrapper.vm.focus()
    await nextTick()
    expect(wrapper.find('input').element.focus).toBeTruthy()
    wrapper.find('input').trigger('blur')
    await nextTick()
    expect(wrapper.find('input').element.focus).toBeFalsy()
  })
  it('测试输入更新函数调用', async () => {
    const mockUpdateFn = vi.fn()
    const wrapper = mount(Input, {
      props: {
        onInput: mockUpdateFn,
      },
    })
    await wrapper.trigger('input')
    expect(mockUpdateFn).toHaveBeenCalled()
  })
  it('测试向下绑定的value', () => {
    const myValue1 = '我的输入1'
    const myValue2 = '我的输入2'
    const wrapper = mount(Input, {
      props: {
        value: myValue1,
      },
    })
    expect(wrapper.find('input').element.value).toBe(myValue1)
    wrapper.setValue(myValue2)
    expect(wrapper.find('input').element.value).toBe(myValue1)
  })
  it('测试向上emits的事件(input事件)', () => {
    const myValue1 = '我的动态输入1'
    const wrapper = mount(Input)
    // input观察传值
    wrapper.find('input').trigger('input', {
      detail: {
        value: myValue1,
      },
    })
    // 使用空值合并运算符??避免可能的undefined造成语法错误
    const emittedHistory = wrapper.emitted('update:value') ?? []
    expect(emittedHistory[0][0]).toBe(myValue1)
  })
})
