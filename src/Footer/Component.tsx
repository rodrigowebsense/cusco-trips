'use client'
import Link from 'next/link'
import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

import { Logo } from '@/components/Logo/Logo'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo className="h-8" />
            </Link>
            <p className="text-green-100 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-green-100 hover:text-white transition-colors text-sm">
                {t('nav.home')}
              </Link>
              <Link href="/tours" className="text-green-100 hover:text-white transition-colors text-sm">
                {t('nav.tours')}
              </Link>
              <Link href="/contact" className="text-green-100 hover:text-white transition-colors text-sm">
                {t('nav.contact')}
              </Link>
              <Link href="/about" className="text-green-100 hover:text-white transition-colors text-sm">
                About Us
              </Link>
            </nav>
          </div>

          {/* Popular Tours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.popularTours')}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/tours/machu-picchu" className="text-green-100 hover:text-white transition-colors text-sm">
                Machu Picchu Classic
              </Link>
              <Link href="/tours/salkantay" className="text-green-100 hover:text-white transition-colors text-sm">
                Salkantay Trek
              </Link>
              <Link href="/tours/rainbow-mountain" className="text-green-100 hover:text-white transition-colors text-sm">
                Rainbow Mountain
              </Link>
              <Link href="/tours/sacred-valley" className="text-green-100 hover:text-white transition-colors text-sm">
                Sacred Valley
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-green-300" />
                <span className="text-green-100 text-sm">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-300" />
                <span className="text-green-100 text-sm">{t('header.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-300" />
                <span className="text-green-100 text-sm">{t('header.email')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-100 text-sm">{t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-green-100 hover:text-white transition-colors text-sm">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="text-green-100 hover:text-white transition-colors text-sm">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
