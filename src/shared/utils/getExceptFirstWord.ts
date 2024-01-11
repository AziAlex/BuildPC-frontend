export const getExceptFirstWord = (str: string) => {
  const words = str.split(' ')
  words.shift()
  return words.join(' ').replace(/;/g, '')
}
