'use client';

export function FundFilters() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <div className="space-y-2">
            {['Large Cap', 'Mid Cap', 'Small Cap', 'Debt', 'Hybrid'].map((category) => (
              <label key={category} className="flex items-center">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Risk Level</label>
          <div className="space-y-2">
            {['Low', 'Moderate', 'Moderate-High', 'High'].map((risk) => (
              <label key={risk} className="flex items-center">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">{risk}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Returns (1Y)</label>
          <div className="space-y-2">
            {['0-5%', '5-10%', '10-15%', '15%+'].map((range) => (
              <label key={range} className="flex items-center">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">{range}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expense Ratio</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All</option>
            <option>0-1%</option>
            <option>1-2%</option>
            <option>2%+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Min Investment</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Any</option>
            <option>₹100-₹500</option>
            <option>₹500-₹1000</option>
            <option>₹1000+</option>
          </select>
        </div>

        <div className="pt-4 border-t border-gray-200 space-y-2">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Apply Filters
          </button>
          <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
