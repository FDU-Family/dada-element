const camelizeRE = /-(\w)/g

// 短横线转驼峰命名
export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}
