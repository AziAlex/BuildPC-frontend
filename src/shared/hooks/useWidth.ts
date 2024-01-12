import { useState, useEffect, MutableRefObject } from 'react'

function useWidth<T extends HTMLElement>(ref: MutableRefObject<T | null>) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth)
    }
  }, [ref])

  return width
}

export default useWidth
