import SearchBar from './components/SearchBar';

const App = () => {
  const handleSearch = (query: string) => {
    console.log('Search for:', query);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        🎥 Movie Search App
      </h1>

      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
