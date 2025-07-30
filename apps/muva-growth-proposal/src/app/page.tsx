'use client'

import { useRef } from 'react'
import Hero from '@/components/Hero'
import NumbersSection from '@/components/NumbersSection'
import PainPoints from '@/components/PainPoints'
import Proposal from '@/components/Proposal'
import ROI from '@/components/ROI'
import About from '@/components/About'
import CTA from '@/components/CTA'

export default function Home() {
  const numbersRef = useRef<HTMLDivElement>(null)

  const scrollToNumbers = () => {
    numbersRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="overflow-x-hidden">
      <Hero onScrollToNext={scrollToNumbers} />
      <div ref={numbersRef}>
        <NumbersSection />
      </div>
      <PainPoints />
      <Proposal />
      <ROI />
      <About />
      <CTA />
    </main>
  )
}