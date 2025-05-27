"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Calendar,
  ChevronRight,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

type Post = {
  id: number;
  title: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishDate: string;
  category: string;
  tags: string[];
  excerpt: string;
  heroImage: string;
  content: string;
  readTime: number;
  likes: number;
  views: number;
};

// Mock data for demonstration
const mockPosts = [
  {
    id: 1,
    title: "10 Essential JavaScript Concepts Every Developer Should Master",
    slug: "javascript-concepts-developers-master",
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Senior Full-Stack Developer",
    },
    publishDate: "2024-05-20",
    category: "Programming",
    tags: ["JavaScript", "Web Development", "Programming"],
    excerpt:
      "Master these fundamental JavaScript concepts to become a more effective developer and build better applications.",
    heroImage:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
    content: `# JavaScript Fundamentals

JavaScript is the backbone of modern web development. Here are the essential concepts every developer should master:

## 1. Closures and Scope

Understanding how JavaScript handles variable scope and closures is crucial for writing clean, maintainable code.

## 2. Asynchronous Programming

Master promises, async/await, and event loops to handle asynchronous operations effectively.

## 3. Object-Oriented Programming

Learn about prototypes, classes, and inheritance in JavaScript.`,
    readTime: 8,
    likes: 156,
    views: 2840,
  },
  {
    id: 2,
    title: "Platform Update: New Interactive Code Editor Released",
    slug: "platform-update-code-editor-release",
    author: {
      name: "Mike Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Product Manager",
    },
    publishDate: "2024-05-18",
    category: "Platform Updates",
    tags: ["Updates", "Features", "Code Editor"],
    excerpt:
      "We're excited to announce the launch of our new interactive code editor with real-time collaboration features.",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: `# New Interactive Code Editor

We're thrilled to announce the release of our brand new interactive code editor!

## Key Features

- **Real-time Collaboration**: Work together with your peers
- **Syntax Highlighting**: Support for 20+ programming languages
- **Auto-completion**: Intelligent code suggestions
- **Integrated Terminal**: Run your code directly in the browser

This update represents months of development and user feedback integration.`,
    readTime: 5,
    likes: 89,
    views: 1560,
  },
  {
    id: 3,
    title: "Learning Tips: How to Stay Motivated While Coding",
    slug: "learning-tips-stay-motivated-coding",
    author: {
      name: "Emily Johnson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Learning Experience Designer",
    },
    publishDate: "2024-05-15",
    category: "Learning Tips",
    tags: ["Motivation", "Learning", "Career Development"],
    excerpt:
      "Discover proven strategies to maintain your coding motivation and achieve your programming goals consistently.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    content: `# Staying Motivated While Learning to Code

Learning to code can be challenging, but with the right mindset and strategies, you can maintain your motivation throughout your journey.

## Set Clear Goals

- Define specific, measurable objectives
- Break large goals into smaller milestones
- Celebrate your achievements

## Build a Learning Routine

- Dedicate consistent time daily
- Create a distraction-free environment
- Track your progress

## Join a Community

- Connect with fellow learners
- Share your progress and challenges
- Learn from others' experiences`,
    readTime: 6,
    likes: 124,
    views: 2150,
  },
  {
    id: 4,
    title:
      "Instructor Spotlight: Meet Dr. Alex Thompson, AI & Machine Learning Expert",
    slug: "instructor-spotlight-alex-thompson-ai-ml",
    author: {
      name: "Lisa Park",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: "Content Marketing Manager",
    },
    publishDate: "2024-05-12",
    category: "Instructor Highlights",
    tags: ["Instructor", "AI", "Machine Learning", "Interview"],
    excerpt:
      "Get to know Dr. Alex Thompson, our newest AI and Machine Learning instructor, and learn about his journey in tech education.",
    heroImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    content: `# Meet Dr. Alex Thompson

We're excited to introduce Dr. Alex Thompson, our newest instructor specializing in AI and Machine Learning.

## Background

Dr. Thompson brings over 15 years of experience in artificial intelligence research and has published over 50 papers in top-tier conferences.

## Teaching Philosophy

"I believe in making complex concepts accessible through practical examples and hands-on projects."

## Courses Available

- Introduction to Machine Learning
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
- Natural Language Processing
- Computer Vision Applications

Join his courses to learn from one of the industry's leading experts!`,
    readTime: 4,
    likes: 201,
    views: 3420,
  },
];

const categories = [
  "All",
  "Programming",
  "Platform Updates",
  "Learning Tips",
  "Instructor Highlights",
];

const Blog = () => {
  const posts = mockPosts;
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [currentView, setCurrentView] = useState("listing"); // 'listing' or 'detail'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState(new Set());

  // Filter posts based on search and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setCurrentView("detail");
  };

  const handleBackToListing = () => {
    setCurrentView("listing");
    setSelectedPost(null);
  };

  const handleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (currentView === "detail" && selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <button
              onClick={handleBackToListing}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
              Back to Blog
            </button>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                EduPlatform Blog
              </h1>
              <div className="flex items-center space-x-4">
                <button
                  aria-label="heart icon"
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedPosts.has(selectedPost.id) ? "fill-current" : ""
                    }`}
                  />
                  <span>
                    {selectedPost.likes +
                      (likedPosts.has(selectedPost.id) ? 1 : 0)}
                  </span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Image */}
          <div>
            <Image
              src={selectedPost.heroImage}
              alt={selectedPost.title}
              width={800}
              height={384}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {selectedPost.category}
              </span>
              <span className="text-gray-500 text-sm">
                {selectedPost.readTime} min read
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={selectedPost.author.avatar}
                alt={selectedPost.author.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  {selectedPost.author.name}
                </p>
                <p className="text-sm text-gray-600">
                  {selectedPost.author.bio}
                </p>
              </div>
              <div className="flex items-center text-gray-500 text-sm ml-auto">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(selectedPost.publishDate)}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-800 leading-relaxed">
              {selectedPost.content}
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleLike(selectedPost.id)}
                className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${likedPosts.has(selectedPost.id) ? "fill-current" : ""}`}
                />
                <span>Like this article</span>
              </button>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span>{selectedPost.views} views</span>
                <span>
                  {selectedPost.likes +
                    (likedPosts.has(selectedPost.id) ? 1 : 0)}{" "}
                  likes
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                EduPlatform Blog
              </h1>
              <p className="text-gray-600">
                Insights, updates, and learning resources for developers
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">{posts.length} Articles</span>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">15.2K</p>
                <p className="text-gray-600">Monthly Readers</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">850</p>
                <p className="text-gray-600">Newsletter Subscribers</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-gray-600">Expert Contributors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <div className="relative">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.publishDate)}
                      <span className="mx-2">•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-gray-400 text-xs">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(post.id);
                      }}
                      className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${likedPosts.has(post.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                      <span>
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </button>
                    <span>{post.views} views</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6">
            Get the latest articles and platform updates delivered to your
            inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
