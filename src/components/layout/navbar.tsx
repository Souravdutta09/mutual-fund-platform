'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMutualFundsDropdownOpen, setIsMutualFundsDropdownOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Left - Brand */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Alok Kumar Dutta
            </Link>
          </div>

          {/* Center - Primary Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsMutualFundsDropdownOpen(true)}
                onMouseLeave={() => setIsMutualFundsDropdownOpen(false)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors flex items-center"
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
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                >
            <Link href="/funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Equity Funds
                  </Link>
                  <Link href="/funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Debt Funds
                  </Link>
                  <Link href="/funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Hybrid Funds
                  </Link>
                  <Link href="/funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Tax Saving (ELSS)
                  </Link>
                </div>
              )}
            </div>

            <Link href="/sip-calculator" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              SIP
            </Link>

            <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Portfolio
            </Link>

            <Link href="/sip-calculator" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Calculators
            </Link>

            <div className="relative">
              <button
                onMouseEnter={() => setIsLearnDropdownOpen(true)}
                onMouseLeave={() => setIsLearnDropdownOpen(false)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors flex items-center"
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
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                >
                  <Link href="/learn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Beginner Guide
                  </Link>
                  <Link href="/learn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    SIP Explained
                  </Link>
                  <Link href="/learn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Market Basics
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right - Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-blue-600 text-white px-6 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-2 space-y-1">
              {/* Mutual Funds Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setIsMutualFundsDropdownOpen(!isMutualFundsDropdownOpen)}
                  className="w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-colors flex items-center justify-between"
                >
                  Mutual Funds
                  <svg className={`h-4 w-4 transform transition-transform ${isMutualFundsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMutualFundsDropdownOpen && (
                  <div className="pl-6 py-2 space-y-1">
                    <Link href="/funds" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
                      Equity Funds
                    </Link>
                    <Link href="/funds" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
                      Debt Funds
                    </Link>
                    <Link href="/funds" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
                      Hybrid Funds
                    </Link>
                    <Link href="/funds" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
                      Tax Saving (ELSS)
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/sip-calculator" className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-colors">
                SIP
              </Link>

              <Link href="/portfolio" className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-colors">
                Portfolio
              </Link>

              <Link href="/sip-calculator" className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-colors">
                Calculators
              </Link>

              {/* Learn Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setIsLearnDropdownOpen(!isLearnDropdownOpen)}
                  className="w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-colors flex items-center justify-between"
                >
                  Learn
                  <svg className={`h-4 w-4 transform transition-transform ${isLearnDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLearnDropdownOpen && (
                  <div className="pl-6 py-2 space-y-1">
                    <Link href="/learn" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
                      Beginner Guide
                    </Link>
                    <Link href="/learn" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
                      SIP Explained
                    </Link>
                    <Link href="/learn" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm">
                      Market Basics
                    </Link>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                <Link href="/auth/login" className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-colors">
                  Login
                </Link>
                <Link href="/auth/signup" className="block bg-blue-600 text-white px-3 py-2 text-base font-medium rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
