import { useState, useEffect } from 'react'

const TypeWriter = ({ text, speed = 50, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed, started])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <span>
      {displayText}
      <span 
        className={`typewriter-cursor ${showCursor ? 'visible' : 'hidden'}`}
        style={{
          opacity: showCursor ? 1 : 0,
          color: 'var(--primary-color)',
          fontWeight: 'bold'
        }}
      >
        |
      </span>
    </span>
  )
}

export default TypeWriter