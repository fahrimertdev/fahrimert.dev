import SocialLinks from '@/components/SocialLinks';
import ProductGrid from '@/components/ProductGrid';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <main className="max-w-2xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="mb-20 animate-fade-up animate-delay-100">
          <div className="mb-6">
            <p className="font-mono text-[--accent] text-sm mb-2">
              &gt; fahrimert.dev — building things that ship
            </p>
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-[--text] leading-tight">
              fahrimert.dev
            </h1>
          </div>
          <p className="font-sans text-[--text-dim] text-lg leading-relaxed mb-8">
            I build tools for developers, freelancers, and the internet.
          </p>
          <SocialLinks />
        </section>

        {/* Products */}
        <div className="mb-20">
          <ProductGrid />
        </div>

        {/* Blog */}
        <div className="mb-20">
          <BlogPreview />
        </div>
      </main>

      <Footer />
    </div>
  );
}
