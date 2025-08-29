import type { Metadata } from 'next'
import { HomePage } from '@/components/HomePage'
import { generateMeta } from '@/utilities/generateMeta'

export default function Page() {
  return <HomePage />
}

export const metadata: Metadata = generateMeta({
  title: 'Cusco Trips - Discover the Peruvian Andes',
  description: 'Experience authentic adventures through the heart of the Inca Empire with our expert local guides.',
})
