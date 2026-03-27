import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
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
      <CaseStudies />
      <AuditCTA />
      <Appointment />
      <ContactForm />
      <Footer />
    </main>
  )
}
