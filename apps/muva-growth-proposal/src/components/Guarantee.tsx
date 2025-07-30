'use client'

import { motion } from 'framer-motion'
import { Shield, Lock } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-muva-red/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-muva-red/10 p-6 rounded-full"
                >
                  <Shield className="w-12 h-12 text-muva-red" />
                </motion.div>
              </div>

              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-center mb-8"
              >
                <Lock className="inline-block w-10 h-10 mr-3 text-muva-red" />
                Garantía Alear
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-muva-red to-red-700 text-white p-8 rounded-2xl mb-6"
              >
                <p className="text-xl md:text-2xl font-semibold text-center leading-relaxed">
                  Si no duplicamos su inversión en 90 días, 
                  <br className="hidden md:block" />
                  seguimos trabajando sin costo hasta lograrlo.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-500 text-center italic"
              >
                *Sujeto a implementación completa de estrategia y presupuesto mínimo en Ads.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}