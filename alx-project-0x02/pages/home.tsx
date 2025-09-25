import Head from 'next/head';
import React, { FC, useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/common/Card'; 
import PostModal from '@/components/common/PostModal'; // Import the new Modal component
import { PostData } from '@/interfaces'; // Import the interface

// Initial static content array (uses PostData structure)
const initialPosts: PostData[] = [
  {
    title: "Next.js Routing",
    content: "This application uses the Next.js Pages Router, where file structure directly defines the route (/home)."
  },
  {
    title: "Component Reusability",
    content: "The Card component is reusable and dynamic, accepting TypeScript props for its title and content, making it highly flexible."
  },
  {
    title: "Styled with Tailwind",
    content: "All styling, including shadows and hover effects, is applied using utility classes from the Tailwind CSS framework."
  }
];

const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>(initialPosts); // State to hold all posts

  // Function to handle the data coming back from the modal
  const handleAddPost = (newPost: PostData) => {
    // Add the new post to the beginning of the posts array
    setPosts([newPost, ...posts]); 
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-10">
            <h1 className="text-5xl font-extrabold text-indigo-700">🏠 Dashboard</h1>
            
            {/* Button to open the modal */}
            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-200"
            >
                ➕ Create New Post
            </button>
        </div>
        
        <p className="text-lg text-gray-700 mb-10">
          Newly added posts via the modal will appear at the top of the grid.
        </p>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                // Use a unique key for list items
                <Card 
                    key={index} // Use a more stable ID in a real app
                    title={post.title}
                    content={post.content}
                />
            ))}
        </div>
      </main>
      
      {/* The Modal Component */}
      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost} // Pass the handler to receive the data
      />
    </>
  );
};

export default HomePage;
