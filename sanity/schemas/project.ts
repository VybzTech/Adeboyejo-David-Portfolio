import { Rule } from '@sanity/types';

export default {
  name: 'project',
  type: 'document',
  title: 'Portfolio Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: (rule: Rule) => rule.required().min(3).error('A descriptive title is highly recommended.'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Route Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required().error('A unique routing identifier must be generated.'),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Project Cover Presentation Image',
      options: {
        hotspot: true, // Enables visual cropping handles within the studio workspace
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Visual Text Description (SEO / Accessibility)',
          validation: (rule: Rule) => rule.required().error('Accessibility alt descriptions are vital.'),
        }
      ]
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Teaser Summary Text',
      rows: 3,
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tech Stack Markers',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};