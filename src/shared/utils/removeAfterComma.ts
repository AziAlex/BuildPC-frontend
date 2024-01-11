export const removeAfterComma = (str: string) => {
  const commaIndex = str.indexOf(',')
  if (commaIndex !== -1) {
    return str.substring(0, commaIndex)
  }
  return str
}
