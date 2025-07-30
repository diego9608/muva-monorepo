'use client'

import { motion } from 'framer-motion'

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-muva-red/10 to-orange-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-muva-red/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-20 h-20"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-2 border-muva-red/5 rounded-lg transform rotate-45" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-[15%] w-16 h-16"
        animate={{
          y: [20, -20, 20],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-2 border-gray-200/20 rounded-full" />
      </motion.div>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(227, 30, 36, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(227, 30, 36, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Dynamic dots pattern */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-[800px] h-[800px]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(227, 30, 36, 0.3) 2px, transparent 2px)',
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      {/* Gradient lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(227, 30, 36, 0.1)" />
            <stop offset="50%" stopColor="rgba(227, 30, 36, 0.05)" />
            <stop offset="100%" stopColor="rgba(227, 30, 36, 0)" />
          </linearGradient>
        </defs>
        
        <motion.line
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      </svg>
    </div>
  )
}