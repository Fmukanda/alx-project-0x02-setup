import Head from 'next/head';
import React, { FC, useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard'; 
import { UserProps } from '../interfaces';

const UsersPage: FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetching user data from JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data.');
        }
        
        const data: UserProps[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run only once

  // Conditional Rendering based on fetch state
  let content;
  if (loading) {
    content = <p className="text-xl text-purple-500 text-center">Loading users...</p>;
  } else if (error) {
    content = <p className="text-xl text-red-500 text-center">Error: {error}</p>;
  } else if (users.length === 0) {
    content = <p className="text-xl text-gray-500 text-center">No users found.</p>;
  } else {
    // Display the grid of UserCards
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <UserCard 
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
            website={user.website}
            phone={user.phone}
            id={user.id}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>All Users</title>
      </Head>
      <Header />
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-10">👤 All Users</h1>
        
        {content}
        
      </main>
    </>
  );
};

export default UsersPage;
