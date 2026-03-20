import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="animate-fade-up animate-delay-400">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-mono text-lg text-[--text-dim] uppercase tracking-widest">
          Build Log
        </h2>
        <Link
          href="/blog"
          className="font-mono text-sm text-[--text-dim] hover:text-[--accent] transition-colors duration-200"
        >
          View all →
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-[--text-dim] text-sm font-mono">Writing coming soon...</p>
      ) : (
        <div className="flex flex-col divide-y divide-[--border]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-4 first:pt-0 last:pb-0"
            >
              <div className="flex items-baseline gap-4">
                <time className="font-mono text-xs text-[--text-dim] shrink-0">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <div className="min-w-0">
                  <p className="font-sans text-[--text] group-hover:text-[--accent] transition-colors duration-200 truncate">
                    {post.frontmatter.title}
                  </p>
                  <p className="font-sans text-sm text-[--text-dim] mt-0.5 line-clamp-1">
                    {post.frontmatter.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
