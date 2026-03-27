'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function AuditCTA() {
  return (
    <motion.section 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      className="py-20 px-4 bg-card"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance"
        >
          Ready to Discover Your AI Potential?
        </motion.h2>
        
        <motion.p 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed"
        >
          Schedule a free AI audit to understand where and how AI can drive the most value for your organization. No commitment required.
        </motion.p>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:opacity-90 px-10 h-12 text-base"
          >
            Ontdek onze diensten
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
