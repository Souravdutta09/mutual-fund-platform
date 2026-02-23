import Link from 'next/link';

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Master the Art of <span className="text-emerald-400">Wealth Creation</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Investing isn&apos;t just about numbers; it&apos;s about securing your future. Learn why mutual funds are the preferred choice for millions of smart investors.
          </p>
        </div>
      </section>

      {/* Why Mutual Funds Section */}
      <section id="why-mutual-funds" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Mutual Funds?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mutual funds pool money from various investors to invest in a diversified portfolio of stocks, bonds, or other securities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Professional Management",
                description: "Your money is managed by experienced fund managers who research and monitor market trends 24/7.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                color: "emerald"
              },
              {
                title: "Instant Diversification",
                description: "Even with ₹500, you can own a slice of dozens of top companies, significantly reducing your risk.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                ),
                color: "blue"
              },
              {
                title: "High Liquidity",
                description: "Need your money back? Most mutual funds allow you to redeem your investments within 1-3 working days.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "amber"
              },
              {
                title: "Low Entry Cost",
                description: "Start your investment journey with Systematic Investment Plans (SIP) starting as low as ₹500 per month.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                color: "purple"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-4 text-${item.color}-600`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Power of Starting Early */}
      <section id="power-of-compounding" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Power of Starting Early</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ever heard of the 8th wonder of the world? It&apos;s called <span className="font-semibold text-emerald-600">Compounding</span>.
                The earlier you start, the more time your money has to grow.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <span className="text-emerald-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Beat Inflation</h4>
                    <p className="text-gray-500">Traditional savings accounts often fail to keep up with rising costs. Mutual funds aim for inflation-beating returns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <span className="text-emerald-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Reach Goals Faster</h4>
                    <p className="text-gray-500">Whether it&apos;s a dream home, world travel, or retirement—investing accelerates your journey.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <span className="text-emerald-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Financial Discipline</h4>
                    <p className="text-gray-500">Auto-debit SIPs help you build a habit of saving before you spend.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-emerald-50 p-8 rounded-3xl border border-emerald-100 relative">
              <div className="space-y-6">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">Potential Wealth in 20 Years</div>
                  <div className="text-3xl font-bold text-emerald-600">₹45.6 Lakhs*</div>
                  <div className="text-xs text-gray-400 mt-2">*Assuming ₹5,000 monthly SIP @ 12% p.a.</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[20%] animate-pulse"></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[45%]"></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[100%]"></div>
                </div>
                <p className="text-sm text-center text-emerald-800 italic">
                  &ldquo;Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn&apos;t, pays it.&rdquo; — Albert Einstein
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIP vs Lumpsum */}
      <section id="sip-vs-lumpsum" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How Should You Invest?</h2>
                <p className="text-emerald-100 text-lg mb-8">
                  The two major ways to invest in mutual funds are SIP and Lumpsum. Choosing the right one depends on your cash flow and goals.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 font-inter">SIP (Systematic Investment Plan)</h4>
                      <p className="text-emerald-200/80 text-sm">Invest a fixed amount regularly (monthly). Best for salary earners to build long-term wealth.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 font-inter">Lumpsum</h4>
                      <p className="text-emerald-200/80 text-sm">Invest a large one-time amount. Ideal for bonuses, inheritance, or when you have idle surplus cash.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <h4 className="text-white font-bold mb-6 text-center">Which one is for you?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-2xl bg-emerald-800/50 border border-emerald-700">
                    <div className="text-emerald-300 text-xs uppercase tracking-wider mb-2">Patience</div>
                    <div className="text-white font-bold italic">SIP</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-blue-800/50 border border-blue-700">
                    <div className="text-blue-300 text-xs uppercase tracking-wider mb-2">Market Timing</div>
                    <div className="text-white font-bold italic">Lumpsum</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-emerald-800/50 border border-emerald-700">
                    <div className="text-emerald-300 text-xs uppercase tracking-wider mb-2">Discipline</div>
                    <div className="text-white font-bold italic">SIP</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-blue-800/50 border border-blue-700">
                    <div className="text-blue-300 text-xs uppercase tracking-wider mb-2">High Surplus</div>
                    <div className="text-white font-bold italic">Lumpsum</div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link href="/sip-calculator" className="w-full py-4 bg-white text-emerald-900 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors">
                    Try SIP Calculator
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Mutual Funds */}
      <section id="types-of-funds" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different goals require different strategies. Explore the three main pillars of mutual fund investing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Equity Funds</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Invest primarily in stocks. Ideal for long-term wealth creation (5+ years) with higher return potential.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Large, Mid & Small Cap
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Sector/Thematic Funds
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Debt Funds</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Invest in fixed-income securities like government bonds. Perfect for stability and regular income.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Liquid & Overnight Funds
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Corporate Bond Funds
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Hybrid Funds</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                A mix of both Equity and Debt. Offers a balanced approach with moderate risk and steady growth.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  Balanced Advantage Funds
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  Multi-Asset Allocation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Your Financial Future Starts Today</h2>
          <p className="text-slate-400 mb-12 text-xl max-w-2xl mx-auto">
            Don&apos;t wait for the perfect moment. The best time to start was yesterday; the second best time is today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/funds" className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/25">
              Explore Best Funds
            </Link>
            <a href="/enquiry" className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all">
              Free Expert Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
