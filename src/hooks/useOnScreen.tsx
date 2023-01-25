import React from 'react'

function useOnScreen<T extends Element>(
  ref: React.MutableRefObject<T>,
  rootMargin: string = '0px',
): boolean {
  const [isIntersecting, setIntersecting] = React.useState<boolean>(false)
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(ref.current ?? null)
    }
  }, [ref, rootMargin]) // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting
}

export default useOnScreen
