'use client'

import { motion } from 'framer-motion'
import { 
  Rocket, 
  TrendingUp, 
  MessageCircle, 
  BarChart3, 
  Target,
  CheckCircle
} from 'lucide-react'

const timelineEvents = [
  {
    week: 'Semana 1',
    title: 'Sitio y marca activos',
    description: 'Presencia digital profesional lista para recibir clientes',
    icon: Rocket,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    week: 'Semana 2',
    title: 'Ads corriendo + leads iniciales',
    description: 'Primeras campañas activas generando tráfico cualificado',
    icon: Target,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    week: 'Semana 3-4',
    title: 'WhatsApp + primeros cierres',
    description: 'Automatización funcionando, cotizaciones y ventas iniciales',
    icon: MessageCircle,
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    week: 'Semana 8',
    title: 'Reportes + nuevos segmentos',
    description: 'Análisis de datos y expansión a nuevos mercados',
    icon: BarChart3,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    week: 'Semana 12',
    title: 'ROI x2 alcanzado',
    description: 'Inversión duplicada, sistema optimizado y escalable',
    icon: TrendingUp,
    iconColor: 'text-muva-red',
    bgColor: 'bg-red-100',
    highlight: true,
  },
]

export default function ROITimeline() {
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
            De cero a ROI 2x en 12 semanas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un camino claro y medible hacia el retorno de su inversión
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Línea vertical conectora */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`inline-block ${event.highlight ? 'transform scale-105' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`bg-white rounded-2xl p-6 shadow-lg ${
                        event.highlight ? 'ring-2 ring-muva-red ring-offset-2' : ''
                      }`}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <div className={`${event.bgColor} p-3 rounded-xl`}>
                          <event.icon className={`w-6 h-6 ${event.iconColor}`} />
                        </div>
                        <span className="text-sm font-semibold text-gray-500">{event.week}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Punto central */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`w-4 h-4 rounded-full ${
                      event.highlight 
                        ? 'w-6 h-6 bg-muva-red ring-4 ring-red-100' 
                        : 'bg-gray-400'
                    }`}
                  />
                </div>

                {/* Espaciador para el otro lado */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Mensaje final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-muva-red to-red-700 text-white px-8 py-4 rounded-full shadow-lg">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                Resultados medibles desde la primera semana
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}