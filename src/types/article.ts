export type ArticleStatus =
  | "draft"
  | "published";

export interface ArticleSection {
  title: string;

  paragraphs: string[];
}

export interface Article {
  id: string;

  slug: string;

  title: string;

  subtitle?: string;

  excerpt: string;

  category: string;

  tags: string[];

  status: ArticleStatus;

  readTime: string;

  sections: ArticleSection[];
}