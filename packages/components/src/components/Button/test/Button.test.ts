import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Button from '../Button.vue'

describe('Button.vue', () => {
  test('测试组件正确引入', async () => {
    expect(Button).toBeTruthy()
  })
  test('测试点击事件', async () => {
    const clickFnMock = vi.fn()
    const wrapper = mount(Button, {
      props: {
        onClick: clickFnMock,
      },
    })
    await wrapper.trigger('click')

    expect(clickFnMock).toHaveBeenCalled()
  })
  test('测试属性', async () => {
    const typeWrapper = mount(Button)
    expect(typeWrapper.vm.$props.type).toBe('default')
    // 更改类名后要修改
    expect(typeWrapper.classes()).toContain('__dd-button-type-default')

    const typeList = ['default', 'primary', 'secondary', 'warning', 'info']
    for (let i = 0; i < typeList.length; i++) {
      await typeWrapper.setProps({ type: typeList[i] })
      expect(typeWrapper.classes()).toContain(`__dd-button-type-${typeList[i]}`)
    }

    await typeWrapper.setProps({ type: 'primary' })

    const widthWrapper = mount(Button)
    expect(widthWrapper.vm.$props.width).toBe(undefined)
    await widthWrapper.setProps({ width: 100 })
    expect(widthWrapper.vm.$props.width).toBe(100)
    // 次数测试根结点的width，如果更改宽度的位置要重新编写
    expect(widthWrapper.element.style.width).toBe(`${100 / 7.5}vw`)
  })
})
