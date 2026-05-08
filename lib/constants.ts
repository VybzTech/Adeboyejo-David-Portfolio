// Brand & Personal Info
export const BRAND = {
  name: 'David Adeboyejo',
  shortName: 'David',
  title: 'Product Engineer',
  tagline: 'Building premium SaaS products that ship fast',
  description: 'Full-stack developer specializing in React, TypeScript, and Node.js',
  email: 'hello@davidadeboyejo.com',
  location: 'Lagos, Nigeria',
  timezone: 'WAT (UTC+1)',
  url: 'https://davidadeboyejo.com',
  brand: 'VybzTech',
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/VybzTech',
  linkedin: 'https://linkedin.com/in/adeboyejo-david',
  twitter: 'https://twitter.com/VybzTech',
  email: 'mailto:hello@davidadeboyejo.com',
};

// Navigation
export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/#contact' },
];

// Hero Section
export const HERO = {
  greeting: "Hey, I'm",
  name: 'David Adeboyejo',
  titles: [
    'Product Engineer',
    'Full Stack Developer',
    'Frontend Engineer',
    'React Specialist',
    'SaaS Builder',
  ],
  tagline: 'Building premium SaaS products that ship fast',
  ctas: [
    { label: 'Hire Me', href: '/#contact', variant: 'primary' },
    { label: 'View Work', href: '/case-studies', variant: 'secondary' },
  ],
};

// Metrics
export const METRICS = [
  { label: '4+ Years', description: 'Experience' },
  { label: '10+ Projects', description: 'Delivered' },
  { label: 'Full Stack', description: 'Ready' },
  { label: 'Remote', description: 'Worldwide' },
];

// Services / What I Do
export const SERVICES = [
  {
    title: 'Frontend Engineering',
    description: 'Building responsive, accessible UI with React, TypeScript, and Tailwind CSS. Focus on performance and user experience.',
    icon: 'Code',
    details: {
      description: 'I specialize in building high-performance, accessible user interfaces with modern frontend technologies.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
      useCases: [
        'Web applications',
        'Design systems',
        'Performance optimization',
        'Accessibility (WCAG AAA)',
      ],
    },
  },
  {
    title: 'Backend Systems',
    description: 'Designing scalable APIs, databases, and backend infrastructure. Node.js, PostgreSQL, and cloud services.',
    icon: 'Database',
    details: {
      description: 'I build robust backend systems that scale with your business, from REST APIs to complex microservices.',
      stack: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'TypeScript'],
      useCases: [
        'REST APIs',
        'Database design',
        'Authentication & security',
        'Real-time features',
      ],
    },
  },
  {
    title: 'Product & SaaS',
    description: 'Full-stack thinking for product development. From ideation to deployment, shipping features that matter.',
    icon: 'Rocket',
    details: {
      description: 'End-to-end product development with focus on business logic, automation, and user value.',
      stack: ['Full Stack', 'Product Strategy', 'Automation', 'DevOps'],
      useCases: [
        'SaaS platforms',
        'Automation tools',
        'Workflow optimization',
        'MVP to scale',
      ],
    },
  },
];

// About Preview
export const ABOUT_PREVIEW = {
  title: 'About Me',
  summary: 'Product engineer based in Lagos, Nigeria. 4+ years building premium SaaS products. Full-stack specialist.',
  highlights: [
    'Nigeria 🇳🇬',
    'WAT (UTC+1)',
    '4+ Years',
    'Remote Ready',
  ],
  sections: [
    {
      title: 'Who I am',
      content: 'I\'m a product-focused engineer who loves building beautiful, performant software. I approach every project with a focus on user experience, code quality, and business impact. Currently available for freelance and full-time opportunities.',
    },
    {
      title: 'Experience',
      content: 'I\'ve worked on diverse projects ranging from early-stage startups to established SaaS products. My experience spans frontend, backend, and full-stack development with a strong emphasis on performance and scalability.',
    },
    {
      title: 'Education',
      content: 'Self-taught developer with a passion for continuous learning. I stay updated with latest technologies and best practices through courses, reading, and building projects.',
    },
    {
      title: 'Remote Ready',
      content: 'Experienced remote worker with excellent communication skills. I thrive in distributed teams and am committed to clear async communication and documentation.',
    },
  ],
};

// Tech Stack
export const TECH_STACK = {
  frontend: {
    title: 'Frontend',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'HTML/CSS',
    ],
  },
  backend: {
    title: 'Backend',
    technologies: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
      'GraphQL',
    ],
  },
  devops: {
    title: 'DevOps & Tools',
    technologies: [
      'Vercel',
      'GitHub',
      'Docker',
      'AWS',
      'CI/CD',
      'Linux',
    ],
  },
  other: {
    title: 'Other',
    technologies: [
      'Git',
      'Figma',
      'VS Code',
      'Postman',
      'npm/pnpm',
      'Testing',
    ],
  },
};

// Featured Case Studies
export const FEATURED_CASE_STUDIES = [
  {
    id: 'project-1',
    title: 'SaaS Analytics Dashboard',
    role: 'Full Stack Developer',
    problem: 'Needed a real-time analytics platform for tracking user behavior',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    metric: '10,000+ daily active users',
    image: '/images/projects/project-1.jpg',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform',
    role: 'Frontend Lead',
    problem: 'Building a responsive, performant shopping experience',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    metric: '$500K+ monthly revenue',
    image: '/images/projects/project-2.jpg',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Design System',
    role: 'Design System Engineer',
    problem: 'Standardizing UI components across 5+ products',
    stack: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    metric: '200+ components built',
    image: '/images/projects/project-3.jpg',
    featured: true,
  },
];

// SEO Keywords
export const SEO_KEYWORDS = [
  'David Adeboyejo',
  'Product Engineer',
  'Full Stack Developer Nigeria',
  'React Developer',
  'Next.js Developer',
  'Frontend Engineer Africa',
  'Node.js Engineer',
  'SaaS Developer',
  'Remote Engineer',
  'TypeScript Developer Nigeria',
];
