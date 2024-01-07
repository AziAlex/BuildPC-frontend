export const clamp = (
  minSize: number,
  maxSize: number,
  mobileSize = 540,
  desktopSize = 1920,
): string => {
  const slope: number = (maxSize - minSize) / (desktopSize - mobileSize)
  const yAxisIntersection: number = -1 * mobileSize * slope + minSize
  const clampValue: string = `clamp(${minSize}px, ${yAxisIntersection}px + ${slope} * 100vw, ${maxSize}px)`
  return clampValue
}
