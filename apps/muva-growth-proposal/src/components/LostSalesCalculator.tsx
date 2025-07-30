'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Calculator, Clock, DollarSign } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LostSalesCalculator() {
  const [currentLoss, setCurrentLoss] = useState(0)
  
  // Datos basados en estudios reales
  const stats = {
    monthlySearches: 2800, // Búsquedas mensuales promedio "puertas mayoreo" + variantes
    clickThroughRate: 0.28, // CTR promedio posición 1 Google (28%)
    currentCTR: 0.002, // CTR sin estar en primera página (0.2%)
    conversionRate: 0.023, // Tasa conversión B2B industrial (2.3%)
    averageOrderValue: 45000, // Valor promedio pedido B2B puertas/molduras
  }

  const monthlyLostClicks = stats.monthlySearches * (stats.clickThroughRate - stats.currentCTR)
  const monthlyLostSales = monthlyLostClicks * stats.conversionRate
  const monthlyLostRevenue = monthlyLostSales * stats.averageOrderValue

  // Animación contador
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLoss(prev => {
        const increment = monthlyLostRevenue / (30 * 24 * 60 * 60) // Por segundo
        return prev + increment
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [monthlyLostRevenue])

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">Pérdidas en tiempo real</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Mientras lee esto, MUVA está perdiendo...
          </h2>
        </motion.div>

        {/* Contador en tiempo real */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-center"
        >
          <Clock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600 mb-4">Pérdidas acumuladas desde que abrió esta página:</p>
          <p className="text-5xl md:text-7xl font-bold text-red-600">
            {formatCurrency(currentLoss)}
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *Basado en {formatCurrency(monthlyLostRevenue)}/mes en ventas perdidas
          </p>
        </motion.div>

        {/* Desglose de pérdidas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <TrendingDown className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{Math.round(monthlyLostClicks)}</h3>
            <p className="text-gray-600">Clientes potenciales perdidos/mes</p>
            <p className="text-xs text-gray-500 mt-2">
              *{stats.monthlySearches} búsquedas × {(stats.clickThroughRate * 100).toFixed(1)}% CTR posición #1
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Calculator className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{Math.round(monthlyLostSales)}</h3>
            <p className="text-gray-600">Ventas perdidas/mes</p>
            <p className="text-xs text-gray-500 mt-2">
              *Conversión B2B promedio: {(stats.conversionRate * 100).toFixed(1)}%
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl shadow-lg"
          >
            <DollarSign className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{formatCurrency(monthlyLostRevenue)}</h3>
            <p>Ingresos perdidos/mes</p>
            <p className="text-xs mt-2 opacity-90">
              *Ticket promedio B2B: {formatCurrency(stats.averageOrderValue)}
            </p>
          </motion.div>
        </div>

        {/* Comparación con competencia */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6">
            Mientras tanto, su competencia con presencia digital...
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                <span className="text-green-400 font-bold">✓ Captura 28%</span> del tráfico de búsqueda
              </p>
              <p className="text-lg mb-4">
                <span className="text-green-400 font-bold">✓ Convierte 2.3%</span> en clientes reales
              </p>
              <p className="text-lg">
                <span className="text-green-400 font-bold">✓ Factura {formatCurrency(monthlyLostRevenue)}</span> extra al mes
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <p className="text-3xl font-bold text-green-400 mb-2">
                {formatCurrency(monthlyLostRevenue * 12)}
              </p>
              <p className="text-lg">
                Lo que MUVA regala a la competencia cada año
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fuentes */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            *Fuentes: Advanced Web Ranking CTR Study 2023 | HubSpot B2B Conversion Benchmarks 2023 | 
            Google Keyword Planner | Promedio industria construcción/manufactura México
          </p>
        </div>
      </div>
    </section>
  )
}