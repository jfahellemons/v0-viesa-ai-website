'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ContactModal } from './ContactModal'
import Image from 'next/image'

export function ContactCTA() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-[#16324f] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch min-h-[400px]"
        >
          {/* Content Container */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center items-start relative z-10">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Nieuwsgierig hoe we je kunnen helpen?
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-10"
            >
              Neem vandaag nog contact met ons op.
            </motion.p>
            
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                onClick={() => setModalOpen(true)}
                className="bg-[#008f6b] hover:bg-[#00a87e] text-white px-8 h-14 text-lg rounded-xl font-bold transition-all duration-300 shadow-lg shadow-black/20"
              >
                Neem contact op
              </Button>
            </motion.div>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative min-h-[300px] md:min-h-auto overflow-hidden md:rounded-tl-[4rem] md:rounded-bl-[4rem]">
             <Image
              src="/contact-office.png"
              alt="Neem contact op met ons team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Subtle overlay to blend on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#16324f] via-transparent to-transparent md:block hidden opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16324f] via-transparent to-transparent md:hidden block opacity-80" />
          </div>
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
