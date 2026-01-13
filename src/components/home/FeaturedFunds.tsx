import Link from 'next/link';

export function FeaturedFunds() {
  const funds = [
    {
      id: '1',
      name: 'HDFC Top 100 Fund',
      category: 'Large Cap',
      nav: 145.67,
      returns: { '1Y': 12.5, '3Y': 14.2, '5Y': 16.8 },
      risk: 'Moderate'
    },
    {
      id: '2',
      name: 'Axis Bluechip Fund',
      category: 'Large Cap',
      nav: 52.34,
      returns: { '1Y': 11.8, '3Y': 13.5, '5Y': 15.2 },
      risk: 'Moderate'
    },
    {
      id: '3',
      name: 'SBI Small Cap Fund',
      category: 'Small Cap',
      nav: 98.45,
      returns: { '1Y': 18.2, '3Y': 22.1, '5Y': 19.8 },
      risk: 'High'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Funds</h2>
          <p className="text-lg text-gray-600">Top-performing mutual funds selected by our experts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funds.map((fund) => (
            <div key={fund.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{fund.name}</h3>
                  <p className="text-sm text-gray-600">{fund.category}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  fund.risk === 'High' ? 'bg-red-100 text-red-800' :
                  fund.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {fund.risk}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">₹{fund.nav}</div>
                <div className="text-sm text-gray-600">Current NAV</div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <div className="text-sm font-semibold text-green-600">{fund.returns['1Y']}%</div>
                  <div className="text-xs text-gray-600">1Y</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-green-600">{fund.returns['3Y']}%</div>
                  <div className="text-xs text-gray-600">3Y</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-green-600">{fund.returns['5Y']}%</div>
                  <div className="text-xs text-gray-600">5Y</div>
                </div>
              </div>
              
              <Link 
                href={`/funds/${fund.id}`}
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/funds"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            View All Funds
          </Link>
        </div>
      </div>
    </section>
  );
}
