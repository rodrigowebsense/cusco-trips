'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Play } from 'lucide-react'

export const HeroSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Majestic%20Peruvian%20Andes%20mountains%20with%20ancient%20Inca%20ruins%2C%20dramatic%20clouds%2C%20golden%20hour%20lighting%2C%20cinematic%20landscape%2C%20mystical%20atmosphere&image_size=landscape_16_9')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            {t('hero.bookNow')}
          </button>
          
          <button className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="w-5 h-5 ml-1" fill="currentColor" />
            </div>
            <span className="font-medium">{t('hero.watchVideo')}</span>
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}