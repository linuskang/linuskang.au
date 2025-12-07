"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { BlogPost } from "@/types/blog";
import { Input } from "@/components/ui/input";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Handle URL tag parameter
  useEffect(() => {
    const tagFromUrl = searchParams.get("tag");
    if (tagFromUrl) {
      setSelectedTag(tagFromUrl);
    }
  }, [searchParams]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts based on search and tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag =
        selectedTag === null || post.tags?.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus-visible:ring-neutral-700"
        />

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedTag(null);
                router.push("/blog");
              }}
              className={`text-xs px-2.5 py-1 rounded transition-colors ${
                selectedTag === null
                  ? "bg-neutral-100 text-neutral-900"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  const newTag = tag === selectedTag ? null : tag;
                  setSelectedTag(newTag);
                  router.push(newTag ? `/blog?tag=${encodeURIComponent(newTag)}` : "/blog");
                }}
                className={`text-xs px-2.5 py-1 rounded transition-colors ${
                  selectedTag === tag
                    ? "bg-neutral-100 text-neutral-900"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Count */}
      {(searchQuery || selectedTag) && (
        <p className="text-xs text-neutral-500">
          {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}{" "}
          found
        </p>
      )}

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-sm text-neutral-500">No posts found.</p>
            {(searchQuery || selectedTag) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                }}
                className="text-xs text-neutral-400 hover:text-neutral-300 underline mt-2"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="space-y-2 p-4 rounded-lg hover:bg-neutral-900/50 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-base font-medium text-neutral-100 group-hover:text-neutral-300 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-xs text-neutral-500 shrink-0">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <p className="text-sm text-neutral-400 line-clamp-2">
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-neutral-800/50 text-neutral-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
