import React, { useState } from 'react';
import { FaBolt } from 'react-icons/fa';
import { teams } from './data/teams';
import { TeamCard } from './components/TeamCard';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || team.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <FaBolt size={40} className="mr-2" />
            <h1 className="text-4xl font-bold">Japan Web3 Directory</h1>
          </div>
          <p className="text-center text-xl text-indigo-100 max-w-2xl mx-auto">
            Discover the innovative teams and individuals shaping the future of Web3 and NFTs in Japan
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No teams found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            Discover the best Web3 and NFT teams in Japan
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;