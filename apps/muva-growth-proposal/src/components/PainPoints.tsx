'use client'

import { motion } from 'framer-motion'
import { X, MapPin, MousePointer, Phone, Database } from 'lucide-react'

const painPoints = [
  {
    icon: MapPin,
    title: 'Invisibles en Google Maps',
    description: 'No aparecen en Google Maps en zonas clave o están mal indexados',
  },
  {
    icon: MousePointer,
    title: 'Sin funnel digital',
    description: 'No existe un funnel digital que convierta visitas en cotizaciones',
  },
  {
    icon: Phone,
    title: 'Ventas manuales',
    description: 'Sus vendedores dependen de llamadas manuales o referencias',
  },
  {
    icon: Database,
    title: 'Sin CRM activo',
    description: 'No hay un CRM activo en tiempo real para inbound sales',
  },
]

export default function PainPoints() {
  return (
    <section className="section-padding bg-muva-gray">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Por qué MUVA está perdiendo dinero?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El que no se digitaliza, ya perdió. Pero el que lo hace bien… gana solo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <X className="w-6 h-6 text-muva-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}