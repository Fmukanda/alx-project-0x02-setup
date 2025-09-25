import Head from 'next/head';
import React from 'react';
import Header from '../components/Header'; 

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">ℹ️ About Our Application</h1>
        <p className="text-lg text-gray-700">
          This page provides information about the application and its purpose, accessible at the <code className="bg-gray-200 p-1 rounded">/about</code> route.
        </p>
        <div className="mt-8 p-4 bg-white shadow-md rounded-lg border-l-4 border-green-500">
            <p className="font-semibold text-gray-800">Tailwind CSS makes styling fast and efficient!</p>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
