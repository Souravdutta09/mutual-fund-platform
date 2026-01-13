'use client';

import { useState } from 'react';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio</h1>
          <p className="text-gray-600">Track and manage your investment portfolio</p>
        </div>

        <div className="bg-white rounded-lg shadow">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('holdings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'holdings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Holdings
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'performance'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Performance
              </button>
              <button
                onClick={() => setActiveTab('transactions')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'transactions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Transactions
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Overview</h2>
                <p className="text-gray-600 mb-6">Sign in to view your complete portfolio overview and analytics.</p>
                <div className="space-x-4">
                  <a href="/auth/login" className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Login
                  </a>
                  <a href="/auth/signup" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'holdings' && (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Holdings</h2>
                <p className="text-gray-600">View your mutual fund holdings and asset allocation.</p>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Performance</h2>
                <p className="text-gray-600">Track your portfolio performance and returns over time.</p>
              </div>
            )}

            {activeTab === 'transactions' && (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Transactions</h2>
                <p className="text-gray-600">View your investment history and transaction records.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}