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
    url: 'https://previewly.dev',
    status: 'building',
    tags: ['Next.js', 'TypeScript', 'Vercel'],
  },
];
