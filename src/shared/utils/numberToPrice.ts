export const numberToPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumSignificantDigits: 3,
  }).format(price)
}
