import { useEffect, useState } from 'react'

export default function useControls() {
  const [direction, setDirection] = useState()

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setDirection('up')
          break
        case 'ArrowDown':
          setDirection('down')
          break
        case 'ArrowLeft':
          setDirection('left')
          break
        case 'ArrowRight':
          setDirection('right')
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return direction
}
