'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Clock, Users, Star } from 'lucide-react'

export const FeaturedToursSection: React.FC = () => {
  const { t } = useLanguage()

  const tours = [
    {
      id: 1,
      title: t('tours.machuPicchu.title'),
      description: t('tours.machuPicchu.description'),
      duration: '2 days',
      groupSize: '8-12',
      rating: 4.9,
      reviews: 156,
      price: '$299',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Machu%20Picchu%20ancient%20ruins%20at%20sunrise%2C%20dramatic%20mountain%20backdrop%2C%20mystical%20fog%2C%20golden%20light%2C%20UNESCO%20world%20heritage%20site&image_size=landscape_4_3',
      featured: true
    },
    {
      id: 2,
      title: t('tours.rainbowMountain.title'),
      description: t('tours.rainbowMountain.description'),
      duration: '1 day',
      groupSize: '6-10',
      rating: 4.8,
      reviews: 89,
      price: '$89',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Vinicunca%20Rainbow%20Mountain%20Peru%2C%20colorful%20striped%20mountain%20layers%2C%20dramatic%20Andean%20landscape%2C%20clear%20blue%20sky%2C%20hiking%20trail&image_size=landscape_4_3'
    },
    {
      id: 3,
      title: t('tours.sacredValley.title'),
      description: t('tours.sacredValley.description'),
      duration: '3 days',
      groupSize: '4-8',
      rating: 4.9,
      reviews: 203,
      price: '$459',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Sacred%20Valley%20Peru%2C%20ancient%20Inca%20terraces%2C%20traditional%20Andean%20villages%2C%20green%20valleys%2C%20mountain%20backdrop&image_size=landscape_4_3'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('featuredTours.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featuredTours.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group ${
                tour.featured ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {tour.featured && (
                <div className="bg-green-500 text-white text-sm font-semibold px-4 py-2 text-center">
                  {t('tours.mostPopular')}
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-green-600 font-bold text-lg">{tour.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {tour.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {tour.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize} people</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{tour.rating} ({tour.reviews})</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  {t('tours.bookNow')}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('tours.viewAll')}
          </button>
        </div>
      </div>
    </section>
  )
}