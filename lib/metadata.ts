import { Metadata } from 'next';
import { BRAND, SEO_KEYWORDS } from './constants';

export function generatePageMetadata(
  title: string,
  description: string,
  pathname: string,
  image?: string
): Metadata {
  const fullTitle = `${title} | ${BRAND.name}`;
  const url = new URL(pathname, BRAND.url).toString();
  const ogImage = image || '/og-image.png';

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BRAND.url),
    canonical: url,
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'website',
      siteName: BRAND.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: `@${BRAND.brand}`,
    },
    keywords: [title, ...SEO_KEYWORDS],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BRAND.url}${item.url}`,
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND.name,
    url: BRAND.url,
    description: BRAND.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BRAND.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: BRAND.name,
    url: BRAND.url,
    jobTitle: BRAND.title,
    email: BRAND.email,
    image: `${BRAND.url}/og-image.png`,
    location: {
      '@type': 'Place',
      name: BRAND.location,
    },
    sameAs: [
      'https://linkedin.com/in/adeboyejo-david',
      'https://github.com/VybzTech',
      'https://twitter.com/VybzTech',
    ],
  };
}
