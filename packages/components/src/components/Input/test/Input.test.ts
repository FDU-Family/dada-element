import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Input from '../Input.vue'

// 默认设置，如果之后有组件默认设置的更改，请修改测试的对应位置
const defaultProps = {
    "border": false,
    "disabled": false,
    "label": undefined,
    "line": false,
    "maxlength": 140,
    "password": false,
    "placeholder": "",
    "shadow": false,
    "size": "medium",
    "type": "default",
    "value": undefined,
    "width": 600,
}

describe('Input.vue', () => {
    it('测试组件导入', () => {
        expect(Input).toBeTruthy()
    })
    it('测试默认设置', () => {
        const wrapper = mount(Input)
        expect(wrapper.props()).toStrictEqual(defaultProps)
    })
    it('测试聚焦状态', () => {
        const mockFocusFn = vi.fn()
        const wrapper = mount(Input, {
            props: {
                onFocus: mockFocusFn
            }
        })
        // 测试Expose的方法是否正常
        expect(wrapper.vm.focus).toBeDefined()
        expect(wrapper.vm.isFocus).toBeFalsy()
        wrapper.vm.focus()
        expect(wrapper.vm.isFocus).toBeTruthy()
    })
    it('测试失焦事件', () => {
        const wrapper = mount(Input)
        expect(wrapper.vm.isFocus).toBeFalsy()
        wrapper.vm.focus()
        expect(wrapper.vm.isFocus).toBeTruthy()
        wrapper.find('input').trigger('blur')
        expect(wrapper.vm.isFocus).toBeFalsy()
    })
    it('测试输入更新函数调用', async () => {
        const mockUpdateFn = vi.fn()
        const wrapper = mount(Input, {
            props: {
                onInput: mockUpdateFn
            }
        })
        await wrapper.trigger('input')
        expect(mockUpdateFn).toHaveBeenCalled()
    })

    it('测试向上emits的事件(input事件)', () => {
        const myValue1 = '我的动态输入1'
        const wrapper = mount(Input)
        // 两次input观察传值
        wrapper.find('input').trigger('input', {
            detail: {
                value: myValue1
            }
        })
        // 使用空值合并运算符??避免可能的undefined造成语法错误
        const emittedHistory = wrapper.emitted('update:value') ?? []
        expect(emittedHistory[0][0]).toBe(myValue1)
    })
})