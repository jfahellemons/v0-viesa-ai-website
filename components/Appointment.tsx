'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function Appointment() {
  return (
    <motion.section 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Schedule Your Consultation
          </h2>
          <p className="text-muted-foreground text-lg">
            Pick a time that works for you
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Card className="bg-card border border-border p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Calendar Mockup */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-foreground mb-4">April 2024</h3>
                <div className="grid grid-cols-7 gap-1 md:gap-2">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, i) => (
                    <div key={i} className="text-center text-xs md:text-sm font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 30 }).map((_, i) => {
                    const day = i + 1
                    const isClickable = day > 5 && day % 3 !== 0
                    return (
                      <motion.div
                        key={i}
                        whileHover={isClickable ? { scale: 1.05 } : {}}
                        className={`text-center py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                          isClickable 
                            ? 'bg-accent text-accent-foreground cursor-pointer hover:opacity-90' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {day}
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-foreground mb-4">Available Times</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:00 PM', '5:00 PM'].map((time, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 md:p-3 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors text-xs md:text-sm font-medium"
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
