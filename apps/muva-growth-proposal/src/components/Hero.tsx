'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero({ onScrollToNext }: { onScrollToNext: () => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-muva-gray">
      <div className="container text-center">
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