'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const expertise = [
  'Experto en funnels de alta conversión',
  'Especialista en ads para B2B industrial',
  'Automatización de procesos de venta',
  'Entiendo el lenguaje de fábrica y la urgencia de resultados',
]

export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            ¿Quién está detrás?
          </h2>
          
          <div className="bg-muva-gray p-8 rounded-2xl mb-8">
            <p className="text-xl mb-6">
              "Soy Diego. No te ofrezco likes ni diseño bonito. 
              Te ofrezco <span className="font-bold text-muva-red">ventas reales</span>, 
              con estrategia digital aplicada a tu negocio de fábrica, madera y puertas."
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-muva-red flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}