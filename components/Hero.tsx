'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
}

export function Hero({ 
  title = "Expert AI-advies", 
  subtitle = "Expert AI-advies en implementatiediensten op maat voor bedrijven. Strategische begeleiding, technische uitmuntendheid en meetbare resultaten.",
  primaryButtonText = "Gratis Adviesgesprek",
  secondaryButtonText = "Plan een AI-Audit",
  backgroundImage 
}: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#19435a]/80 backdrop-blur-[1px] z-0" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance drop-shadow-2xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/95 mb-8 text-balance leading-relaxed drop-shadow-lg"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          {primaryButtonText && (
            <Button
              size="lg"
              className="bg-[#2a628f] text-white hover:bg-[#3e92cc] px-6 sm:px-8 h-12 text-sm sm:text-base w-full sm:w-auto"
            >
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && (
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#13293d] px-6 sm:px-8 h-12 text-sm sm:text-base w-full sm:w-auto transition-colors"
            >
              {secondaryButtonText}
            </Button>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}

