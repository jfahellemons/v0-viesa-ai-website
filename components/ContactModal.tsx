'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SuccessModal } from './SuccessModal'

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vul a.u.b. alle velden in')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Voer a.u.b. een geldig e-mailadres in')
      return
    }

    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setShowSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setIsLoading(false)
    onOpenChange(false) // Close the contact modal
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none bg-background shadow-2xl">
          <div className="bg-primary/5 p-8 border-b border-border">
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl font-bold text-foreground">
                Laten we Praten
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met je op.
              </DialogDescription>
            </DialogHeader>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="modal-name" className="text-sm font-medium text-foreground">
                  Naam
                </Label>
                <Input
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Uw naam"
                  className="bg-card border-border focus:ring-primary h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-email" className="text-sm font-medium text-foreground">
                  E-mail
                </Label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@voorbeeld.nl"
                  className="bg-card border-border focus:ring-primary h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-message" className="text-sm font-medium text-foreground">
                  Bericht
                </Label>
                <Textarea
                  id="modal-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hoe kunnen we u helpen?"
                  className="bg-card border-border focus:ring-primary min-h-[120px] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:opacity-90 h-12 font-bold transition-all duration-200"
              >
                {isLoading ? 'Verzenden...' : 'Verstuur Bericht'}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <SuccessModal open={showSuccess} onOpenChange={setShowSuccess} />
    </>
  )
}
