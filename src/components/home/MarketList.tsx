'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import MarketCard from '@/components/market/MarketCard';
import { mockMarkets, categories } from '@/lib/mockData';

export default function MarketList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredMarkets = mockMarkets.filter(market => {
        const matchesCategory = selectedCategory === 'All' || market.category === selectedCategory;
        const matchesSearch = market.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search markets..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-3 rounded-lg font-medium whitespace-nowrap transition ${
                                selectedCategory === cat
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMarkets.map(market => (
                    <MarketCard key={market.id} market={market} />
                ))}
            </div>
        </>
    );
}