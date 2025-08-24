import blogPosts from '../data/blog-posts.json';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts as BlogPost[];
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const post = blogPosts.find((post: BlogPost) => post.slug === slug);
  return post || null;
}

// Get featured blog posts
export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post: BlogPost) => post.featured);
}

// Get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post: BlogPost) => post.category === category);
}

// Get blog posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post: BlogPost) => post.tags.includes(tag));
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = blogPosts.map((post: BlogPost) => post.category);
  return [...new Set(categories)];
}

// Get all tags
export function getAllTags(): string[] {
  const allTags = blogPosts.flatMap((post: BlogPost) => post.tags);
  return [...new Set(allTags)];
}

// Get recent blog posts
export function getRecentBlogPosts(limit: number = 5): BlogPost[] {
  return blogPosts
    .sort((a: BlogPost, b: BlogPost) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Get reading time from content
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Search blog posts
export function searchBlogPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter((post: BlogPost) => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  );
}
