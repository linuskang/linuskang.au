import Header from "@/components/header";
import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blog-list";

export const metadata = {
  title: "Blog - Linus Kang",
  description: "Thoughts on programming, AI, and technology.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex items-start justify-center min-h-screen px-4">
      <article className="max-w-lg w-full">
        <Header />

        <div className="mb-6">
          <h1 className="text-xl font-semibold mt-4 mb-2">Blog</h1>
          <p className="text-sm text-neutral-400">
            My thoughts on programming, AI, and technology.
          </p>
        </div>

        <BlogList posts={posts} />
      </article>
    </div>
  );
}
