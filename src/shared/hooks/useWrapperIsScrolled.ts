import { useEffect, useRef, useState } from 'react'

export const useWrapperIsScrolled = <T extends HTMLElement>() => {
  const [isScroll, setIsScroll] = useState(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (element.scrollHeight > element.clientHeight) {
      setIsScroll(true)
    }
  }, [isScroll])

  return { ref, isScroll }
}
