# Input 组件

Input 组件用于接收用户的输入文本。

## Props

| 属性名           | 类型                                          | 默认值      | 描述                                       |
|------------------|-----------------------------------------------|-------------|--------------------------------------------|
| placeholder      | `string`                                      | -           | 输入框的占位文本。                         |
| width            | `string` \| `number`                          | -           | 输入框的宽度（以像素或其他 CSS 单位表示）。|
| shadow           | `boolean`                                     | `false`     | 是否带有阴影。                             |
| border           | `boolean`                                     | `false`     | 是否带有边框。                             |
| type             | `'default'` \| `'primary'`                    | `'default'` | 输入框的类型。                             |
| size             | `'small'` \| `'medium'` \| `'large'`           | `'medium'`  | 输入框的尺寸。                             |
| value            | `string`                                      | -           | 输入框的值。                               |
| label            | `string`                                      | -           | 输入框的标签。                             |
| password         | `boolean`                                     | `false`     | 是否是密码输入框。                         |
| maxlength        | `number`                                      | `140`       | 最大输入长度。                             |
| disabled         | `boolean`                                     | `false`     | 是否禁用输入框。                           |
| line             | `boolean`                                     | `false`     | 是否显示右侧的线。                         |
| block            | `boolean`                                     | `false`     | 是否为块状元素。                           |

## 插槽

- 默认插槽：输入框的内容。
- `prefix` 插槽：输入框前缀内容。
- `suffix` 插槽：输入框后缀内容。

## 事件

| 事件名           | 参数类型                                      | 描述                                       |
|------------------|-----------------------------------------------|--------------------------------------------|
| update:value     | `string`                                      | 输入框的值发生变化时触发。                   |

## 方法

| 方法名           | 参数类型                                      | 描述                                       |
|------------------|-----------------------------------------------|--------------------------------------------|
| focus()          | -                                             | 将输入框聚焦（暴露给父组件调用）。             |