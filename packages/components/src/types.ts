export type tabsOptionsType = Array<{
  lable: string
  key: string
  slotName?: string
}>

export type switcherOptionsType = Array<{
  label: string
  key: string
  checked?: boolean
}>

export type ImageMode = 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
