export function TopPerformers() {
  const funds = [
    {
      name: 'SBI Small Cap Fund',
      returns: 18.2,
      category: 'Small Cap',
      trend: 'up'
    },
    {
      name: 'Mirae Asset Emerging Bluechip',
      returns: 15.6,
      category: 'Mid Cap',
      trend: 'up'
    },
    {
      name: 'HDFC Top 100 Fund',
      returns: 12.5,
      category: 'Large Cap',
      trend: 'up'
    },
    {
      name: 'Axis Bluechip Fund',
      returns: 11.8,
      category: 'Large Cap',
      trend: 'down'
    },
    {
      name: 'ICICI Prudential Debt Fund',
      returns: 7.2,
      category: 'Debt',
      trend: 'up'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
        <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>1 Year</option>
          <option>3 Years</option>
          <option>5 Years</option>
        </select>
      </div>

      <div className="space-y-4">
        {funds.map((fund, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{fund.name}</div>
              <div className="text-xs text-gray-600">{fund.category}</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <div className={`text-sm font-semibold ${
                  fund.returns > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {fund.trend === 'up' ? '+' : ''}{fund.returns}%
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                fund.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <svg className={`w-4 h-4 ${
                  fund.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {fund.trend === 'up' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  )}
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-center text-sm text-blue-600 hover:text-blue-500 font-medium">
        View All Funds
      </button>
    </div>
  );
}
