import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import { useMovieSearch } from './hooks/useMovieSearch';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const { movies, loading, error } = useMovieSearch(query);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    // console.log(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        🎥 Movie Search App
      </h1>

      <SearchBar onSearch={handleSearch} />
      {loading && (
        <p className="text-center text-gray-600 text-lg">Loading movies...</p>
      )}

      {error && (
        <p className="text-center text-red-600 text-lg">Error: {error}</p>
      )}

      {!loading && !error && movies.length === 0 && query && (
        <p className="text-center text-gray-500">
          No movies found for '{query}'
        </p>
      )}

      {!loading && !error && movies.length > 0 && <MovieGrid movies={movies} />}
    </div>
  );
};

export default App;
