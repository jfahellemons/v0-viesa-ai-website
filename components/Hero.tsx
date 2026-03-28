'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#13293d]/85 via-[#16324f]/85 to-[#18435a]/95 -z-10" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance"
        >
          Transformeer uw bedrijf met VIESA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-8 text-balance leading-relaxed"
        >
          Expert AI-advies en implementatiediensten op maat voor bedrijven. Strategische begeleiding, technische uitmuntendheid en meetbare resultaten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="bg-[#2a628f] text-white hover:bg-[#3e92cc] px-6 sm:px-8 h-12 text-sm sm:text-base w-full sm:w-auto"
          >
            Gratis Adviesgesprek
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#13293d] px-6 sm:px-8 h-12 text-sm sm:text-base w-full sm:w-auto transition-colors"
          >
            Plan een AI-Audit
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
