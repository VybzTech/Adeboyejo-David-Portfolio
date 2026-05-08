'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import ScrollReveal from '@/components/common/ScrollReveal';
import { contactFormSchema } from '@/lib/zod-schemas';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Phone, MapPin, Clock } from 'phosphor-react';
import { z } from 'zod';

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      serviceType: 'full-stack' as const,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! I&apos;ll get back to you soon.');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="section-container bg-gradient-to-b from-background via-background to-surface/30 relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <h2 className="heading-lg text-text-primary mb-4">Let&apos;s Work Together</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring it to life.
          </p>
        </ScrollReveal>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-soft">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot */}
                <input type="hidden" {...register('website')} />

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Name</label>
                  <Input
                    {...register('name')}
                    placeholder="Your name"
                    error={!!errors.name}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    error={!!errors.email}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Phone (optional)</label>
                  <Input {...register('phone')} type="tel" placeholder="+234 xxx xxx xxxx" />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Service Type</label>
                  <select
                    {...register('serviceType')}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Project Brief</label>
                  <Textarea
                    {...register('message')}
                    placeholder="Tell me about your project..."
                    rows={5}
                    error={!!errors.message}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" fullWidth isLoading={submitStatus === 'loading'}>
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <div
                    className={`p-4 rounded-lg text-sm ${
                      submitStatus === 'success'
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text-primary">Quick Links</h3>

              {/* Email */}
              <a
                href="mailto:david@example.com"
                className="flex items-center gap-3 p-4 bg-surface border border-border rounded-lg hover:border-accent-primary transition-colors group"
              >
                <EnvelopeSimple size={24} className="text-accent-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-text-muted">Email</p>
                  <p className="text-sm text-text-primary font-medium break-all group-hover:text-accent-primary transition-colors">
                    david@example.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+2341234567890"
                className="flex items-center gap-3 p-4 bg-surface border border-border rounded-lg hover:border-accent-primary transition-colors group"
              >
                <Phone size={24} className="text-accent-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-text-muted">Phone</p>
                  <p className="text-sm text-text-primary font-medium group-hover:text-accent-primary transition-colors">
                    +234 123 456 7890
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 bg-surface border border-border rounded-lg">
                <MapPin size={24} className="text-accent-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-text-muted">Location</p>
                  <p className="text-sm text-text-primary font-medium">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-center gap-3 p-4 bg-surface border border-border rounded-lg">
                <Clock size={24} className="text-accent-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-text-muted">Timezone</p>
                  <p className="text-sm text-text-primary font-medium">WAT (UTC+1)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <p className="text-xs text-text-muted font-medium uppercase">Connect</p>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface border border-border rounded-lg hover:border-accent-primary hover:text-accent-primary transition-colors"
                  aria-label="GitHub"
                >
                  <GithubLogo size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface border border-border rounded-lg hover:border-accent-primary hover:text-accent-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
