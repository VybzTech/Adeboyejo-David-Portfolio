import { contactFormSchema } from '@/lib/zod-schemas';
import { NextRequest, NextResponse } from 'next/server';

// Rate limiting: simple in-memory store (use Redis in production)
const rateLimitStore = new Map<string, number[]>();

function checkRateLimit(ip: string, maxRequests = 5, windowMs = 3600000): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, [now]);
    return true;
  }

  const timestamps = rateLimitStore.get(ip)!.filter((t) => t > windowStart);
  
  if (timestamps.length >= maxRequests) {
    return false;
  }

  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Validate with Zod
    const validated = contactFormSchema.parse(body);

    // TODO: Send email using Resend
    // const response = await resend.emails.send({
    //   from: 'contact@davidadeboyejo.com',
    //   to: 'david@example.com',
    //   subject: `New contact form submission from ${validated.name}`,
    //   html: `<p>Name: ${validated.name}</p>..`,
    // });

    console.log('[v0] Contact form submission:', validated);

    return NextResponse.json(
      { message: 'Message received. I will get back to you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
