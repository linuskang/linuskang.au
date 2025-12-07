export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export interface BlogPostMetadata {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}
