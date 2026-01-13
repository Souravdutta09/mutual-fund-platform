import Link from 'next/link';

export function FundList() {
  const funds = [
    {
      id: '1',
      name: 'HDFC Top 100 Fund',
      category: 'Large Cap',
      nav: 145.67,
      navDate: '2024-01-01',
      returns: { '1Y': 12.5, '3Y': 14.2, '5Y': 16.8 },
      risk: 'Moderate',
      expenseRatio: 1.25,
      minInvestment: 500,
      aum: 15000000000
    },
    {
      id: '2',
      name: 'Axis Bluechip Fund',
      category: 'Large Cap',
      nav: 52.34,
      navDate: '2024-01-01',
      returns: { '1Y': 11.8, '3Y': 13.5, '5Y': 15.2 },
      risk: 'Moderate',
      expenseRatio: 1.18,
      minInvestment: 500,
      aum: 12000000000
    },
    {
      id: '3',
      name: 'SBI Small Cap Fund',
      category: 'Small Cap',
      nav: 98.45,
      navDate: '2024-01-01',
      returns: { '1Y': 18.2, '3Y': 22.1, '5Y': 19.8 },
      risk: 'High',
      expenseRatio: 1.85,
      minInvestment: 5000,
      aum: 8000000000
    },
    {
      id: '4',
      name: 'ICICI Prudential Debt Fund',
      category: 'Debt',
      nav: 25.67,
      navDate: '2024-01-01',
      returns: { '1Y': 7.2, '3Y': 8.1, '5Y': 8.5 },
      risk: 'Low',
      expenseRatio: 0.95,
      minInvestment: 100,
      aum: 20000000000
    },
    {
      id: '5',
      name: 'Mirae Asset Emerging Bluechip',
      category: 'Mid Cap',
      nav: 78.92,
      navDate: '2024-01-01',
      returns: { '1Y': 15.6, '3Y': 18.3, '5Y': 17.2 },
      risk: 'Moderate-High',
      expenseRatio: 1.45,
      minInvestment: 1000,
      aum: 9500000000
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {funds.length} funds</p>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Sort by: Returns</option>
          <option>Sort by: NAV</option>
          <option>Sort by: AUM</option>
          <option>Sort by: Expense Ratio</option>
        </select>
      </div>

      <div className="space-y-4">
        {funds.map((fund) => (
          <div key={fund.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{fund.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{fund.category}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        fund.risk === 'High' ? 'bg-red-100 text-red-800' :
                        fund.risk === 'Moderate-High' ? 'bg-orange-100 text-orange-800' :
                        fund.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {fund.risk}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">NAV</div>
                    <div className="text-lg font-semibold">₹{fund.nav}</div>
                    <div className="text-xs text-gray-500">{fund.navDate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">1Y Returns</div>
                    <div className="text-lg font-semibold text-green-600">{fund.returns['1Y']}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Expense Ratio</div>
                    <div className="text-lg font-semibold">{fund.expenseRatio}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Min Investment</div>
                    <div className="text-lg font-semibold">₹{fund.minInvestment}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span>AUM: ₹{(fund.aum / 10000000).toFixed(0)}Cr</span>
                  <span>3Y: {fund.returns['3Y']}%</span>
                  <span>5Y: {fund.returns['5Y']}%</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 lg:mt-0 lg:ml-6">
                <Link 
                  href={`/funds/${fund.id}`}
                  className="px-6 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
                <button className="px-6 py-2 border border-blue-600 text-blue-600 text-center rounded-lg hover:bg-blue-50 transition-colors">
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
        </nav>
      </div>
    </div>
  );
}
