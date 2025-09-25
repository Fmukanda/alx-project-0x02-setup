import Head from 'next/head';
import React, { FC } from 'react';
import Header from '@/components/Header';
import Card from '@/components/common/Card'; // Import the new Card component

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-8">🏠 Welcome Home!</h1>
        <p className="text-lg text-gray-700 mb-10">
          This page demonstrates basic routing and the use of a reusable **Card component**.
        </p>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card Instance 1 */}
          <Card 
            title="Next.js Routing"
            content="This application uses the Next.js Pages Router, where file structure (e.g., pages/home.tsx) directly defines the route (/home)."
          />

          {/* Card Instance 2 */}
          <Card 
            title="Component Reusability"
            content="The Card component is reusable and dynamic, accepting TypeScript props for its title and content, making it highly flexible."
          />

          {/* Card Instance 3 */}
          <Card 
            title="Styled with Tailwind"
            content="All styling, including shadows and hover effects, is applied using utility classes from the Tailwind CSS framework."
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
