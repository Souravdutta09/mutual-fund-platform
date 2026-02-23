export function StatsSection() {
  const stats = [
    { label: 'Assets Under Management', value: '\u20B92.5T+', description: 'Total AUM across all funds', icon: '📊' },
    { label: 'Active Investors', value: '50M+', description: 'Trusted by millions', icon: '👥' },
    { label: 'Average Returns', value: '12.5%', description: 'Annualized returns', icon: '📈' },
    { label: 'Fund Options', value: '500+', description: 'Diverse fund categories', icon: '🏦' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</div>
              <div className="text-base font-semibold text-slate-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
