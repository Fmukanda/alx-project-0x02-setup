import Head from 'next/head';
import React, { FC } from 'react';
import Header from '@/components/layout/Header'; 

const PostsPage: FC = () => {
  return (
    <>
      <Head>
        <title>All Posts</title>
      </Head>
      <Header />
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-teal-700 mb-8">📰 All Posts Content</h1>
        <p className="text-lg text-gray-700">
          This page currently serves as a placeholder for the `/posts` route. In a real application, 
          you would display a list of all submitted posts here.
        </p>
        <div className="mt-8 p-4 bg-white shadow-md rounded-lg border-l-4 border-teal-500">
            <p className="font-semibold text-gray-800">
                You can navigate to the Home or About page using the Header above.
            </p>
        </div>
      </main>
    </>
  );
};

export default PostsPage;
