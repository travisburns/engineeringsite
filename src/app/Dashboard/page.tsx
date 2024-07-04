"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar'
import Footer from '../constants/footer/Footer'

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      fetch('/api/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          localStorage.removeItem('token');
          router.push('/login');
        } else {
          setUser(data);
        }
      })
      .catch(err => {
        console.error(err);
        router.push('/login');
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  );

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white">
            Welcome to your Dashboard
          </h1>
          {user && (
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">User Information</h2>
              <p className="text-gray-300 mb-2">Username: {user.username}</p>
              <p className="text-gray-300 mb-2">Email: {user.email}</p>
              {/* Add more user information as needed */}
            </div>
          )}
          {/* Add more dashboard content here */}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Dashboard;