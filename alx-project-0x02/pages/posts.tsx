import Head from 'next/head';
import React, { FC, useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard'; 
import { PostProps } from '@/interfaces'; 
// getStaticProps

const PostsPage: FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetching 10 posts from JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts from API.');
        }
        
        const data: PostProps[] = await response.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Run only once on component mount

  // Conditional Rendering
  let content;
  if (loading) {
    content = <p className="text-xl text-indigo-500 text-center">Loading posts...</p>;
  } else if (error) {
    content = <p className="text-xl text-red-500 text-center">Error: {error}</p>;
  } else if (posts.length === 0) {
    content = <p className="text-xl text-gray-500 text-center">No posts found.</p>;
  } else {
    // Display the grid of PostCards
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard 
            key={post.id}
            title={post.title}
            body={post.body} // Using 'body' to match the API and interface
            userId={post.userId}
            id={post.id}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>All Posts</title>
      </Head>
      <Header />
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-teal-700 mb-10">📰 Fetched Posts</h1>
        
        {content}
        
      </main>
    </>
  );
};

export default PostsPage;
