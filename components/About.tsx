'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.section 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      className="py-20 px-4 bg-background"
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
              Why Choose Our AI Consulting?
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We combine deep technical expertise with business acumen to deliver AI solutions that drive real ROI. Our team has years of experience helping Dutch organizations navigate AI adoption with confidence.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              From strategy to implementation, we guide you every step of the way, ensuring your AI initiatives align with your business goals.
            </p>
            <ul className="space-y-3">
              {[
                'Strategic AI planning',
                'Technical implementation',
                'Team training & support',
                'Measurable business outcomes'
              ].map((item, i) => (
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
              {[
                { label: 'Companies Served', value: '150+' },
                { label: 'Years Experience', value: '12+' },
                { label: 'Successful Projects', value: '500+' },
                { label: 'Client Satisfaction', value: '98%' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-accent font-semibold text-2xl mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
