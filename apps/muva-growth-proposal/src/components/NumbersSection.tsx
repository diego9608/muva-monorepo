'use client'

import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { roiData } from '@/data/roi'

export default function NumbersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Los números que nadie está viendo
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <TrendingDown className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">La realidad actual</h3>
            <div className="space-y-3">
              <p className="text-lg">
                Solo el <span className="font-bold text-muva-red">{roiData.stats.b2bLatamAutomation}%</span> de empresas B2B industriales en LATAM usan embudos automatizados de marketing digital.
              </p>
              <p className="text-gray-600">
                Las empresas que siguen con métodos tradicionales están perdiendo oportunidades cada día.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muva-red text-white p-8 rounded-2xl"
          >
            <TrendingUp className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">El potencial de MUVA</h3>
            <div className="space-y-3">
              <p className="text-lg">
                <span className="font-bold text-2xl">+{roiData.stats.averageSalesIncrease}%</span> de ventas en promedio en el primer año.
              </p>
              <p className="text-lg">
                Potencial de cerrar <span className="font-bold">{roiData.stats.newB2BClients} nuevos clientes B2B</span> en 12 meses con presencia optimizada en Google y seguimiento automatizado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}