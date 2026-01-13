import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Invest in Your
            <span className="block text-blue-600">Financial Future</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover top-performing mutual funds, track your portfolio, and make informed investment decisions with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/funds"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Funds
            </Link>
            <Link 
              href="/auth/signup"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
