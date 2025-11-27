import { useState, useEffect, useMemo, useCallback, useRef } from 'react'

type TitleTextProps = {
  className?: string
}

// Move constants outside component to avoid recreation on every render
const FINAL_TEXT = 'Design Engineer & GTM'
const GLITCH_CHARS = 'KsaddfsA@#$@#esdQWEZXCl;skjdskdm;f#$@V'
const MAX_ITERATIONS = 30 // Reduced for faster animation
const INTERVAL_MS = 25 // Reduced for faster flicker

export default function TitleText({ className = '' }: TitleTextProps) {
  const [text, setText] = useState('')
  const iterationRef = useRef(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Memoize the random text generator function
  const generateRandomText = useCallback(() => {
    return FINAL_TEXT
      .split('')
      .map(() => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
      .join('')
  }, [])

  // Memoize the animation step function
  const animateStep = useCallback(() => {
    iterationRef.current++
    
    if (iterationRef.current < MAX_ITERATIONS) {
      // Generate random characters matching the length of final text
      setText(generateRandomText())
    } else {
      // Reveal the final text
      setText(FINAL_TEXT)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [generateRandomText])

  useEffect(() => {
    // Reset everything on mount
    iterationRef.current = 0
    setText('') // Reset text to start fresh
    
    // Start with first glitch immediately for instant feedback
    setText(generateRandomText())

    // Start the glitch animation
    intervalRef.current = setInterval(animateStep, INTERVAL_MS)

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [animateStep, generateRandomText]) // Both are memoized, so this only runs on mount

  // Memoize the className string to avoid recalculation
  const containerClassName = useMemo(() => `
    absolute
    font-mono
    text-white/60
    pointer-events-none
    z-[101]
    ${className}
  `, [className])

  return (
    <div className={containerClassName}>
      {text}
    </div>
  )
}

