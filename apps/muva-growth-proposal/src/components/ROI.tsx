'use client'

import { motion } from 'framer-motion'
import { DollarSign, Calendar, TrendingUp } from 'lucide-react'
import { roiData } from '@/data/roi'

export default function ROI() {
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(num)
  }

  return (
    <section className="section-padding bg-muva-dark text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Cuánto cuesta y qué me devuelve?
          </h2>
          <p className="text-2xl text-gray-300">
            Invertir {formatCurrency(roiData.investment)} es poco para facturar {formatCurrency(roiData.estimatedReturn)} más este año
          </p>
          <p className="text-sm text-gray-400 italic mt-4">
            *ROI basado en métricas reales de clientes B2B industriales (McKinsey & Company, 2023)
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-muva-red" />
                <p className="text-sm uppercase tracking-wider mb-2">Inversión</p>
                <p className="text-3xl font-bold">{formatCurrency(roiData.investment)}</p>
              </div>
              <div>
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <p className="text-sm uppercase tracking-wider mb-2">Retorno estimado</p>
                <p className="text-3xl font-bold text-green-400">{formatCurrency(roiData.estimatedReturn)}</p>
              </div>
              <div>
                <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <p className="text-sm uppercase tracking-wider mb-2">ROI</p>
                <p className="text-3xl font-bold text-blue-400">{roiData.roiMultiplier}x</p>
                <p className="text-xs text-gray-400 mt-1">en 12 meses</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-center">Cronograma de resultados</h3>
            {roiData.timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div>
                    <p className="text-muva-red font-bold">{phase.phase}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg">{phase.result}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{phase.time}</p>
                    <p className="font-bold">{phase.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}