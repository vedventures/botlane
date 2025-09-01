'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

const TypingEffect = ({ 
  phrases, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000,
  className = ""
}: TypingEffectProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Function to apply gradient only to middle word
  const formatTextWithGradient = (text: string) => {
    const words = text.split(' ')
    if (words.length === 0) return text
    
    const middleIndex = Math.floor(words.length / 2)
    
    return words.map((word, index) => {
      if (index === middleIndex) {
        return `<span class="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">${word}</span>`
      }
      return `<span class="text-white">${word}</span>`
    }).join(' ')
  }


  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    const currentPhrase = phrases[currentPhraseIndex]
    
    if (!isDeleting && currentText === currentPhrase) {
      setIsPaused(true)
      return
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1))
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1))
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span 
      className={className}
      dangerouslySetInnerHTML={{ 
        __html: formatTextWithGradient(currentText) + '<span class="animate-pulse">|</span>' 
      }}
    />
  )
}

export default TypingEffect
