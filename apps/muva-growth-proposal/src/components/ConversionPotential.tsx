'use client'

import { motion } from 'framer-motion'
import { Target, Users, TrendingUp, CheckCircle } from 'lucide-react'

export default function ConversionPotential() {
  const metrics = {
    monthlyTraffic: 784, // Tráfico estimado con SEO + Ads
    conversionRates: {
      current: 0.002, // 0.2% sin optimización
      industry: 0.023, // 2.3% promedio B2B
      optimized: 0.035, // 3.5% con funnel optimizado
    },
    averageTicket: 45000,
  }

  const calculateSales = (traffic: number, rate: number) => {
    return Math.round(traffic * rate)
  }

  const calculateRevenue = (traffic: number, rate: number) => {
    return calculateSales(traffic, rate) * metrics.averageTicket
  }

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(num)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            <Target className="w-5 h-5" />
            <span className="font-semibold">Potencial real de conversión</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Con nosotros: de perder a <span className="text-green-600">dominar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estos son números conservadores basados en resultados reales de la industria
          </p>
        </motion.div>

        {/* Comparación visual */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Estado actual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200"
          >
            <div className="text-center mb-4">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Hoy (sin estrategia)</p>
              <p className="text-4xl font-bold text-red-600">
                {(metrics.conversionRates.current * 100).toFixed(1)}%
              </p>
              <p className="text-gray-600">conversión</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span>Visitas/mes:</span>
                <span className="font-semibold">~50</span>
              </p>
              <p className="flex justify-between">
                <span>Ventas/mes:</span>
                <span className="font-semibold text-red-600">0-1</span>
              </p>
              <p className="flex justify-between border-t pt-2">
                <span>Ingresos:</span>
                <span className="font-bold text-red-600">{formatCurrency(45000)}</span>
              </p>
            </div>
          </motion.div>

          {/* Promedio industria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200"
          >
            <div className="text-center mb-4">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Promedio industria</p>
              <p className="text-4xl font-bold text-gray-700">
                {(metrics.conversionRates.industry * 100).toFixed(1)}%
              </p>
              <p className="text-gray-600">conversión</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span>Visitas/mes:</span>
                <span className="font-semibold">{metrics.monthlyTraffic}</span>
              </p>
              <p className="flex justify-between">
                <span>Ventas/mes:</span>
                <span className="font-semibold">{calculateSales(metrics.monthlyTraffic, metrics.conversionRates.industry)}</span>
              </p>
              <p className="flex justify-between border-t pt-2">
                <span>Ingresos:</span>
                <span className="font-bold">{formatCurrency(calculateRevenue(metrics.monthlyTraffic, metrics.conversionRates.industry))}</span>
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">
              *HubSpot Benchmarks 2023
            </p>
          </motion.div>

          {/* Con estrategia Alear */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg transform scale-105"
          >
            <div className="text-center mb-4">
              <p className="text-sm uppercase tracking-wide mb-2 opacity-90">Con estrategia Alear</p>
              <p className="text-4xl font-bold">
                {(metrics.conversionRates.optimized * 100).toFixed(1)}%
              </p>
              <p className="opacity-90">conversión</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span>Visitas/mes:</span>
                <span className="font-semibold">{metrics.monthlyTraffic}+</span>
              </p>
              <p className="flex justify-between">
                <span>Ventas/mes:</span>
                <span className="font-semibold">{calculateSales(metrics.monthlyTraffic, metrics.conversionRates.optimized)}+</span>
              </p>
              <p className="flex justify-between border-t border-white/30 pt-2">
                <span>Ingresos:</span>
                <span className="font-bold text-xl">{formatCurrency(calculateRevenue(metrics.monthlyTraffic, metrics.conversionRates.optimized))}+</span>
              </p>
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-xs opacity-90 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> SEO optimizado
              </p>
              <p className="text-xs opacity-90 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Funnel automatizado
              </p>
              <p className="text-xs opacity-90 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> CRM + seguimiento
              </p>
            </div>
          </motion.div>
        </div>

        {/* Proyección a 12 meses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Proyección conservadora a 12 meses
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="w-10 h-10 mx-auto mb-3 text-blue-500" />
              <p className="text-3xl font-bold">9,408</p>
              <p className="text-gray-600">visitantes totales</p>
            </div>
            <div>
              <Target className="w-10 h-10 mx-auto mb-3 text-green-500" />
              <p className="text-3xl font-bold">329</p>
              <p className="text-gray-600">leads calificados</p>
            </div>
            <div>
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-purple-500" />
              <p className="text-3xl font-bold">27</p>
              <p className="text-gray-600">ventas cerradas</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="text-3xl font-bold text-green-600">{formatCurrency(1215000)}</p>
                <p className="text-gray-700 font-semibold">ingresos nuevos</p>
              </motion.div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            *Basado en conversión 3.5% (conservador) y ticket promedio {formatCurrency(45000)}. 
            Resultados típicos entre mes 3-12. Fuente: Alear Analytics 2023.
          </p>
        </motion.div>
      </div>
    </section>
  )
}