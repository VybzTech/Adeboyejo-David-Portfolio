'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  achievements?: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2023 - Present',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored team of 5 junior developers',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
    ],
    achievements: [
      'Improved app performance by 40%',
      'Reduced bug rate by 60%',
      'Led migration from CRA to Next.js',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2021 - 2023',
    description: [
      'Developed and maintained 5+ production applications',
      'Collaborated with cross-functional teams on product features',
      'Implemented responsive design improving mobile UX',
    ],
    achievements: [
      'Built real-time notification system',
      'Integrated payment processing (Stripe)',
      'Achieved 98% uptime for critical services',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2020 - 2021',
    description: [
      'Built React components and REST APIs',
      'Contributed to debugging and optimization efforts',
      'Participated in code reviews and learning sessions',
    ],
    achievements: [
      'Completed 30+ feature implementations',
      'Fixed 50+ bugs and performance issues',
      'Earned Employee of the Month twice',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent" />

          {/* Experience items */}
          <div className="space-y-12 md:pl-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute -left-14 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />

                {/* Card */}
                <div className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 hover:shadow-glow-cyan transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    <p className="text-foreground/60 text-sm mt-1">{exp.period}</p>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6 text-foreground/70">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-primary mt-1">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="pt-6 border-t border-primary/20">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">Key Achievements</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-primary/10 border border-primary/20">
                            <span className="text-primary text-sm">✓</span>
                            <p className="text-foreground/70 text-xs">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
