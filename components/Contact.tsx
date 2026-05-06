'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
    setIsLoading(false);
  };

  const socialLinks = [
    {
      label: 'GitHub',
      icon: '𝓖',
      href: 'https://github.com',
      color: 'hover:text-primary',
    },
    {
      label: 'LinkedIn',
      icon: '𝓛',
      href: 'https://linkedin.com',
      color: 'hover:text-secondary',
    },
    {
      label: 'Twitter',
      icon: '𝓧',
      href: 'https://twitter.com',
      color: 'hover:text-primary',
    },
    {
      label: 'Email',
      icon: '✉',
      href: 'mailto:hello@example.com',
      color: 'hover:text-accent',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Let&apos;s Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you. Drop me a message anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-background/50"
            >
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-background/50 text-foreground placeholder-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-background/50 text-foreground placeholder-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-background/50 text-foreground placeholder-foreground/40 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading || submitted}
                className="w-full px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:shadow-glow-cyan-strong transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? '✓ Message Sent!' : isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Quick contact cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 hover:shadow-glow-cyan transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:hello@adeboyejo.dev"
                  className="text-primary hover:underline"
                >
                  hello@adeboyejo.dev
                </a>
              </div>

              <div className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 hover:shadow-glow-cyan transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">Based In</h3>
                <p className="text-foreground/70">Nigeria, West Africa</p>
              </div>

              <div className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 hover:shadow-glow-cyan transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">Availability</h3>
                <p className="text-foreground/70">Open for freelance & full-time roles</p>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-lg border border-primary/20 flex items-center justify-center text-lg font-bold text-foreground/60 hover:border-primary/50 transition-all duration-300 ${link.color}`}
                    title={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
