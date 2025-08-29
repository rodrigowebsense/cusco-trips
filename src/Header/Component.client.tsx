'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Phone, Mail, Clock } from 'lucide-react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { useLanguage } from '@/context/LanguageContext'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const { t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
      {/* Top contact bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{t('header.phone')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{t('header.email')}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-1 sm:mt-0">
              <Clock className="w-4 h-4" />
              <span>{t('header.hours')}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-4 flex justify-between items-center">
            <Link href="/">
              <Logo loading="eager" priority="high" className="h-12" />
            </Link>
            <HeaderNav data={data} />
          </div>
        </div>
      </div>
    </header>
  )
}
