export const pxToRem = (pxValue: number, baseFontSize = 14) => {
  return `${pxValue / baseFontSize}rem`
}
