import { FundList } from '@/src/components/funds/FundList';
import { FundFilters } from '@/src/components/funds/FundFilters';

export default function FundsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mutual Funds</h1>
          <p className="text-gray-600">Explore and invest in top-performing mutual funds</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FundFilters />
          </div>
          <div className="lg:w-3/4">
            <FundList />
          </div>
        </div>
      </div>
    </div>
  );
}
