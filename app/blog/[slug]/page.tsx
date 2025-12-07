import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Header from "@/components/header";
import BlogContent from "@/components/blog-content";
import MailingListJoin from "@/components/mailing-list-join";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Linus Kang`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same tags)
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => {
      if (p.slug === post.slug) return false;
      return post.tags?.some((tag) => p.tags?.includes(tag));
    })
    .slice(0, 3);

  return (
    <div className="flex items-start justify-center min-h-screen px-4 pb-12">
      <article className="max-w-lg w-full">
        <Header />

        <div className="mt-4">
          <Link
            href="/blog"
            className="text-xs text-neutral-400 hover:text-neutral-300 transition-colors inline-flex items-center gap-1 mb-6 group"
          >
            <svg
              className="size-3 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-3 text-neutral-100">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{Math.ceil(post.content.split(" ").length / 200)} min read</span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="text-xs px-2.5 py-1 bg-neutral-800 text-neutral-300 rounded hover:bg-neutral-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* Divider */}
          <div className="border-t border-neutral-800 mb-8" />

          {/* Article Content */}
          <BlogContent content={post.content} tags={post.tags} />

          {/* Mailing List */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <h2 className="text-lg font-semibold mb-3 text-neutral-100">
              Join the Newsletter
            </h2>
            <p className="text-sm text-neutral-400 mb-4">
              Get notified when I publish new posts.
            </p>
            <MailingListJoin />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <h2 className="text-lg font-semibold mb-6 text-neutral-100">Related Posts</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block group"
                  >
                    <article className="p-4 h-full rounded-lg border border-neutral-800 hover:shadow-sm hover:bg-neutral-900/40 transition-colors duration-150">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-neutral-100 group-hover:text-neutral-50 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-xs text-neutral-400 mt-2 line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                        <time>
                          {new Date(relatedPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </time>
                        <div className="flex items-center gap-2">
                          {relatedPost.tags?.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 bg-neutral-800 text-neutral-300 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
