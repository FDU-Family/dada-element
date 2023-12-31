const camelizeRE = /-(\w)/g
const fileMap: Record<string, string> = {
  '/': 'image/jpeg',
  'i': 'image/png',
  'R': 'image/gif',
  'Q': 'image/bmp',
  'U': 'image/webp',
  'P': 'image/svg+xml',
}
// 短横线转驼峰命名
export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

const pxToVwRE = /^(\d*\.?\d*)(?:px)?$/
/**
 * 在script中转化px与vw，默认将按照750px=100vw计算
 * @param value 可以是字符串`'123'`或者数字`123`，又或者是`'123px'`
 * @param option 转换选项
 * @param option.viewportWidth 视口大小，如果为N，则 `Npx=100vw`，默认为750
 * @returns 转换后的值：`12vw`
 */
export function pxToVw(value: string | number, option = { viewportWidth: 750 }): string {
  const macthes = String(value).match(pxToVwRE)
  if (macthes) {
    const _value = Number(macthes[1])
    return `${_value * 100 / option.viewportWidth}vw`
  }
  else {
    return '0vw'
  }
}

/**
 * 从Base64字符串中获取Mine Type信息
 * @param firstStr Base64字符串第一个字符
 */
export function formatBase64MineType(firstStr: string): string {
  return fileMap[firstStr]
}
