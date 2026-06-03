import { site, socials } from '../data/content';
import type { PostItem } from '../data/posts';

const absoluteUrl = (path = '/') => new URL(path.replace(/^\/+/, ''), site.url).toString();
const logoUrl = absoluteUrl('/MSarina.svg');

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Misaka Sarina',
  alternateName: ['Baker Siacone', '御坂サリナ'],
  url: absoluteUrl('/'),
  image: logoUrl,
  email: site.email,
  sameAs: socials
    .map(([, href]) => href)
    .filter((href) => !href.startsWith('mailto:'))
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.title,
  url: absoluteUrl('/'),
  description: site.description,
  publisher: personJsonLd
};

export const webPageJsonLd = ({
  title,
  description,
  path,
  type = 'WebPage'
}: {
  title: string;
  description: string;
  path: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage';
}) => ({
  '@context': 'https://schema.org',
  '@type': type,
  name: title,
  headline: title,
  description,
  url: absoluteUrl(path),
  isPartOf: websiteJsonLd,
  publisher: personJsonLd
});

export const blogPostJsonLd = (post: PostItem) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.summary,
  datePublished: post.date,
  dateModified: post.date,
  mainEntityOfPage: absoluteUrl(`/blog/${post.slug}/`),
  url: absoluteUrl(`/blog/${post.slug}/`),
  keywords: post.tags,
  articleSection: post.category,
  author: personJsonLd,
  publisher: personJsonLd
});

export const serviceJsonLd = ({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: title,
  description,
  url: absoluteUrl(path),
  provider: personJsonLd,
  areaServed: 'Worldwide',
  serviceType: ['Music production', 'Web archive', 'Digital project consulting']
});
