'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
  enableSound?: boolean
}

const TypingEffect = ({ 
  phrases, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000,
  className = "",
  enableSound = false
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

  // Create typing sound effect
  const playTypingSound = () => {
    if (!enableSound) return
    
    try {
      // Create a simple beep sound using Web Audio API
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    } catch (error) {
      // Fallback for browsers that don't support Web Audio API
      console.log('Audio not supported')
    }
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
        playTypingSound()
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration, enableSound])

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
