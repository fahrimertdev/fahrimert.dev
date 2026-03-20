import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <section className="animate-fade-up animate-delay-300">
      <h2 className="font-mono text-lg text-[--text-dim] mb-6 uppercase tracking-widest">
        Things I&apos;ve Built
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
        <div className="p-6 rounded-lg border border-dashed border-[--border] flex items-center justify-center">
          <span className="font-mono text-sm text-[--text-dim]">
            More coming soon...
          </span>
        </div>
      </div>
    </section>
  );
}
