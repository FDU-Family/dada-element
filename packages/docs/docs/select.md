# Select

下拉框组件，用于选择单个选项。

## Props

| 属性名           | 类型              | 默认值        | 描述                                       |
|------------------|-------------------|---------------|--------------------------------------------|
| placeholder      | `string`          | `''`          | 下拉框的占位文本。                         |
| width            | `string`<br>`number` | `600`       | 下拉框的宽度（以像素或其他 CSS 单位表示）。|
| shadow           | `boolean`         | `false`       | 是否带有阴影。                             |
| border           | `boolean`         | `false`       | 是否带有边框。                             |
| type             | `'default'`<br>`'primary'` | `'default'` | 下拉框的类型。                             |
| size             | `'small'`<br>`'medium'`<br>`'large'` | `'medium'` | 下拉框的尺寸。                             |
| value            | `string`<br>`number` |             | 下拉框的选中值。                           |
| label            | `string`          |             | 下拉框的标签。                             |
| options          | `Array<optionsProp>` |             | 下拉框的选项列表。                         |

## 事件

| 事件名            | 参数类型           | 描述                                      |
|-------------------|--------------------|-------------------------------------------|
| update:value      | `string`<br>`number` | 选中值发生变化时触发。                       |

## 插槽

无。