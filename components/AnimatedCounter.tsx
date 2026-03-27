'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const display = useTransform(count, (latest) => prefix + latest.toFixed(decimals) + suffix)
  
  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" })
    }
  }, [inView, value, count])

  return <motion.span ref={ref}>{display}</motion.span>
}
