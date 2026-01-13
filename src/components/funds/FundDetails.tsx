import Link from 'next/link';

interface FundDetailsProps {
  fundId: string;
}

export function FundDetails({ fundId }: FundDetailsProps) {
  const fund = {
    id: fundId,
    name: 'HDFC Top 100 Fund',
    category: 'Large Cap',
    risk: 'Moderate',
    nav: 145.67,
    navDate: '2024-01-01',
    minInvestment: 500,
    expenseRatio: 1.25,
    description: 'An open-ended equity scheme predominantly investing in large cap stocks.',
    fundManager: 'Prashant Jain',
    aum: 15000000000,
    inceptionDate: '2010-01-01',
    returns: {
      '1Y': 12.5,
      '3Y': 14.2,
      '5Y': 16.8,
      'sinceInception': 15.2
    },
    holdings: [
      { name: 'Reliance Industries', percentage: 8.5, sector: 'Energy' },
      { name: 'HDFC Bank', percentage: 7.2, sector: 'Banking' },
      { name: 'ICICI Bank', percentage: 6.8, sector: 'Banking' },
      { name: 'Infosys', percentage: 5.9, sector: 'Technology' },
      { name: 'TCS', percentage: 5.4, sector: 'Technology' }
    ],
    navHistory: [
      { date: '2024-01-01', nav: 145.67 },
      { date: '2023-12-01', nav: 142.34 },
      { date: '2023-11-01', nav: 138.92 },
      { date: '2023-10-01', nav: 135.45 },
      { date: '2023-09-01', nav: 132.18 }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <Link href="/funds" className="hover:text-blue-600">Funds</Link>
        <span>/</span>
        <span>{fund.name}</span>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{fund.name}</h1>
            <div className="flex items-center gap-3 text-gray-600">
              <span>{fund.category}</span>
              <span>•</span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                fund.risk === 'High' ? 'bg-red-100 text-red-800' :
                fund.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {fund.risk}
              </span>
            </div>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Invest Now
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Add to Watchlist
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="text-sm text-gray-600 mb-1">Current NAV</div>
            <div className="text-2xl font-bold">₹{fund.nav}</div>
            <div className="text-xs text-gray-500">{fund.navDate}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">1Y Returns</div>
            <div className="text-2xl font-bold text-green-600">{fund.returns['1Y']}%</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Expense Ratio</div>
            <div className="text-2xl font-bold">{fund.expenseRatio}%</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Min Investment</div>
            <div className="text-2xl font-bold">₹{fund.minInvestment}</div>
          </div>
        </div>

        <p className="text-gray-700 mb-8">{fund.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">1 Year</span>
                <span className="font-semibold text-green-600">{fund.returns['1Y']}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">3 Years</span>
                <span className="font-semibold text-green-600">{fund.returns['3Y']}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">5 Years</span>
                <span className="font-semibold text-green-600">{fund.returns['5Y']}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Since Inception</span>
                <span className="font-semibold text-green-600">{fund.returns.sinceInception}%</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fund Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Fund Manager</span>
                <span className="font-semibold">{fund.fundManager}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">AUM</span>
                <span className="font-semibold">₹{(fund.aum / 10000000).toFixed(0)} Cr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Inception Date</span>
                <span className="font-semibold">{fund.inceptionDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Exit Load</span>
                <span className="font-semibold">1% (1Y)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Holdings</h3>
          <div className="space-y-3">
            {fund.holdings.map((holding, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-900">{holding.name}</div>
                  <div className="text-sm text-gray-600">{holding.sector}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{holding.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">NAV History</h3>
          <div className="space-y-3">
            {fund.navHistory.map((entry, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{entry.date}</span>
                <span className="font-semibold">₹{entry.nav}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
