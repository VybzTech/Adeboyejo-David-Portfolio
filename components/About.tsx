'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma'] },
];

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Bio and Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="p-6 rounded-2xl border border-primary/20 backdrop-blur-sm hover:border-primary/40 hover:shadow-glow-cyan transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">Who I Am</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                I&apos;m a passionate full-stack developer with a focus on creating beautiful, performant web applications. With experience in modern technologies and a keen eye for design, I bridge the gap between functionality and aesthetics.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm mt-4">
                Always learning, always building. Let&apos;s create something amazing together.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-lg font-bold text-foreground mb-4">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ y: -4 }}
                      className="p-3 rounded-lg bg-primary/10 border border-primary/20 hover:border-primary/50 hover:shadow-glow-cyan transition-all duration-300 text-center"
                    >
                      <p className="text-sm font-semibold text-primary">{skill}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
          {[
            { label: 'Projects', value: '20+' },
            { label: 'Happy Clients', value: '15+' },
            { label: 'Years Experience', value: '3+' },
            { label: 'Coffee Cups', value: '∞' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-lg border border-primary/20 text-center hover:border-primary/40 transition-colors">
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-foreground/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
