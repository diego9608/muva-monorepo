'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero({ onScrollToNext }: { onScrollToNext: () => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-muva-gray/90" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-muva-red/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Están vendiendo millones en madera y puertas, pero no están generando leads como deberían.
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-gradient">MUVA podría estar ganando 4 veces más</span>
            <br />
            con el mismo equipo y la misma operación.
          </h1>
          
          <motion.button
            onClick={onScrollToNext}
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver cómo hacerlo
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}