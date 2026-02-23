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

export function FeaturedFunds() {
  const [funds, setFunds] = useState<FundData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await fetch('/api/funds/live');
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          // Show top 6 for featured
          setFunds(json.data.slice(0, 6));
        }
      } catch (err) {
        console.error('Failed to fetch fund data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchFunds();
  }, []);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'bg-red-50 text-red-700 border-red-200';
      case 'Moderate-High': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Moderate': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-green-50 text-green-700 border-green-200';
    }
  };

  const getHouseColor = (house: string) => {
    const colors: Record<string, string> = {
      'HDFC': 'from-blue-600 to-blue-700',
      'Axis': 'from-purple-600 to-purple-700',
      'SBI': 'from-blue-700 to-blue-800',
      'ICICI': 'from-orange-500 to-orange-600',
      'PPFAS': 'from-teal-600 to-teal-700',
      'Nippon': 'from-red-500 to-red-600',
      'Mirae': 'from-sky-500 to-sky-600',
      'Kotak': 'from-red-600 to-red-700',
    };
    return colors[house] || 'from-emerald-600 to-emerald-700';
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Funds</h2>
            <p className="text-lg text-gray-500">Loading live fund data...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
                  <div className="flex-1"><div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div><div className="h-3 bg-gray-100 rounded w-1/2"></div></div>
                </div>
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="grid grid-cols-3 gap-2"><div className="h-12 bg-gray-100 rounded-lg"></div><div className="h-12 bg-gray-100 rounded-lg"></div><div className="h-12 bg-gray-100 rounded-lg"></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (funds.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Funds</h2>
          <p className="text-lg text-gray-500">Top-performing mutual funds with live NAV data</p>
          <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 bg-emerald-50 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-emerald-700 font-medium">Live Data</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funds.map((fund) => (
            <div key={fund.id} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
              {/* Fund header with AMC logo */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getHouseColor(fund.house)} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                    {fund.house.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">{fund.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-500">{fund.category}</span>
                      <span className={`px-1.5 py-0.5 text-[10px] font-semibold rounded-full border ${getRiskColor(fund.risk)}`}>
                        {fund.risk}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NAV & Daily Change */}
              <div className="flex items-end justify-between mb-5 pb-4 border-b border-gray-100">
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">NAV</div>
                  <div className="text-2xl font-bold text-slate-900">{'\u20B9'}{fund.nav}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{fund.navDate}</div>
                </div>
                <div className={`text-right px-3 py-1.5 rounded-lg ${fund.isPositive ? 'bg-emerald-50' : 'bg-red-50'}`}>
                  <div className={`text-sm font-bold ${fund.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                    {fund.isPositive ? '+' : ''}{fund.dailyChange}
                  </div>
                  <div className={`text-xs font-medium ${fund.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                    {fund.isPositive ? '\u25B2' : '\u25BC'} {fund.dailyChangePercent}%
                  </div>
                </div>
              </div>

              {/* Returns grid */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="text-center p-2.5 bg-gray-50 rounded-xl">
                  <div className={`text-sm font-bold ${fund.returns['1Y'] && parseFloat(fund.returns['1Y']) >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {fund.returns['1Y'] ? `${fund.returns['1Y']}%` : 'N/A'}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium mt-0.5">1Y Return</div>
                </div>
                <div className="text-center p-2.5 bg-gray-50 rounded-xl border-x border-white">
                  <div className={`text-sm font-bold ${fund.returns['3Y'] && parseFloat(fund.returns['3Y']) >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {fund.returns['3Y'] ? `${fund.returns['3Y']}%` : 'N/A'}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium mt-0.5">3Y Return</div>
                </div>
                <div className="text-center p-2.5 bg-gray-50 rounded-xl">
                  <div className={`text-sm font-bold ${fund.returns['5Y'] && parseFloat(fund.returns['5Y']) >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {fund.returns['5Y'] ? `${fund.returns['5Y']}%` : 'N/A'}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium mt-0.5">5Y Return</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2">
                <Link href={`/funds/${fund.id}`} className="block w-full text-center px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all duration-200 font-semibold shadow-md hover:shadow-lg text-sm">
                  View Details
                </Link>
                <Link href={`/enquiry?fund=${encodeURIComponent(fund.name)}`} className="block w-full text-center px-4 py-2.5 border-2 border-emerald-600 text-emerald-600 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-sm">
                  Request Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/funds" className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-200">
            View All Funds
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
