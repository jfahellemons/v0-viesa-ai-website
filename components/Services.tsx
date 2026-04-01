'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Globe, MessageSquare, PhoneCall, Target, Mail } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: 'Website ontwikkeling',
    description: 'Wij creëren moderne, snelle en SEO-vriendelijke websites die perfect aansluiten bij uw merk en zorgen voor maximale online zichtbaarheid.',
    icon: Globe,
  },
  {
    title: 'AI chatbot',
    description: 'Bied uw klanten 24/7 ondersteuning met intelligente AI-chatbots. Verhoog de klanttevredenheid en bespaar waardevolle tijd met geautomatiseerde klantenservice.',
    icon: MessageSquare,
  },
  {
    title: 'Voiceflow',
    description: 'Automatiseer uw telefonische klantenservice met geavanceerde voice callers. Geef uw bellers 24/7 direct antwoord en efficiënte ondersteuning zonder wachttijden.',
    icon: PhoneCall,
  },
  {
    title: 'Lead generation',
    description: 'Ontdek snel en efficiënt nieuwe zakelijke kansen. Ons geautomatiseerde leadgeneratie systeem vindt razendsnel hoogwaardige leads om uw groei te versnellen.',
    icon: Target,
  },
  {
    title: 'Email automation',
    description: 'Stroomlijn uw e-mailverkeer met slimme automatisering. Van het automatisch organiseren van uw inbox tot het direct versturen van gepersonaliseerde reacties.',
    icon: Mail,
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      {/* Background Technical Image */}
      <div className="absolute -bottom-12 -right-12 w-[600px] h-[600px] opacity-[0.04] pointer-events-none -z-10 rotate-12">
        <Image
          src="/services-bg.jpg"
          alt="Technical diagram background"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Onze Diensten
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Wij helpen bedrijven groeien door middel van geavanceerde automatisering en AI-oplossingen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="w-full max-w-md h-full"
            >
              <Card className="h-full group p-8 bg-sidebar-accent border-none shadow-xl hover:shadow-sidebar-accent/20 transition-all duration-300 rounded-[2rem]">
                <div className="w-14 h-14 bg-[#19435a]/5 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-[#19435a]/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#19435a]" />
                </div>
                <h3 className="text-2xl font-bold text-[#19435a] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#19435a]/90 leading-relaxed text-base">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
