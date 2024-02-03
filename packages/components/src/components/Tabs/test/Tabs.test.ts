import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import Tabs from '../Tabs.vue'

const defaultProps = {
  border: true,
  dotted: false,
  size: 'medium',
  tabsOptions: undefined,
  timeFunction: 'default',
  type: 'primary',
  value: undefined,
}
const options = [
  {
    lable: '活动信息',
    key: 'activity',
  },
  {
    lable: '队伍信息',
    key: 'team',
  },
  {
    lable: '评论（10）',
    key: 'comment',
    slotName: 'comment',

  },
]
describe('tabs.vue', () => {
  it('测试Tabs组件引入是否成功', () => {
    expect(Tabs).toBeTruthy()
  })
  it('测试默认参数是否正确', () => {
    const wrapper = mount(Tabs)
    expect(wrapper.props()).toStrictEqual(defaultProps)
  })
  it('测试change事件且value无值', () => {
    const wrapper = mount(Tabs)
    wrapper.find('swiper').trigger('change', {
      detail: {
        current: 0,
      },
    })
    const emittedValue = wrapper.emitted('update:value') ?? []
    const emittedChange = wrapper.emitted('change') ?? []
    expect(emittedChange[0][0]).toHaveProperty('detail')
    expect(emittedValue[0][0]).toBe(0)
  })
  it('测试change事件且参数value有值', () => {
    const wrapper = mount(Tabs, {
      props: {
        value: 'test',
      },
    })
    wrapper.find('swiper').trigger('change', {
      detail: {
        current: 0,
      },
    })
    const emittedValue = wrapper.emitted('update:value') ?? []
    expect(emittedValue[0][0]).toBe('0')
  })
  it('测试click事件', async () => {
    const wrapper = mount(Tabs, {
      props: {
        tabsOptions: options,
      },
    })
    const tabs = wrapper.findAll('.__dd-tabs-label')
    expect(tabs.length).toBe(3)
    tabs[0].trigger('click')
    const emittedClick = wrapper.emitted('update:value') ?? []
    expect(emittedClick[0][0]).toBe(0)
    wrapper.setProps({
      value: 'test',
    })
    await nextTick()
    const valueTabs = wrapper.findAll('.__dd-tabs-label')
    expect(valueTabs.length).toBe(3)
    valueTabs[0].trigger('click')
    const emittedClickHis = wrapper.emitted('update:value') ?? []
    expect(emittedClickHis[1][0]).toBe('0')
  })
})
