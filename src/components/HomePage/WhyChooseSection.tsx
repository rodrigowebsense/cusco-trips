'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Users, MapPin, Shield, Award } from 'lucide-react'

export const WhyChooseSection: React.FC = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: Users,
      title: t('whyChoose.experiencedGuides.title'),
      description: t('whyChoose.experiencedGuides.description')
    },
    {
      icon: MapPin,
      title: t('whyChoose.localKnowledge.title'),
      description: t('whyChoose.localKnowledge.description')
    },
    {
      icon: Shield,
      title: t('whyChoose.safetyFirst.title'),
      description: t('whyChoose.safetyFirst.description')
    },
    {
      icon: Award,
      title: t('whyChoose.authenticExperience.title'),
      description: t('whyChoose.authenticExperience.description')
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('whyChoose.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyChoose.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}