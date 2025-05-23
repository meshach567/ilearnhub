export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  hero_image?: string;
  author_name: string;
  author_avatar?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
  meta_title?: string;
  meta_description?: string;
  reading_time?: number;
  views_count: number;
  categories?: Category[];
  tags?: Tag[];
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

export interface BlogListResponse {
  posts: BlogPost[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}
