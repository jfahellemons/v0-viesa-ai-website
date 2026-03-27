'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const services = [
  {
    title: 'AI Strategy & Planning',
    description: 'Develop a comprehensive AI roadmap tailored to your business objectives. We assess your current capabilities and identify high-impact AI opportunities.'
  },
  {
    title: 'Technical Implementation',
    description: 'Build and deploy AI solutions that integrate seamlessly with your existing systems. From LLMs to computer vision, we have the expertise.'
  },
  {
    title: 'Team Training & Support',
    description: 'Empower your team with the knowledge and skills needed to leverage AI effectively. Ongoing support ensures long-term success.'
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
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI solutions designed to accelerate your digital transformation
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
