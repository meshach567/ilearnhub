// File: pages/blog/[slug].tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import { GetStaticProps, GetStaticPaths } from "next";
import client from "../../lib/apollo-client";
import { Post } from "../../types/post";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";

// GraphQL query to fetch a single post by slug
const GET_POST = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      content {
        html
      }
      publishedAt
      coverImage {
        url
        width
        height
      }
      categories {
        name
        slug
      }
      author {
        name
        bio
        picture {
          url
        }
      }
    }
  }
`;

// GraphQL query to fetch all post slugs
const GET_POST_SLUGS = gql`
  query GetPostSlugs {
    posts {
      slug
    }
  }
`;

// GraphQL query to fetch related posts
const GET_RELATED_POSTS = gql`
  query GetRelatedPosts($slug: String!, $categoryIn: [String!]) {
    posts(
      where: { slug_not: $slug, categories_some: { slug_in: $categoryIn } }
      first: 3
    ) {
      id
      title
      slug
      excerpt
      coverImage {
        url
      }
    }
  }
`;

interface PostPageProps {
  post: Post;
  relatedPosts: Post[];
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function PostPage({ post, relatedPosts }: PostPageProps) {
  const [isCommenting, setIsCommenting] = useState(false);

  if (!post) {
    return <div>Loading...</div>;
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section with Post Cover Image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] bg-gray-900">
          {post.coverImage && (
            <div className="absolute inset-0">
              <Image
                src={post.coverImage.url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          )}
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <Link
                  href={`/blog?category=${category.slug}`}
                  key={category.slug}
                  className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center">
              {post.author.picture && (
                <Image
                  src={post.author.picture.url}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3 border-2 border-white"
                />
              )}
              <div className="text-white">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm">{publishedDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
              {/* Post Content */}
              <div className="prose prose-lg max-w-none">
                {post.content && (
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.html }}
                  />
                )}
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold mb-4">About the Author</h2>
                <div className="flex items-start">
                  {post.author.picture && (
                    <Image
                      src={post.author.picture.url}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-medium">{post.author.name}</h3>
                    <p className="text-gray-600 mt-2">{post.author.bio}</p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold mb-6">Comments</h2>

                {isCommenting ? (
                  <form className="mb-8">
                    <div className="mb-4">
                      <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Comment
                      </label>
                      <textarea
                        id="comment"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Share your thoughts..."
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Post Comment
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                        onClick={() => setIsCommenting(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-8"
                    onClick={() => setIsCommenting(true)}
                  >
                    Add a Comment
                  </button>
                )}

                <div className="space-y-6">
                  <p className="text-gray-500 italic">
                    No comments yet. Be the first to share your thoughts!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    key={relatedPost.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {relatedPost.coverImage && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.coverImage.url}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <p className="text-blue-600 mt-4 font-medium">
                        Read more →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_POST_SLUGS,
  });

  const paths = data.posts.map((post: { slug: string }) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;

  try {
    const { data } = await client.query({
      query: GET_POST,
      variables: { slug },
    });

    if (!data.post) {
      return {
        notFound: true,
      };
    }

    // Fetch related posts
    const categorySlugs = data.post.categories.map(
      (cat: { slug: string }) => cat.slug,
    );
    const { data: relatedData } = await client.query({
      query: GET_RELATED_POSTS,
      variables: {
        slug,
        categoryIn: categorySlugs,
      },
    });

    return {
      props: {
        post: data.post,
        relatedPosts: relatedData.posts,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true,
    };
  }
};
