export function StatsSection() {
  const services = [
    {
      title: 'Portfolio Review & Health Check',
      description: 'Periodic audit of your active holdings to eliminate scheme overlap, exit underperforming funds, and restore optimal asset allocation.',
      icon: '🔍',
      tag: 'Optimization',
    },
    {
      title: 'Goal-Based Financial Planning',
      description: 'Targeted SIP roadmaps customized for child education, marriage, house purchase, and retirement — completely adjusted for inflation.',
      icon: '🎯',
      tag: 'Planning',
    },
    {
      title: 'Smart Asset Diversification',
      description: 'Balanced distribution across Equity, Debt, and Hybrid schemes to maximize capital growth while mitigating market volatility.',
      icon: '🛡️',
      tag: 'Risk Management',
    },
    {
      title: 'In-Depth Fund Analysis',
      description: 'Rigorous scheme evaluation analyzing rolling returns, alpha generation, fund manager track record, and expense efficiency.',
      icon: '📊',
      tag: 'Research',
    },
    {
      title: 'Timely Updates & Monitoring',
      description: 'Continuous portfolio tracking with periodic performance reviews, market insights, and proactive rebalancing alerts.',
      icon: '⏱️',
      tag: 'Monitoring',
    },
    {
      title: 'Personalized Guidance & Support',
      description: 'Direct, honest, and jargon-free investment advice whenever you need it, backed by 30+ years of seasoned advisory mentorship.',
      icon: '🤝',
      tag: 'Advisory',
    },
  ];

  return (
    <section className="py-20 bg-gray-50/70 border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-emerald-700 font-semibold tracking-wider uppercase text-xs mb-2">Our Advisory Services</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How We Help You Build &amp; Protect Wealth
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Personalized, research-backed financial solutions designed to guide your family toward true financial security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
