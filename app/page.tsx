import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { ContactCTA } from '@/components/ContactCTA'
import { LogoSlider } from '@/components/LogoSlider'
import { CaseStudies } from '@/components/CaseStudies'
import { AuditCTA } from '@/components/AuditCTA'
import { Appointment } from '@/components/Appointment'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <LogoSlider />
      <ContactCTA />
      <Appointment />
      <Footer />
    </main>
  )
}
