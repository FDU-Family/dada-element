# Button 组件

按钮组件用于展示可点击的按钮元素。

## Props

| 属性名      | 类型                                       | 默认值    | 描述                           |
|-------------|--------------------------------------------|-----------|--------------------------------|
| type        | `'default' \| 'primary' \| 'secondary' \| 'warning' \| 'info'` | `'default'`| 按钮类型。                    |
| text        | `boolean`                                  | `false`   | 是否是文字按钮。               |
| size        | `'small' \| 'medium' \| 'large'`            | `'medium'`| 按钮的尺寸。                   |
| width       | `number \| string`                         | -         | 按钮的宽度，当设置 `block` 为 `true` 时不可用。 |
| circle      | `boolean`                                  | `false`   | 是否是圆形按钮。               |
| block       | `boolean`                                  | `false`   | 是否为块状元素。               |
| shadow      | `boolean`                                  | `false`   | 是否有阴影。                   |
| textColor   | `string`                                   | -         | 文字颜色。                     |

## Events

| 事件名     | 参数类型      | 描述                |
|------------|---------------|---------------------|
| click      | `TouchEvent`  | 按钮被点击时触发。   |

## 插槽

组件提供以下插槽：

- 默认插槽：用于放置按钮内容。
