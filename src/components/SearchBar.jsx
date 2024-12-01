import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="my-8">
      <input
        type="text"
        placeholder="Search recipes by ingredients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
