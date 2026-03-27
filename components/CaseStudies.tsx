'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function CaseStudies() {
  return (
    <motion.section 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Impact & Resultaten
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Echte resultaten van onze AI-implementaties
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { value: 45, prefix: '+', suffix: '%', label: 'Gemiddelde Efficiëntiewinst', decimals: 0 },
            { value: 2.3, prefix: '€', suffix: 'M', label: 'Kostenbesparing Gerealiseerd', decimals: 1 },
            { value: 92, prefix: '', suffix: '%', label: 'Tijdige Projectoplevering', decimals: 0 }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-8 bg-card rounded-lg border border-border"
            >
              <div className="text-[#173853] text-4xl md:text-5xl font-extrabold mb-3">
                <AnimatedCounter 
                  value={item.value} 
                  prefix={item.prefix} 
                  suffix={item.suffix} 
                  decimals={item.decimals} 
                />
              </div>
              <p className="text-muted-foreground font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              company: 'FinTech Bedrijf',
              challenge: 'Complexe documentverwerking',
              result: 'Verwerkingstijd met 80% gereduceerd door AI-gedreven documentanalyse'
            },
            {
              company: 'Productiebedrijf',
              challenge: 'Knelpunten in kwaliteitscontrole',
              result: 'Nauwkeurigheid van foutdetectie verbeterd naar 99,2% met computer vision'
            }
          ].map((study, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Card className="p-8 bg-card border border-border h-full">
                <h3 className="text-xl font-bold text-foreground mb-2">{study.company}</h3>
                <p className="text-sm text-accent mb-4">Uitdaging: {study.challenge}</p>
                <p className="text-foreground">{study.result}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
