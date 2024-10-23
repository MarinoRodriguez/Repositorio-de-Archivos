import React from 'react';
import { Search } from 'lucide-react';
import { useStore } from '../store/useStore';

export const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useStore();

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search files by title or description..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};