export function StatsSection() {
  const stats = [
    { label: 'Assets Under Management', value: '$2.5T+', description: 'Total AUM across all funds' },
    { label: 'Active Investors', value: '50M+', description: 'Trusted by millions' },
    { label: 'Average Returns', value: '12.5%', description: 'Annualized returns' },
    { label: 'Fund Options', value: '500+', description: 'Diverse fund categories' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
