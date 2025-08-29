import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'

export const Tours: CollectionConfig = {
  slug: 'tours',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'price', 'duration', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'short_description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'difficulty',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Easy',
          value: 'easy',
        },
        {
          label: 'Moderate',
          value: 'moderate',
        },
        {
          label: 'Challenging',
          value: 'challenging',
        },
        {
          label: 'Difficult',
          value: 'difficult',
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          localized: true,
        },
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'highlight',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'included',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'excluded',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'itinerary',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'day',
          type: 'number',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
        },
        {
          name: 'activities',
          type: 'array',
          fields: [
            {
              name: 'activity',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'max_group_size',
      type: 'number',
      required: true,
      min: 1,
    },
    {
      name: 'minimum_age',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'best_season',
      type: 'select',
      required: true,
      hasMany: true,
      options: [
        {
          label: 'Spring',
          value: 'spring',
        },
        {
          label: 'Summer',
          value: 'summer',
        },
        {
          label: 'Autumn',
          value: 'autumn',
        },
        {
          label: 'Winter',
          value: 'winter',
        },
        {
          label: 'Year Round',
          value: 'year_round',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'rating',
      type: 'number',
      min: 0,
      max: 5,
      admin: {
        step: 0.1,
      },
    },
    {
      name: 'reviews_count',
      type: 'number',
      min: 0,
      defaultValue: 0,
    },
    ...slugField(),
  ],
}