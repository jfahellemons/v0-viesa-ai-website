'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export interface AboutProps {
  title?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  statistics?: { label: string; value: number; suffix?: string }[];
}

export function About({
  title = "Waarom Kiezen Voor Ons AI-Advies?",
  paragraphs = [
    "Wij combineren diepgaande technische expertise met zakelijk inzicht om AI-oplossingen te leveren die zorgen voor echte ROI. Ons team heeft jarenlange ervaring in het begeleiden van Nederlandse organisaties bij de adoptie van AI.",
    "Van strategie tot implementatie, wij begeleiden u bij elke stap en zorgen ervoor dat uw AI-initiatieven aansluiten bij uw bedrijfsdoelstellingen."
  ],
  bulletPoints = [
    'Strategische AI-planning',
    'Technische implementatie',
    'Teamtraining & ondersteuning',
    'Meetbare bedrijfsresultaten'
  ],
  statistics = [
    { label: 'Bedrijven Geholpen', value: 150, suffix: '+' },
    { label: 'Jaren Ervaring', value: 12, suffix: '+' },
    { label: 'Succesvolle Projecten', value: 500, suffix: '+' },
    { label: 'Klanttevredenheid', value: 98, suffix: '%' }
  ]
}: AboutProps) {
  return (
    <motion.section 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      className="py-20 px-4 bg-[#e4edf8]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              {title}
            </h2>
            
            {paragraphs?.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <ul className="space-y-3">
              {bulletPoints?.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-card rounded-lg p-8 shadow-lg"
          >
            <div className="space-y-6">
              {statistics?.map((stat, i) => (
                <div key={i}>
                  <p className="text-[#173853] font-semibold text-3xl md:text-4xl mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
                  </p>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

