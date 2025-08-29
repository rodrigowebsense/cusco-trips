'use client'

import React from 'react'
import { HeroSection } from './HeroSection'
import { WhyChooseSection } from './WhyChooseSection'
import { FeaturedToursSection } from './FeaturedToursSection'
import { StatisticsSection } from './StatisticsSection'
import { TestimonialsSection } from './TestimonialsSection'
import { CTASection } from './CTASection'

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <FeaturedToursSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}