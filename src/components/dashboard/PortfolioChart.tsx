export function PortfolioChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const portfolioValue = [200000, 210000, 205000, 220000, 235000, 245000, 240000, 260000, 275000, 290000, 305000, 312500];
  const investment = [200000, 210000, 215000, 220000, 225000, 230000, 235000, 240000, 245000, 247500, 250000, 250000];

  const maxValue = Math.max(...portfolioValue);
  const minValue = Math.min(...investment);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Portfolio Performance</h3>
        <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Last 12 Months</option>
          <option>Last 6 Months</option>
          <option>Last 3 Months</option>
          <option>All Time</option>
        </select>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between">
          {months.map((month, index) => (
            <div key={month} className="flex flex-col items-center flex-1">
              <div className="relative w-full flex flex-col items-center">
                <div 
                  className="w-8 bg-blue-500 rounded-t"
                  style={{
                    height: `${((portfolioValue[index] - minValue) / (maxValue - minValue)) * 100}%`,
                    minHeight: '4px'
                  }}
                ></div>
                <div 
                  className="w-8 bg-gray-300 rounded-b"
                  style={{
                    height: `${((investment[index] - minValue) / (maxValue - minValue)) * 100}%`,
                    minHeight: '4px'
                  }}
                ></div>
              </div>
              <span className="text-xs text-gray-600 mt-2">{month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-6 mt-6">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
          <span className="text-sm text-gray-600">Portfolio Value</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
          <span className="text-sm text-gray-600">Investment</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div>
          <div className="text-sm text-gray-600">Current Value</div>
          <div className="text-xl font-semibold text-gray-900">₹3,12,500</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Total Investment</div>
          <div className="text-xl font-semibold text-gray-900">₹2,50,000</div>
        </div>
      </div>
    </div>
  );
}
