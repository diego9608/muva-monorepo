'use client'

import { motion } from 'framer-motion'
import { X, MapPin, MousePointer, Phone, Database } from 'lucide-react'

const painPoints = [
  {
    icon: MapPin,
    title: 'Invisibles = $900,000/mes perdidos',
    description: '67% de compradores B2B no consideran proveedores que no aparecen en las primeras 3 posiciones',
    stat: '*Forrester Research 2023',
  },
  {
    icon: MousePointer,
    title: 'Sin funnel = 18 ventas menos/mes',
    description: 'Empresas con funnel automatizado cierran 3x más rápido que las tradicionales',
    stat: '*Salesforce State of Sales 2023',
  },
  {
    icon: Phone,
    title: 'Método manual = 73% menos eficiencia',
    description: 'Mientras llaman a 10 clientes, la competencia digital ya cotizó a 100',
    stat: '*McKinsey B2B Pulse Survey 2023',
  },
  {
    icon: Database,
    title: 'Sin CRM = 23% de leads perdidos',
    description: 'Los leads no atendidos en 5 minutos pierden 80% de probabilidad de compra',
    stat: '*Harvard Business Review 2023',
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
            Cada día sin digitalizar = <span className="text-muva-red">$30,000 perdidos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Su competencia está comiendo de su plato. Aquí está la evidencia:
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
                  <h3 className="text-xl font-bold mb-2 text-muva-dark">{point.title}</h3>
                  <p className="text-gray-700 mb-2">{point.description}</p>
                  <p className="text-xs text-gray-500 italic">{point.stat}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}