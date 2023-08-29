# Tabs

标签切换组件，用于在不同标签页之间切换内容。

## Props

| 属性名             | 类型                    | 默认值           | 描述                                                   |
|--------------------|-------------------------|------------------|--------------------------------------------------------|
| type               | `'primary'`<br>`'secondary'` | `'primary'`      | 标签的类型。                                            |
| size               | `'small'`<br>`'medium'`<br>`'large'` | `'medium'`       | 标签的尺寸。                                            |
| value              | `number`<br>`string`     |                  | 当前选中的标签值。                                       |
| dotted             | `boolean`                | `false`          | 是否显示点状标记。                                       |
| border             | `boolean`                | `true`           | 是否带有边框。                                          |
| tabsOptions        | `tabsOptionsType`        |                  | 标签选项配置。`tabsOptionsType` 是一个自定义类型，表示标签选项配置。 |
| timeFunction       | `'default'`<br>`'linear'`<br>`'easeInCubic'`<br>`'easeOutCubic'`<br>`'easeInOutCubic'` | `'default'`       | 时间函数，用于标签切换的动画。                                |

## 事件

| 事件名            | 参数类型              | 描述                                        |
|-------------------|-----------------------|---------------------------------------------|
| update:value      | `number`<br>`string` | 当选中的标签值发生变化时触发。                     |
| change            | `SwiperOnChangeEvent` | 当标签切换时触发。                              |

## 插槽

- 使用`v-slot`指令将内容分发到标签页中。每个标签页的插槽名称应与`tabsOptions`中的`slotName`属性匹配。
