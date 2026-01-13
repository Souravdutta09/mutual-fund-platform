import { OverviewCards } from '@/src/components/dashboard/OverviewCards';
import { PortfolioChart } from '@/src/components/dashboard/PortfolioChart';
import { RecentTransactions } from '@/src/components/dashboard/RecentTransactions';
import { TopPerformers } from '@/src/components/dashboard/TopPerformers';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's your investment summary.</p>
      </div>

      <OverviewCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PortfolioChart />
        </div>
        <div>
          <TopPerformers />
        </div>
      </div>

      <RecentTransactions />
    </div>
  );
}
