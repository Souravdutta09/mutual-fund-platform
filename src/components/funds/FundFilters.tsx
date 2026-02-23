'use client';

export function FundFilters() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Filters</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
          <div className="space-y-2">
            {['Large Cap', 'Mid Cap', 'Small Cap', 'Debt', 'Hybrid'].map((category) => (
              <label key={category} className="flex items-center cursor-pointer group">
                <input type="checkbox" className="mr-2.5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm text-gray-600 group-hover:text-slate-900 transition-colors">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Risk Level</label>
          <div className="space-y-2">
            {['Low', 'Moderate', 'Moderate-High', 'High'].map((risk) => (
              <label key={risk} className="flex items-center cursor-pointer group">
                <input type="checkbox" className="mr-2.5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm text-gray-600 group-hover:text-slate-900 transition-colors">{risk}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Returns (1Y)</label>
          <div className="space-y-2">
            {['0-5%', '5-10%', '10-15%', '15%+'].map((range) => (
              <label key={range} className="flex items-center cursor-pointer group">
                <input type="checkbox" className="mr-2.5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm text-gray-600 group-hover:text-slate-900 transition-colors">{range}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Expense Ratio</label>
          <select className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white">
            <option>All</option><option>0-1%</option><option>1-2%</option><option>2%+</option>
          </select>
        </div>

        <div className="pt-4 border-t border-gray-200 space-y-2">
          <button className="w-full px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-semibold shadow-md">Apply Filters</button>
          <button className="w-full px-4 py-2.5 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-all font-medium">Clear All</button>
        </div>
      </div>
    </div>
  );
}
