'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface FundData {
  id: string;
  name: string;
  category: string;
  risk: string;
  house: string;
  nav: string;
  navDate: string;
  dailyChange: string;
  dailyChangePercent: string;
  isPositive: boolean;
  returns: {
    '1Y': string | null;
    '3Y': string | null;
    '5Y': string | null;
  };
}

export function FundList() {
  const [funds, setFunds] = useState<FundData[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'returns' | 'nav' | 'name'>('returns');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await fetch('/api/funds/live');
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          setFunds(json.data);
        }
      } catch (err) {
        console.error('Failed to fetch fund data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchFunds();
  }, []);

  const getRiskStyle = (risk: string) => {
    switch (risk) {
      case 'High': return 'bg-red-50 text-red-700 border-red-200';
      case 'Moderate-High': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Moderate': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-green-50 text-green-700 border-green-200';
    }
  };

  const getHouseGradient = (house: string) => {
    const colors: Record<string, string> = {
      'HDFC': 'from-blue-600 to-blue-700',
      'Axis': 'from-purple-600 to-purple-700',
      'SBI': 'from-blue-700 to-blue-800',
      'ICICI': 'from-orange-500 to-orange-600',
      'PPFAS': 'from-teal-600 to-teal-700',
      'Nippon': 'from-red-500 to-red-600',
      'Mirae': 'from-sky-500 to-sky-600',
      'Kotak': 'from-red-600 to-red-700',
      'Motilal': 'from-indigo-600 to-indigo-700',
      'Tata': 'from-blue-500 to-blue-600',
      'Canara': 'from-yellow-600 to-yellow-700',
      'DSP': 'from-cyan-600 to-cyan-700',
    };
    return colors[house] || 'from-emerald-600 to-emerald-700';
  };

  // Sorting
  const sortedFunds = [...funds].sort((a, b) => {
    if (sortBy === 'returns') {
      const aRet = a.returns['1Y'] ? parseFloat(a.returns['1Y']) : 0;
      const bRet = b.returns['1Y'] ? parseFloat(b.returns['1Y']) : 0;
      return bRet - aRet;
    }
    if (sortBy === 'nav') return parseFloat(b.nav) - parseFloat(a.nav);
    return a.name.localeCompare(b.name);
  });

  // Filtering
  const categories = ['all', ...Array.from(new Set(funds.map(f => f.category)))];
  const filteredFunds = filterCategory === 'all' ? sortedFunds : sortedFunds.filter(f => f.category === filterCategory);

  if (loading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-40 bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                <div className="flex-1"><div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div><div className="h-3 bg-gray-100 rounded w-1/3"></div></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="h-12 bg-gray-100 rounded-lg"></div><div className="h-12 bg-gray-100 rounded-lg"></div>
                <div className="h-12 bg-gray-100 rounded-lg"></div><div className="h-12 bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header with live indicator */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <p className="text-gray-500 text-sm">{filteredFunds.length} funds</p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] text-emerald-700 font-semibold">LIVE</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${filterCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'returns' | 'nav' | 'name')}
            className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
          >
            <option value="returns">Sort: Returns</option>
            <option value="nav">Sort: NAV</option>
            <option value="name">Sort: Name</option>
          </select>
        </div>
      </div>

      {/* Fund cards */}
      <div className="space-y-4">
        {filteredFunds.map((fund) => (
          <div key={fund.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="lg:flex-1">
                {/* Fund identity */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getHouseGradient(fund.house)} flex items-center justify-center text-white text-xs font-bold shadow-md shrink-0`}>
                    {fund.house.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{fund.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{fund.category}</span>
                      <span className="text-gray-300">&bull;</span>
                      <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full border ${getRiskStyle(fund.risk)}`}>
                        {fund.risk}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Data grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">NAV</div>
                    <div className="text-lg font-bold text-slate-900 mt-0.5">{'\u20B9'}{fund.nav}</div>
                    <div className="text-[10px] text-gray-400">{fund.navDate}</div>
                  </div>
                  <div className={`p-3 rounded-xl ${fund.isPositive ? 'bg-emerald-50' : 'bg-red-50'}`}>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Daily</div>
                    <div className={`text-lg font-bold mt-0.5 ${fund.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                      {fund.isPositive ? '+' : ''}{fund.dailyChangePercent}%
                    </div>
                    <div className={`text-[10px] font-medium ${fund.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                      {fund.isPositive ? '\u25B2' : '\u25BC'} {'\u20B9'}{fund.dailyChange}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">1Y Return</div>
                    <div className={`text-lg font-bold mt-0.5 ${fund.returns['1Y'] && parseFloat(fund.returns['1Y']) >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {fund.returns['1Y'] ? `${fund.returns['1Y']}%` : 'N/A'}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">3Y Return</div>
                    <div className={`text-lg font-bold mt-0.5 ${fund.returns['3Y'] && parseFloat(fund.returns['3Y']) >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {fund.returns['3Y'] ? `${fund.returns['3Y']}%` : 'N/A'}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">5Y Return</div>
                    <div className={`text-lg font-bold mt-0.5 ${fund.returns['5Y'] && parseFloat(fund.returns['5Y']) >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {fund.returns['5Y'] ? `${fund.returns['5Y']}%` : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-row lg:flex-col gap-2 lg:ml-4">
                <Link href={`/funds/${fund.id}`} className="flex-1 lg:flex-none px-6 py-2.5 bg-emerald-600 text-white text-center rounded-xl hover:bg-emerald-500 transition-all font-semibold shadow-md text-sm">
                  View Details
                </Link>
                <Link href={`/enquiry?fund=${encodeURIComponent(fund.name)}`} className="flex-1 lg:flex-none px-6 py-2.5 border-2 border-emerald-600 text-emerald-600 text-center rounded-xl hover:bg-emerald-50 transition-all font-semibold text-sm">
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFunds.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-500">No funds found for this category.</p>
        </div>
      )}
    </div>
  );
}
