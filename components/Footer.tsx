'use client'

import { motion } from 'framer-motion'

export interface FooterColumnLink {
  label: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterColumnLink[];
}

export interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
}

export function Footer({
  companyName = "Viesa AI Automations",
  companyDescription = "Bedrijven transformeren door middel van intelligente AI-oplossingen.",
  columns = [
    {
      title: "Diensten",
      links: [
        { label: "Strategie", url: "#" },
        { label: "Implementatie", url: "#" },
        { label: "Training", url: "#" },
      ]
    },
    {
      title: "Bedrijf",
      links: [
        { label: "Over Ons", url: "#" },
        { label: "Blog", url: "#" },
        { label: "Contact", url: "#" },
      ]
    },
    {
      title: "Volg Ons",
      links: [
        { label: "LinkedIn", url: "#" },
        { label: "X (Twitter)", url: "#" },
        { label: "E-mail", url: "mailto:info@example.com" },
      ]
    }
  ],
  copyrightText = "© 2024 Viesa AI Automations. Alle rechten voorbehouden."
}: FooterProps) {
  return (
    <motion.footer 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-foreground text-background py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-background">{companyName}</h4>
            <p className="text-sm opacity-75">
              {companyDescription}
            </p>
          </div>

          {columns?.map((column, i) => (
            <div key={i}>
              <h5 className="font-semibold mb-4 text-background">{column.title}</h5>
              <ul className="space-y-2 text-sm opacity-75">
                {column.links?.map((link, j) => (
                  <li key={j}>
                    <a href={link.url} className="hover:opacity-100 transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>{copyrightText}</p>
        </div>
      </div>
    </motion.footer>
  )
}

