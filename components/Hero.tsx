'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-card"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance"
        >
          Transform Your Business with AI
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed"
        >
          Expert AI consulting and implementation services tailored for Dutch enterprises. Strategic guidance, technical excellence, and measurable results.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:opacity-90 px-6 sm:px-8 h-12 text-sm sm:text-base w-full sm:w-auto"
          >
            Gratis Adviesgesprek
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 h-12 text-sm sm:text-base w-full sm:w-auto"
          >
            Plan een AI-Audit
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
