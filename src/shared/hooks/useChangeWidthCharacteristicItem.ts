import { useState, useLayoutEffect, MutableRefObject } from 'react'

function useChangeWidthCharacteristicItem<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
) {
  const [maxWidth, setMaxWidth] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) {
      console.error('No ref provided')
      return
    }

    const paragraphs = Array.from(ref.current.querySelectorAll('p:last-child'))
    const images = Array.from(ref.current.querySelectorAll('img'))
    const elements = [
      ...(paragraphs as HTMLImageElement[]),
      ...(images as HTMLImageElement[]),
    ]

    const maxWidth = Math.max(
      ...elements.map((el) => el.getBoundingClientRect().width),
    )

    elements.forEach((el) => {
      el.style.width = `${maxWidth}px`
      el.style.objectFit = 'contain'
    })

    setMaxWidth(maxWidth)
  }, [ref])

  return maxWidth
}

export default useChangeWidthCharacteristicItem
