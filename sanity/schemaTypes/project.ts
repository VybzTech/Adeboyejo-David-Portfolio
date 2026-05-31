import { Rule } from '@sanity/types';

export default {
  name: 'project',
  type: 'document',
  title: 'Portfolio Projects',
  fields: [
    // 1. NUMERIC ID (FOR BACKWARD COMPATIBILITY)
    {
      name: 'id',
      type: 'number',
      title: 'Project ID',
      description: 'Numeric ID for URL routing (1-6 for existing projects). Must be unique.',
      validation: (rule: Rule) => rule.required(),
    },

    // 2. PRIMARY TEXT FIELDS
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Project Display Name',
      description: 'Alternative name field for frontend clarity (typically same as title)',
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
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'fullContent',
      type: 'text',
      title: 'Full Project Description',
      description: 'Detailed description shown on project detail page',
      rows: 6,
    },

    // 3. PROJECT METADATA
    {
      name: 'status',
      type: 'select',
      title: 'Project Status',
      description: 'Current status of the project',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'In-Progress' },
          { title: 'Not Started', value: 'Not-started' }
        ]
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Your Role',
      description: 'Your role on this project (e.g., Lead Developer, Co-founder)',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'timeline',
      type: 'string',
      title: 'Project Timeline',
      description: 'Duration or timeline (e.g., "3 Months", "Apr 2023 - Jun 2023")',
      validation: (rule: Rule) => rule.required(),
    },

    // 4. PRIMARY IMAGE FIELD WITH HOTSPOT & METADATA
    {
      name: 'mainImage',
      type: 'image',
      title: 'Project Screenshot/Cover',
      description: 'Primary project image/screenshot',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (Accessibility)',
          validation: (rule: Rule) => rule.required(),
        }
      ],
      validation: (rule: Rule) => rule.required(),
    },

    // 5. ADDITIONAL IMAGES ARRAY
    {
      name: 'images',
      type: 'array',
      title: 'Additional Project Images',
      description: 'Gallery of additional screenshots or demos',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        }
      ]
    },

    // 6. EXTERNAL LINKS
    {
      name: 'github',
      type: 'url',
      title: 'GitHub Repository URL',
      validation: (rule: Rule) => rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'liveDemo',
      type: 'url',
      title: 'Live Demo URL',
      description: 'URL to the deployed/live version of the project',
      validation: (rule: Rule) => rule.uri({ scheme: ['http', 'https'] }),
    },

    // 7. TECHNOLOGY & CATEGORIZATION
    {
      name: 'stack',
      type: 'array',
      title: 'Tech Stack',
      description: 'Technologies and frameworks used',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Project Categories/Tags',
      description: 'Categories for filtering (e.g., Frontend, Backend, Mobile, etc.)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: (rule: Rule) => rule.required(),
    },

    // 8. METRICS
    {
      name: 'metrics',
      type: 'array',
      title: 'Project Metrics',
      description: 'Key metrics or statistics (e.g., Downloads, Users, Rating)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Metric Label',
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'value',
              type: 'string',
              title: 'Metric Value',
              validation: (rule: Rule) => rule.required(),
            }
          ]
        }
      ]
    },

    // 9. LEGACY FIELDS (DEPRECATED BUT KEPT FOR COMPATIBILITY)
    {
      name: 'isFeatured',
      type: 'boolean',
      title: 'Featured Project (DEPRECATED)',
      description: 'Legacy field - use filtering in queries instead',
      initialValue: false,
      hidden: true,
    },
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack (DEPRECATED)',
      description: 'Legacy field - use "stack" field instead',
      of: [{ type: 'string' }],
      hidden: true,
    },
    {
      name: 'links',
      type: 'object',
      title: 'Links (DEPRECATED)',
      description: 'Legacy field - use "github" and "liveDemo" fields instead',
      fields: [
        { name: 'github', type: 'url', title: 'GitHub Repository URL' },
        { name: 'liveDemo', type: 'url', title: 'Live Production URL' }
      ],
      hidden: true,
    }
  ],
};