'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const services = [
  {
    title: 'AI-Strategie & Planning',
    description: 'Ontwikkel een uitgebreide AI-roadmap afgestemd op uw zakelijke doelen. Wij beoordelen uw huidige capaciteiten en identificeren AI-kansen met hoge impact.'
  },
  {
    title: 'Technische Implementatie',
    description: 'Bouw en implementeer AI-oplossingen die naadloos integreren met uw bestaande systemen. Van LLM\'s tot computer vision, wij hebben de expertise.'
  },
  {
    title: 'Teamtraining & Ondersteuning',
    description: 'Geef uw team de kennis en vaardigheden om AI effectief in te zetten. Doorlopende ondersteuning garandeert langdurig succes.'
  }
]

export function Services() {
  return (
    <motion.section 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      className="py-20 px-4 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Onze Diensten
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uitgebreide AI-oplossingen ontworpen om uw digitale transformatie te versnellen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full p-8 bg-background border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent-foreground">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-balance">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
