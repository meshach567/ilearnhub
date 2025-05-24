export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  hero_image?: string;
  author_id: string;
  author_name: string;
  author_avatar?: string;
  published: boolean;
  featured: boolean;
  publish_date: string;
  created_at: string;
  updated_at: string;
  categories?: Category[];
  tags?: Tag[];
  read_time?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  hasNext: boolean;
  hasPrev: boolean;
}
