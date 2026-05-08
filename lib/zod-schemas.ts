import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(val),
      'Invalid phone number'
    ),
  serviceType: z
    .enum(['frontend', 'backend', 'full-stack', 'product', 'other'])
    .optional()
    .default('full-stack'),
  budget: z
    .enum(['under-1k', '1-5k', '5-10k', '10k-plus', 'not-sure'])
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must not exceed 2000 characters'),
  website: z
    .string()
    .optional()
    .default('')
    .refine((val) => !val, 'Spam detected'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

export const subscribeSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
});

export type SubscribeData = z.infer<typeof subscribeSchema>;
