import { Metadata } from 'next';
import GoalPlanner from '@/src/components/goals/GoalPlanner';

export const metadata: Metadata = {
    title: 'Financial Goal Planner — Inflation-Adjusted SIP Planning | Sourav Dutta',
    description: 'Calculate inflation-adjusted future costs and exact monthly SIPs required for child education, marriage, home down payment, and retirement. Free advisory by Sourav Dutta.',
    keywords: ['financial goal planner', 'SIP goal calculator', 'inflation adjusted SIP', 'child education planning', 'retirement planner mutual funds', 'Sourav Dutta'],
};

export default function GoalPlannerPage() {
    return (
        <div className="min-h-screen bg-gray-50/60">
            <GoalPlanner />
        </div>
    );
}
