import React, { Suspense } from "react";
import Header from "@/components/header";
import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blog-list";
import BlogPageClient from "@/components/blog-page-client";

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

        <BlogPageClient>
          <Suspense fallback={<div className="text-sm text-neutral-500">Loading posts…</div>}>
            <BlogList posts={posts} />
          </Suspense>
        </BlogPageClient>
      </article>
    </div>
  );
}
