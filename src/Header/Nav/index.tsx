'use client'

import React from 'react'
import { ChevronDown, Globe } from 'lucide-react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { useLanguage } from '@/context/LanguageContext'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'pt', name: 'PT', flag: '🇧🇷' }
  ]

  return (
    <nav className="flex gap-6 items-center">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink 
            key={i} 
            {...link} 
            appearance="link" 
            className="text-gray-700 hover:text-green-600 font-medium transition-colors"
          />
        )
      })}
      
      {/* Language Selector */}
      <div className="relative group">
        <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code as any)}
              className={`flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-50 w-full text-left first:rounded-t-lg last:rounded-b-lg ${
                language === lang.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Book Now Button */}
      <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
        {t('nav.book')}
      </button>
    </nav>
  )
}
