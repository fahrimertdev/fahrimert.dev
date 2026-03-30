export type ProductStatus = 'live' | 'building' | 'soon';

export interface Product {
  name: string;
  tagline: string;
  description: string;
  url: string;
  status: ProductStatus;
  tags: string[];
}

export const products: Product[] = [
  {
    name: 'Previewly',
    tagline: 'Deploy preview & feedback tool for freelancers',
    description:
      'Share deploy previews with clients. They click, comment, approve. No more email threads.',
    url: 'https://previewly-three.vercel.app',
    status: 'live',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Vercel'],
  },
  {
    name: 'StackForge',
    tagline: 'Generate production-ready startup foundations in minutes',
    description:
      'Select your stack, get a working repo. Launch your SaaS, API, or app in hours, not weeks. Supports Next.js, Express, FastAPI, Docker, Railway, Vercel and more.',
    url: 'https://stackforge-virid.vercel.app',
    status: 'live',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    name: 'DeployDiff',
    tagline: 'Not git diff. Deploy diff for humans.',
    description:
      'Visual deploy review and approval platform. Compare production vs preview, share one link, get comments and approval.',
    url: 'https://deploydiff-psi.vercel.app',
    status: 'live',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Playwright', 'Vercel'],
  },
];
