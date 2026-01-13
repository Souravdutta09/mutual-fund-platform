export function RecentTransactions() {
  const transactions = [
    {
      id: '1',
      type: 'purchase',
      fundName: 'HDFC Top 100 Fund',
      amount: 50000,
      units: 357.14,
      nav: 140.00,
      date: '2024-01-01',
      status: 'completed'
    },
    {
      id: '2',
      type: 'purchase',
      fundName: 'Axis Bluechip Fund',
      amount: 25000,
      units: 478.95,
      nav: 52.18,
      date: '2023-12-15',
      status: 'completed'
    },
    {
      id: '3',
      type: 'redeem',
      fundName: 'ICICI Prudential Debt Fund',
      amount: 10000,
      units: 389.12,
      nav: 25.70,
      date: '2023-12-01',
      status: 'completed'
    },
    {
      id: '4',
      type: 'purchase',
      fundName: 'SBI Small Cap Fund',
      amount: 30000,
      units: 304.59,
      nav: 98.48,
      date: '2023-11-20',
      status: 'pending'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        <button className="text-sm text-blue-600 hover:text-blue-500 font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Date</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Fund</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Type</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-700">Amount</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-700">Units</th>
              <th className="text-center py-3 px-2 text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-sm text-gray-900">
                  {new Date(transaction.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </td>
                <td className="py-3 px-2">
                  <div className="text-sm font-medium text-gray-900">{transaction.fundName}</div>
                  <div className="text-xs text-gray-600">NAV: ₹{transaction.nav}</div>
                </td>
                <td className="py-3 px-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    transaction.type === 'purchase' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.type === 'purchase' ? 'Buy' : 'Sell'}
                  </span>
                </td>
                <td className="py-3 px-2 text-sm text-gray-900 text-right">
                  ₹{transaction.amount.toLocaleString('en-IN')}
                </td>
                <td className="py-3 px-2 text-sm text-gray-900 text-right">
                  {transaction.units.toFixed(2)}
                </td>
                <td className="py-3 px-2 text-center">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    transaction.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status === 'completed' ? 'Completed' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
