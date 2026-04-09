'use client'

import { motion } from 'framer-motion'

export interface LogoItem {
  name?: string;
  font?: string; // used for hardcoded fallback
  logoImage?: { asset?: { url?: string } }; // used for Sanity image
}

export interface LogoSliderProps {
  logos?: LogoItem[];
}

const defaultCompanies: LogoItem[] = [
  { name: 'Achmea', font: 'font-serif' },
  { name: 'wehkamp', font: 'font-sans italic font-bold' },
  { name: 'POLITIE', font: 'font-sans tracking-widest font-extrabold' },
  { name: 'MS Schippers', font: 'font-serif italic' },
  { name: 'Vakanties.nl', font: 'font-sans font-medium' },
  { name: 'Ketjap.nl', font: 'font-mono uppercase tracking-tighter' },
]

export function LogoSlider({
  logos = defaultCompanies
}: LogoSliderProps) {
  // Duplicate the list to ensure a seamless infinite scroll
  const duplicatedCompanies = [...(logos?.length ? logos : defaultCompanies), ...(logos?.length ? logos : defaultCompanies), ...(logos?.length ? logos : defaultCompanies)]

  return (
    <section className="py-12 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-16 py-8 items-center"
          animate={{
            x: ['0%', '-33.33%'],
          }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className={`flex items-center justify-center min-w-[150px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4`}
            >
              {company.logoImage?.asset?.url ? (
                <img 
                  src={company.logoImage.asset.url} 
                  alt={company.name || 'Logo'} 
                  className="max-w-[150px] max-h-[60px] object-contain"
                />
              ) : (
                <span className={`text-2xl md:text-3xl text-slate-900 ${company.font || 'font-sans'}`}>
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

