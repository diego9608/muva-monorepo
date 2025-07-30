'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Globe2, 
  Camera, 
  Target, 
  MessageSquare, 
  Share2,
  TrendingUp
} from 'lucide-react'

const strategies = [
  {
    title: 'Identidad de Marca Premium',
    description: 'Diseño profesional que transmite confianza y calidad',
    impact: 'Confianza',
    icon: Palette,
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Ecosistema Digital',
    description: 'Sitio web optimizado + Google My Business + SEO',
    impact: 'Visibilidad',
    icon: Globe2,
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Fotografía y Video',
    description: 'Contenido visual profesional de sus productos',
    impact: 'Conversión',
    icon: Camera,
    color: 'from-pink-500/20 to-pink-600/20',
    borderColor: 'border-pink-500',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Google Ads',
    description: 'Campañas segmentadas para compradores B2B',
    impact: 'Tráfico',
    icon: Target,
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500',
    iconColor: 'text-green-600',
  },
  {
    title: 'WhatsApp Business',
    description: 'Automatización de cotizaciones y seguimiento',
    impact: 'Cierre',
    icon: MessageSquare,
    color: 'from-emerald-500/20 to-emerald-600/20',
    borderColor: 'border-emerald-500',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Social Media',
    description: 'Presencia estratégica en LinkedIn y Facebook',
    impact: 'Alcance',
    icon: Share2,
    color: 'from-indigo-500/20 to-indigo-600/20',
    borderColor: 'border-indigo-500',
    iconColor: 'text-indigo-600',
  },
]

export default function StrategyBreakdown() {
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
            Cada servicio = ROI directo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una estrategia completa donde cada elemento suma para multiplicar sus ventas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`h-full bg-gradient-to-br ${strategy.color} rounded-2xl p-[1px] transition-all duration-300 group-hover:scale-105`}>
                <div className="bg-white rounded-2xl p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${strategy.color}`}>
                      <strategy.icon className={`w-6 h-6 ${strategy.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{strategy.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <TrendingUp className="w-4 h-4 text-muva-red" />
                    <span className="text-muva-red font-semibold">{strategy.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-muva-red/10 px-6 py-3 rounded-full">
            <span className="text-lg font-semibold text-muva-red">
              6 servicios integrados = ROI 4.1x garantizado
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}