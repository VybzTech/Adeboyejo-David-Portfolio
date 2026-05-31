import { Rule } from '@sanity/types';

export default {
  name: 'project',
  type: 'document',
  title: 'Portfolio Projects',
  fields: [
    // 1. TEXT FIELDS
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Short Description/Teaser',
      rows: 3,
    },
    
    // 2. IMAGE FIELD WITH HOTSPOT & METADATA
    {
      name: 'mainImage',
      type: 'image',
      title: 'Project Screenshot/Cover',
      options: {
        hotspot: true, // Lets you visually select the focal point in the dashboard
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (Accessibility)',
          validation: (rule: Rule) => rule.required(),
        }
      ]
    },

    // 3. OBJECT / LINKS FIELD
    {
      name: 'links',
      type: 'object',
      title: 'Project External Links',
      fields: [
        { name: 'github', type: 'url', title: 'GitHub Repository URL' },
        { name: 'liveDemo', type: 'url', title: 'Live Production URL' }
      ]
    },

    // 4. BOOLEAN FIELD
    {
      name: 'isFeatured',
      type: 'boolean',
      title: 'Featured Project',
      description: 'Toggle on to showcase this prominently at the top of your homepage.',
      initialValue: false,
    },

    // 5. ARRAY FIELD (Tags/Tech Stack)
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack Markers',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
};