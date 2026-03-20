import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Log — fahrimert.dev',
  description: 'Writing about building products, shipping, and the indie hacker journey.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <main className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link
            href="/"
            className="font-mono text-sm text-[--text-dim] hover:text-[--accent] transition-colors duration-200 mb-8 inline-block"
          >
            ← fahrimert.dev
          </Link>
          <h1 className="font-mono text-3xl font-bold text-[--text]">Build Log</h1>
          <p className="text-[--text-dim] mt-2">Building in public — products, learnings, and the journey.</p>
        </div>

        {posts.length === 0 ? (
          <p className="font-mono text-[--text-dim]">No posts yet. Check back soon.</p>
        ) : (
          <div className="flex flex-col divide-y divide-[--border]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group py-6 first:pt-0"
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <time className="font-mono text-xs text-[--text-dim] shrink-0">
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="font-mono text-xs text-[--text-dim]">
                    {post.readingTime} min read
                  </span>
                </div>
                <h2 className="font-sans text-lg font-medium text-[--text] group-hover:text-[--accent] transition-colors duration-200 mb-1">
                  {post.frontmatter.title}
                </h2>
                <p className="text-[--text-dim] text-sm leading-relaxed">
                  {post.frontmatter.excerpt}
                </p>
                {post.frontmatter.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono text-[--text-dim] border border-[--border] rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
