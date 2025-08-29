'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export const StatisticsSection: React.FC = () => {
  const { t } = useLanguage()

  const stats = [
    {
      number: '10K+',
      label: t('stats.travelers'),
      description: t('stats.travelersDesc')
    },
    {
      number: '15+',
      label: t('stats.years'),
      description: t('stats.yearsDesc')
    },
    {
      number: '50+',
      label: t('stats.destinations'),
      description: t('stats.destinationsDesc')
    },
    {
      number: '4.9',
      label: t('stats.rating'),
      description: t('stats.ratingDesc')
    }
  ]

  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-green-100 mb-2">
                {stat.label}
              </div>
              <div className="text-green-200 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}