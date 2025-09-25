import Head from 'next/head';
import React from 'react';
import Header from '../components/Header'; 

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">🏠 Welcome Home!</h1>
        <p className="text-lg text-gray-700">
          This is the main content for the home page, accessible at the <code className="bg-gray-200 p-1 rounded">/home</code> route.
        </p>
        <div className="mt-8 p-4 bg-white shadow-md rounded-lg border-l-4 border-indigo-500">
            <p className="font-semibold text-gray-800">Routing is implemented using Next.js Pages Router.</p>
        </div>
      </main>
    </>
  );
};

export default HomePage;
