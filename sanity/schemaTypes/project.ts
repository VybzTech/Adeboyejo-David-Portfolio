import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Portfolio Projects',
  fields: [
    // 1. NUMERIC ID (FOR BACKWARD COMPATIBILITY)
    defineField({
      name: 'id',
      type: 'number',
      title: 'Project ID',
      description: 'Numeric ID for URL routing (1-6 for existing projects). Must be unique.',
      validation: (Rule) => Rule.required(),
    }),

    // 2. PRIMARY TEXT FIELDS
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Project Display Name',
      description: 'Alternative name field for frontend clarity (typically same as title)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description/Teaser',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullContent',
      type: 'text',
      title: 'Full Project Description',
      description: 'Detailed description shown on project detail page',
      rows: 6,
    }),

    // 3. PROJECT METADATA
    defineField({
      name: 'status',
      type: 'string', // FIXED: Changed 'select' to 'string' so options work correctly
      title: 'Project Status',
      description: 'Current status of the project',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'In-Progress' },
          { title: 'Not Started', value: 'Not-started' }
        ]
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Your Role',
      description: 'Your role on this project (e.g., Lead Developer, Co-founder)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timeline',
      type: 'string',
      title: 'Project Timeline',
      description: 'Duration or timeline (e.g., "3 Months", "Apr 2023 - Jun 2023")',
      validation: (Rule) => Rule.required(),
    }),

    // 4. PRIMARY IMAGE FIELD WITH HOTSPOT & METADATA
    defineField({
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
          validation: (Rule) => Rule.required(),
        }
      ],
      validation: (Rule) => Rule.required(),
    }),

    // 5. ADDITIONAL IMAGES ARRAY
    defineField({
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
    }),

    // 6. EXTERNAL LINKS
    defineField({
      name: 'github',
      type: 'url',
      title: 'GitHub Repository URL',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'liveDemo',
      type: 'url',
      title: 'Live Demo URL',
      description: 'URL to the deployed/live version of the project',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),

    // 7. TECHNOLOGY & CATEGORIZATION
    defineField({
      name: 'stack',
      type: 'array',
      title: 'Tech Stack',
      description: 'Technologies and frameworks used',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Project Categories/Tags',
      description: 'Categories for filtering (e.g., Frontend, Backend, Mobile, etc.)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: (Rule) => Rule.required(),
    }),

    // 8. METRICS
    defineField({
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
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              type: 'string',
              title: 'Metric Value',
              validation: (Rule) => Rule.required(),
            }
          ]
        }
      ]
    }),

    // 9. LEGACY FIELDS (DEPRECATED BUT KEPT FOR COMPATIBILITY)
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      title: 'Featured Project (DEPRECATED)',
      description: 'Legacy field - use filtering in queries instead',
      initialValue: false,
      hidden: true,
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack (DEPRECATED)',
      description: 'Legacy field - use "stack" field instead',
      of: [{ type: 'string' }],
      hidden: true,
    }),
    defineField({
      name: 'links',
      type: 'object',
      title: 'Links (DEPRECATED)',
      description: 'Legacy field - use "github" and "liveDemo" fields instead',
      fields: [
        { name: 'github', type: 'url', title: 'GitHub Repository URL' },
        { name: 'liveDemo', type: 'url', title: 'Live Production URL' }
      ],
      hidden: true,
    })
  ],
});