import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-100/60 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-emerald-200/40 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-emerald-50/80 blur-3xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm text-emerald-700 font-medium">Trusted by 50M+ investors across India</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
            Invest in Your
            <span className="block text-emerald-600">Financial Future</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover top-performing mutual funds and get personalized investment guidance from one of Mumbai&apos;s most experienced advisors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/funds"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:scale-[1.02] text-base"
            >
              Explore Funds
            </Link>
            <Link
              href="/enquiry"
              className="px-8 py-3.5 bg-white text-slate-800 font-semibold rounded-xl border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm text-base"
            >
              Request Consultation
            </Link>
          </div>

          {/* Quick stats row */}
          <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-sm text-gray-500">Fund Options</div>
            </div>
            <div className="border-l border-r border-gray-200 px-4">
              <div className="text-2xl font-bold text-emerald-600">12.5%</div>
              <div className="text-sm text-gray-500">Avg Returns</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">0%</div>
              <div className="text-sm text-gray-500">Commission</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
