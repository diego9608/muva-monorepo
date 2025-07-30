'use client'

import { useRef } from 'react'
import Hero from '@/components/Hero'
import FullscreenButton from '@/components/FullscreenButton'
import NumbersSection from '@/components/NumbersSection'
import LostSalesCalculator from '@/components/LostSalesCalculator'
import PainPoints from '@/components/PainPoints'
import Proposal from '@/components/Proposal'
import ConversionPotential from '@/components/ConversionPotential'
import StrategyBreakdown from '@/components/StrategyBreakdown'
import ROI from '@/components/ROI'
import ROITimeline from '@/components/ROITimeline'
import Guarantee from '@/components/Guarantee'
import About from '@/components/About'
import CTA from '@/components/CTA'

export default function Home() {
  const numbersRef = useRef<HTMLDivElement>(null)

  const scrollToNumbers = () => {
    numbersRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="overflow-x-hidden">
      <FullscreenButton />
      <Hero onScrollToNext={scrollToNumbers} />
      <div ref={numbersRef}>
        <NumbersSection />
      </div>
      <LostSalesCalculator />
      <PainPoints />
      <Proposal />
      <ConversionPotential />
      <StrategyBreakdown />
      <ROI />
      <ROITimeline />
      <Guarantee />
      <About />
      <CTA />
    </main>
  )
}