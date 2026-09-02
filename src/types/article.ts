export type ArticleStatus =
  | "draft"
  | "published";

export interface Article {
  _id: string;

  title: string;
  slug: string;
  subtitle?: string;

  excerpt: string;
  content: string;

  coverImage: string;

  category: string;
  tags: string[];

  status: ArticleStatus;

  featured: boolean;

  publishedAt?: string;

  createdAt: string;
  updatedAt: string;
}