'use client'

import { motion } from 'framer-motion'
import { Globe, Bot, BarChart3, Megaphone, RefreshCw } from 'lucide-react'

const solutions = [
  {
    icon: Globe,
    title: 'Página web de ventas profesional 24/7',
    description: 'Posicionada en Google para captar clientes mientras duermen',
  },
  {
    icon: Bot,
    title: 'Funnel automatizado',
    description: 'WhatsApp, email y cotización directa sin intervención manual',
  },
  {
    icon: BarChart3,
    title: 'Dashboard de métricas',
    description: 'Leads, conversiones y ventas en tiempo real',
  },
  {
    icon: Megaphone,
    title: 'Campañas de tráfico mensual',
    description: '3 segmentos clave: constructores, distribuidores y exportadores',
  },
  {
    icon: RefreshCw,
    title: 'Retargeting inteligente',
    description: 'Recuperar clientes que no cerraron en la primera visita',
  },
]

export default function Proposal() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Qué proponemos hacer?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un sistema completo de generación y cierre de ventas automatizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-muva-red transition-all duration-300 h-full">
                <div className="bg-muva-red/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-muva-red transition-colors">
                  <solution.icon className="w-8 h-8 text-muva-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}