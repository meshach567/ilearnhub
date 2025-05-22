// File: pages/blog/index.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import { Post } from "../../types/post";
import Image from "next/image";

// GraphQL query to fetch blog posts
const GET_POSTS = gql`
  query GetPosts {
    posts(orderBy: publishedAt_DESC, first: 10) {
      id
      title
      slug
      excerpt
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
        picture {
          url
        }
      }
    }
  }
`;

// Types for the page props
// interface BlogPageProps {
//   posts: Post[];
// }

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await client.query({
          query: GET_POSTS,
        });
        setPosts(data.posts);
        setFilteredPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Get unique categories from posts
  const categories = [
    "all",
    ...new Set(
      posts.flatMap((post) => post.categories.map((category) => category.name)),
    ),
  ];

  // Filter posts when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) =>
          post.categories.some(
            (category) => category.name === selectedCategory,
          ),
        ),
      );
    }
  }, [selectedCategory, posts]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ILearnSchool Blog
            </h1>
            <p className="text-xl md:max-w-2xl">
              Insights, trends, and best practices in online education and
              e-learning technology
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium
                    ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {post.coverImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category) => (
                        <span
                          key={`${post.id}-${category.slug}`}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-900">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      {post.author.picture && (
                        <Image
                          src={post.author.picture.url}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-xl font-medium text-gray-600">
                  No posts found in this category
                </h3>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  View All Posts
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Our Latest Content
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest articles,
              tutorials, and e-learning tips.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
