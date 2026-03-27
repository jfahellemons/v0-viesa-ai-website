'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

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
            Impact & Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real outcomes from our AI implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { metric: '+45%', label: 'Average Efficiency Gain' },
            { metric: '€2.3M', label: 'Total Cost Savings Generated' },
            { metric: '92%', label: 'On-Time Project Delivery' }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-8 bg-card rounded-lg border border-border"
            >
              <div className="text-accent text-4xl font-bold mb-2">{item.metric}</div>
              <p className="text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              company: 'FinTech Company',
              challenge: 'Complex document processing',
              result: 'Reduced processing time by 80% with AI-powered document analysis'
            },
            {
              company: 'Manufacturing Firm',
              challenge: 'Quality control bottlenecks',
              result: 'Improved defect detection accuracy to 99.2% using computer vision'
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
                <p className="text-sm text-accent mb-4">Challenge: {study.challenge}</p>
                <p className="text-foreground">{study.result}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
