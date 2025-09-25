import Head from 'next/head';
import React, { FC } from 'react';
import Header from '@/components/Header';
import Button from '@/components/common/Button'; 

const AboutPage: FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-green-700 mb-8">ℹ️ About Our Application</h1>
        
        <p className="text-lg text-gray-700 mb-12">
          This page demonstrates the usage of a reusable **Button component** with dynamic size and shape props.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Button Variations</h2>
        
        <div className="space-y-8">
            
            {/* Example 1: Small & Sharp (rounded-sm) */}
            <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-6">
                <span className="font-medium text-gray-700 w-28">Small & Sharp:</span>
                <Button 
                    size="small" 
                    shape="rounded-sm" 
                    onClick={() => alert('Small button clicked!')}
                >
                    Small Action
                </Button>
            </div>
            
            {/* Example 2: Medium & Default (rounded-md) */}
            <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-6">
                <span className="font-medium text-gray-700 w-28">Medium & Default:</span>
                <Button 
                    size="medium" 
                    shape="rounded-md"
                >
                    Medium Action
                </Button>
            </div>
            
            {/* Example 3: Large & Pill (rounded-full) */}
            <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-6">
                <span className="font-medium text-gray-700 w-28">Large & Pill:</span>
                <Button 
                    size="large" 
                    shape="rounded-full"
                    className="bg-purple-600 hover:bg-purple-700" // Custom style override
                >
                    Large Action
                </Button>
            </div>
            
        </div>
      </main>
    </>
  );
};

export default AboutPage;
