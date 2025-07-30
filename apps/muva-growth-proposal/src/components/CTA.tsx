'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-muva-red to-red-800 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Y si esto fuera el cambio que esperaban?
          </h2>
          <p className="text-xl mb-12 text-gray-100">
            No dejes que tu competencia te adelante. 
            El momento de digitalizar tu proceso de ventas es ahora.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full"
          >
            <Sparkles className="w-6 h-6" />
            <span className="text-lg font-semibold">
              Hagamos que MUVA domine su mercado
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}