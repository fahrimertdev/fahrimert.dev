import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} — fahrimert.dev`,
    description: post.frontmatter.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <main className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="font-mono text-sm text-[--text-dim] hover:text-[--accent] transition-colors duration-200 mb-12 inline-block"
        >
          ← Back to all posts
        </Link>

        <article>
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <time className="font-mono text-xs text-[--text-dim]">
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-[--border]">·</span>
              <span className="font-mono text-xs text-[--text-dim]">
                {post.readingTime} min read
              </span>
            </div>
            <h1 className="font-mono text-2xl sm:text-3xl font-bold text-[--text] leading-tight">
              {post.frontmatter.title}
            </h1>
            {post.frontmatter.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
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
          </header>

          <div className="prose prose-invert prose-sm max-w-none
            prose-headings:font-mono prose-headings:text-[--text]
            prose-p:text-[--text-dim] prose-p:leading-relaxed
            prose-a:text-[--accent] prose-a:no-underline hover:prose-a:underline
            prose-code:font-mono prose-code:text-[--accent] prose-code:text-sm
            prose-pre:bg-[--surface] prose-pre:border prose-pre:border-[--border]
            prose-blockquote:border-l-[--accent] prose-blockquote:text-[--text-dim]
            prose-strong:text-[--text]
            prose-hr:border-[--border]">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
    </div>
  );
}
