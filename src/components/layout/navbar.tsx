'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/src/components/ui/Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMutualFundsDropdownOpen, setIsMutualFundsDropdownOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`transition-all duration-300 ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/60'
      : 'bg-white border-b border-gray-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="shrink-0">
            <Logo size="md" variant="dark" />
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <div className="relative">
              <button
                onMouseEnter={() => setIsMutualFundsDropdownOpen(true)}
                onMouseLeave={() => setIsMutualFundsDropdownOpen(false)}
                className="text-gray-600 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100 flex items-center"
              >
                Mutual Funds
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMutualFundsDropdownOpen && (
                <div
                  onMouseEnter={() => setIsMutualFundsDropdownOpen(true)}
                  onMouseLeave={() => setIsMutualFundsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-xl shadow-xl py-2"
                >
                  <Link href="/funds" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-slate-900 transition-colors">Equity Funds</Link>
                  <Link href="/funds" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-slate-900 transition-colors">Debt Funds</Link>
                  <Link href="/funds" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-slate-900 transition-colors">Hybrid Funds</Link>
                  <Link href="/funds" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-slate-900 transition-colors">Tax Saving (ELSS)</Link>
                </div>
              )}
            </div>

            <Link href="/sip-calculator" className="text-gray-600 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100">SIP Calculator</Link>
            <Link href="/about" className="text-gray-600 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100">About</Link>

            <div className="relative">
              <button
                onMouseEnter={() => setIsLearnDropdownOpen(true)}
                onMouseLeave={() => setIsLearnDropdownOpen(false)}
                className="text-gray-600 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100 flex items-center"
              >
                Learn
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLearnDropdownOpen && (
                <div
                  onMouseEnter={() => setIsLearnDropdownOpen(true)}
                  onMouseLeave={() => setIsLearnDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-xl shadow-xl py-2"
                >
                  <Link href="/learn#why-mutual-funds" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-slate-900 transition-colors">Why Mutual Funds?</Link>
                  <Link href="/learn#sip-vs-lumpsum" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-slate-900 transition-colors">SIP vs Lumpsum</Link>
                  <Link href="/learn#types-of-funds" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-slate-900 transition-colors">Types of Funds</Link>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/enquiry" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]">Request Consultation</Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-slate-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-3 space-y-1">
              <div>
                <button onClick={() => setIsMutualFundsDropdownOpen(!isMutualFundsDropdownOpen)} className="w-full text-left text-gray-700 hover:text-slate-900 px-3 py-2.5 text-base font-medium transition-colors flex items-center justify-between rounded-lg hover:bg-gray-50">
                  Mutual Funds
                  <svg className={`h-4 w-4 transform transition-transform ${isMutualFundsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMutualFundsDropdownOpen && (
                  <div className="pl-6 py-1 space-y-1">
                    <Link href="/funds" className="block text-gray-500 hover:text-slate-900 px-3 py-2 text-sm rounded-lg hover:bg-gray-50">Equity Funds</Link>
                    <Link href="/funds" className="block text-gray-500 hover:text-slate-900 px-3 py-2 text-sm rounded-lg hover:bg-gray-50">Debt Funds</Link>
                    <Link href="/funds" className="block text-gray-500 hover:text-slate-900 px-3 py-2 text-sm rounded-lg hover:bg-gray-50">Hybrid Funds</Link>
                    <Link href="/funds" className="block text-gray-500 hover:text-slate-900 px-3 py-2 text-sm rounded-lg hover:bg-gray-50">Tax Saving (ELSS)</Link>
                  </div>
                )}
              </div>
              <Link href="/sip-calculator" className="block text-gray-700 hover:text-slate-900 px-3 py-2.5 text-base font-medium transition-colors rounded-lg hover:bg-gray-50">SIP Calculator</Link>
              <Link href="/about" className="block text-gray-700 hover:text-slate-900 px-3 py-2.5 text-base font-medium transition-colors rounded-lg hover:bg-gray-50">About</Link>
              <div>
                <button onClick={() => setIsLearnDropdownOpen(!isLearnDropdownOpen)} className="w-full text-left text-gray-700 hover:text-slate-900 px-3 py-2.5 text-base font-medium transition-colors flex items-center justify-between rounded-lg hover:bg-gray-50">
                  Learn
                  <svg className={`h-4 w-4 transform transition-transform ${isLearnDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLearnDropdownOpen && (
                  <div className="pl-6 py-1 space-y-1">
                    <Link href="/learn#why-mutual-funds" className="block text-gray-500 hover:text-slate-900 px-3 py-2 text-sm rounded-lg hover:bg-gray-50">Why Mutual Funds?</Link>
                    <Link href="/learn#sip-vs-lumpsum" className="block text-gray-500 hover:text-slate-900 px-3 py-2 text-sm rounded-lg hover:bg-gray-50">SIP vs Lumpsum</Link>
                    <Link href="/learn#types-of-funds" className="block text-gray-500 hover:text-slate-900 px-3 py-2 text-sm rounded-lg hover:bg-gray-50">Types of Funds</Link>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2 px-3">
                <Link href="/enquiry" className="block bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-base font-semibold rounded-lg transition-all text-center shadow-sm">Request Consultation</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
