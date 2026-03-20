import { Product, ProductStatus } from '@/data/products';

const STATUS_CONFIG: Record<ProductStatus, { emoji: string; label: string; color: string }> = {
  live: { emoji: '🟢', label: 'Live', color: 'text-green-400' },
  building: { emoji: '🟡', label: 'Building', color: 'text-yellow-400' },
  soon: { emoji: '⚪', label: 'Soon', color: 'text-[--text-dim]' },
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const status = STATUS_CONFIG[product.status];

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card group block p-6 rounded-lg border border-[--border] bg-[--surface] transition-all duration-200 hover:border-[--accent] hover:bg-[--surface-hover]"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-mono text-xl font-bold text-[--text] group-hover:text-[--accent] transition-colors duration-200">
          {product.name}
        </h3>
        <span className={`flex items-center gap-1.5 text-xs font-mono whitespace-nowrap ${status.color}`}>
          {status.emoji} {status.label}
        </span>
      </div>

      <p className="text-[--text-dim] text-sm leading-relaxed mb-4">
        {product.tagline}
      </p>

      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono text-[--text-dim] border border-[--border] rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
