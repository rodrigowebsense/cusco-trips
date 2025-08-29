'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Star, Quote } from 'lucide-react'

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: t('testimonials.sarah.text'),
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20smiling%20woman%20with%20brown%20hair%2C%20friendly%20expression%2C%20travel%20enthusiast&image_size=square'
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      text: t('testimonials.carlos.text'),
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20smiling%20man%20with%20dark%20hair%2C%20friendly%20expression%2C%20adventure%20traveler&image_size=square'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'London, UK',
      rating: 5,
      text: t('testimonials.emma.text'),
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20smiling%20blonde%20woman%2C%20friendly%20expression%2C%20outdoor%20enthusiast&image_size=square'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-green-600 opacity-20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('testimonials.readMore')}
          </button>
        </div>
      </div>
    </section>
  )
}