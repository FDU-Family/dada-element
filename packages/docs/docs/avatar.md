# Avatar 组件

Avatar 组件用于显示用户的头像图像。

## Props

| 属性名       | 类型                                       | 默认值        | 描述                                        |
|--------------|--------------------------------------------|---------------|---------------------------------------------|
| src          | `string`                                   | `''`          | 头像 URL。                                  |
| size         | `'tiny' \| 'small' \| 'medium' \| 'large' \| 'huge'` | `'medium'`    | 头像尺寸。                                  |
| shape        | `'circle' \| 'square'`                     | `'circle'`    | 头像形状。                                  |
| mode         | `ImageMode`                                | `'aspectFill'`| 图片显示模式。                              |
| border       | `boolean`                                  | `false`       | 是否有头像边框。                            |
| shadow       | `'none' \| 'medium' \| 'large'`            | `'none'`      | 是否有阴影。                                |
| preview      | `boolean`                                  | `false`       | 是否能预览头像。                            |
| previewSrc   | `string`                                   | `''`          | 预览头像的 URL。                           |
| width        | `number \| string`                         | -             | 设置头像的宽度。                            |
