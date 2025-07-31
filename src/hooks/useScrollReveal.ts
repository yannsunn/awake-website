'use client'

import { useEffect } from 'react'

export const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    
    const handleScroll = () => {
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const elementTop = reveal.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active')
        }
      })
    }
    
    // 初期チェック
    handleScroll()
    
    // スクロールイベントリスナー
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}