export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: {
    html: string;
  };
  publishedAt: string;
  coverImage?: {
    url: string;
    width?: number;
    height?: number;
  };
  categories: {
    name: string;
    slug: string;
  }[];
  author: {
    name: string;
    bio?: string;
    picture?: {
      url: string;
    };
  };
}
