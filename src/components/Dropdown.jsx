'use client';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

export default function Dropdown({ onCategoryChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('Select Category');

  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedCategory) => {
    setCategory(selectedCategory);
    onCategoryChange(selectedCategory);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="relative inline-block text-left w-60">
        {/* Dropdown button */}
        <button
          type="button"
          className="flex justify-between items-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onClick={toggleDropdown}
        >
          {category}
          <FaCaretDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1 max-h-60 overflow-y-auto">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
                  onClick={() => handleSelect(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
