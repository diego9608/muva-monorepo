'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageCircle } from 'lucide-react'

export default function CTA() {
  const handleCalendly = () => {
    window.open('https://calendly.com/tu-usuario', '_blank')
  }

  const handleWhatsApp = () => {
    const phoneNumber = '521234567890' // Reemplaza con tu número
    const message = encodeURIComponent('Hola Diego, me interesa la propuesta de crecimiento digital para MUVA')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleCalendly}
              className="bg-white text-muva-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Agendar una llamada
            </motion.button>

            <motion.button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}