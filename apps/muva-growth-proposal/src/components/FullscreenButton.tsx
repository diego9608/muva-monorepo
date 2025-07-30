'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Maximize, Minimize } from 'lucide-react'

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    } else {
      await document.exitFullscreen()
    }
  }

  return (
    <motion.button
      onClick={toggleFullscreen}
      className="fixed bottom-8 right-8 z-50 bg-muva-red text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      title={isFullscreen ? 'Salir de pantalla completa' : 'Ver en pantalla completa'}
    >
      {isFullscreen ? (
        <Minimize className="w-6 h-6" />
      ) : (
        <Maximize className="w-6 h-6" />
      )}
    </motion.button>
  )
}