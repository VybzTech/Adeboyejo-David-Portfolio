export interface ProcessStep {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  details: {
    whatWeDo: string[];
    whyItMatters: string;
    deliverables: string[];
  };
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Planning",
    shortDescription: "Understanding your vision, goals, and users to create a winning strategy",
    fullDescription: "The foundation of every successful project starts with deep discovery. We collaborate with you to understand business objectives, user needs, and technical constraints.",
    icon: "Planning",
    details: {
      whatWeDo: [
        "Conduct stakeholder interviews and workshops",
        "Research your market, competitors, and users",
        "Define project scope, timeline, and budget",
        "Identify technical requirements and constraints",
        "Create detailed project roadmap and success metrics"
      ],
      whyItMatters: "A clear plan prevents costly mistakes and ensures alignment. Understanding users upfront reduces rework and increases adoption rates.",
      deliverables: [
        "Project Charter & Objectives",
        "User Research Report",
        "Technical Requirements Document",
        "Project Timeline & Milestones",
        "Success Metrics & KPIs"
      ]
    }
  },
  {
    id: "design",
    title: "Design & Prototyping",
    shortDescription: "Creating beautiful, intuitive interfaces that users love and businesses trust",
    fullDescription: "Design is where your vision becomes visual reality. We create user-centered interfaces that are both beautiful and functional, tested and validated before development.",
    icon: "Design",
    details: {
      whatWeDo: [
        "Create information architecture and user flows",
        "Design wireframes and interactive prototypes",
        "Develop visual design system and component library",
        "Conduct usability testing and user feedback sessions",
        "Iterate based on insights and validation"
      ],
      whyItMatters: "Good design increases user engagement, reduces support costs, and sets your product apart. Testing early catches issues before they're expensive to fix.",
      deliverables: [
        "User Journey Maps",
        "Interactive Prototypes",
        "Design System & Style Guide",
        "Usability Test Report",
        "Design Specifications"
      ]
    }
  },
  {
    id: "development",
    title: "Development & Building",
    shortDescription: "Writing clean, scalable code that powers your product's success",
    fullDescription: "Our engineering team builds robust, performant applications using modern technologies and industry best practices. We deliver working software in regular increments.",
    icon: "Code",
    details: {
      whatWeDo: [
        "Build scalable backend APIs and services",
        "Develop responsive, performant frontend interfaces",
        "Integrate third-party services and APIs",
        "Implement security best practices from day one",
        "Set up automated testing and deployment pipelines"
      ],
      whyItMatters: "Clean code is maintainable code. Automated testing catches bugs early. CI/CD pipelines reduce deployment risks and enable rapid iteration.",
      deliverables: [
        "Fully Functional Application",
        "API Documentation",
        "Code Repository with Version Control",
        "Automated Test Suite",
        "Deployment Pipeline"
      ]
    }
  },
  {
    id: "testing",
    title: "Quality Assurance & Testing",
    shortDescription: "Rigorous testing across all devices, browsers, and scenarios for confidence",
    fullDescription: "Quality assurance isn't an afterthought—it's woven throughout development. We test functionality, performance, security, and usability comprehensively.",
    icon: "Testing",
    details: {
      whatWeDo: [
        "Execute functional and integration testing",
        "Perform cross-browser and device testing",
        "Conduct security and penetration testing",
        "Load test for performance and scalability",
        "Conduct user acceptance testing with stakeholders"
      ],
      whyItMatters: "Bugs in production damage trust and cost 10x more to fix. Comprehensive testing ensures reliability and gives stakeholders confidence.",
      deliverables: [
        "Test Plans & Test Cases",
        "Bug Reports & Tracking",
        "Performance Test Results",
        "Security Assessment Report",
        "QA Sign-off"
      ]
    }
  },
  {
    id: "deployment",
    title: "Deployment & Launch",
    shortDescription: "Smooth, zero-downtime launches with careful planning and monitoring",
    fullDescription: "Launch day is exciting. We manage deployments professionally with backup plans, gradual rollouts, and real-time monitoring to ensure success.",
    icon: "Launch",
    details: {
      whatWeDo: [
        "Prepare deployment documentation and runbooks",
        "Set up production environment and infrastructure",
        "Execute zero-downtime deployment strategy",
        "Monitor system health and user experience",
        "Conduct post-launch support and issue resolution"
      ],
      whyItMatters: "A smooth launch sets the tone for user adoption. Careful monitoring catches issues immediately rather than waiting for complaints.",
      deliverables: [
        "Deployment Plan & Rollback Procedures",
        "Production Environment Documentation",
        "Monitoring & Alerting Setup",
        "Launch Day Checklist",
        "Post-Launch Report"
      ]
    }
  },
  {
    id: "optimization",
    title: "Optimization & Growth",
    shortDescription: "Continuous improvement based on data and user feedback",
    fullDescription: "Post-launch is where real learning begins. We monitor performance, gather user feedback, and systematically optimize for better results.",
    icon: "Growth",
    details: {
      whatWeDo: [
        "Monitor application performance and user metrics",
        "Analyze user behavior and engagement patterns",
        "Identify optimization opportunities through A/B testing",
        "Implement improvements based on data insights",
        "Plan and execute feature enhancements"
      ],
      whyItMatters: "Products improve over time. Data-driven decisions lead to better features. Continuous optimization compounds results exponentially.",
      deliverables: [
        "Performance Analytics Dashboard",
        "User Behavior Analysis Reports",
        "A/B Testing Results",
        "Optimization Recommendations",
        "Quarterly Improvement Plan"
      ]
    }
  },
  {
    id: "maintenance",
    title: "Support & Maintenance",
    shortDescription: "Keeping your product secure, modern, and running smoothly",
    fullDescription: "We provide ongoing support to keep your application secure, performant, and up-to-date with the latest technologies and best practices.",
    icon: "Support",
    details: {
      whatWeDo: [
        "Provide technical support and bug fixes",
        "Manage security updates and patches",
        "Monitor system performance and uptime",
        "Update dependencies and frameworks",
        "Plan and execute major version upgrades"
      ],
      whyItMatters: "Regular maintenance prevents security breaches, reduces technical debt, and ensures optimal performance over time.",
      deliverables: [
        "Monthly Maintenance Reports",
        "Security Update Logs",
        "Performance Metrics & Trends",
        "Uptime SLA Compliance",
        "Roadmap & Enhancement Backlog"
      ]
    }
  }
];
