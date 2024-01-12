import { useEffect, useRef } from 'react'

export const useChangeWidthCharacteristicItem = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const paragraphs = ref.current.querySelectorAll(
      'p:last-child',
    ) as NodeListOf<HTMLParagraphElement>
    const images = ref.current.querySelectorAll('img')
    const elements = [...paragraphs, ...images]

    const maxWidth = Math.max(...elements.map((el) => el.getBoundingClientRect().width))

    elements.forEach((el) => {
      el.style.width = `${maxWidth}px`
    })
  }, [ref])

  return ref
}
