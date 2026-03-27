'use client'

import { motion } from 'framer-motion'

export function Footer() {
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
            <h4 className="font-bold text-lg mb-4 text-background">Dutch AI Consulting</h4>
            <p className="text-sm opacity-75">
              Transforming businesses through intelligent AI solutions.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-background">Services</h5>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100 transition">Strategy</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Implementation</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Training</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-background">Company</h5>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100 transition">About</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-background">Connect</h5>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Twitter</a></li>
              <li><a href="mailto:info@example.com" className="hover:opacity-100 transition">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Dutch AI Consulting. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
