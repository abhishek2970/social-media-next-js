'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import News from './News';
import Loader from './Loading'; // 👈 import your Loader

export default function Rightsidebar() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // 👈 loading state
  const router = useRouter();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true); // show loader
    router.push(`/search/${input}`);

    // Optional: hide loader after navigation (since Next.js navigation is instant)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <form onSubmit={handlesubmit} className="relative w-full">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                     transition-all duration-300"
        />
      </form>

      {/* Loader or News */}
      {loading ? (
        <div className="flex justify-center mt-6">
          <Loader /> {/* 👈 your loader */}
        </div>
      ) : (
        <News />
      )}
    </div>
  );
}
