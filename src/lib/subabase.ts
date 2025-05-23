import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client for frontend
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for backend operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export class BlogService {
  static async getAllPosts(
    page = 1,
    limit = 10,
    category?: string,
    tag?: string,
    search?: string,
  ) {
    let query = supabase
      .from("blog_posts")
      .select(
        `
        *,
        categories:post_categories(category:categories(*)),
        tags:post_tags(tag:tags(*))
      `,
      )
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (search) {
      query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`);
    }

    const {
      data: posts,
      error,
      count,
    } = await query.range((page - 1) * limit, page * limit - 1);

    if (error) throw error;

    return {
      posts: posts || [],
      totalCount: count || 0,
      currentPage: page,
      totalPages: Math.ceil((count || 0) / limit),
    };
  }

  static async getPostBySlug(slug: string) {
    const { data: post, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        categories:post_categories(category:categories(*)),
        tags:post_tags(tag:tags(*))
      `,
      )
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error) throw error;

    // Increment view count
    await supabase
      .from("blog_posts")
      .update({ views_count: (post.views_count || 0) + 1 })
      .eq("id", post.id);

    return post;
  }

  static async getRelatedPosts(postId: string, tags: string[], limit = 3) {
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        categories:post_categories(category:categories(*)),
        tags:post_tags(tag:tags(*))
      `,
      )
      .neq("id", postId)
      .eq("is_published", true)
      .limit(limit);

    if (error) throw error;
    return posts || [];
  }
}
