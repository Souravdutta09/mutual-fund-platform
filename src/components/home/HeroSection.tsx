'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a1a12]">

      {/* ── Animated Background ── */}
      <div className="absolute inset-0">
        {/* Deep layered gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a12] via-[#0f2a1c] to-[#0c2218]" />

        {/* Floating glowing orbs */}
        <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-emerald-500/[0.07] blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/[0.06] blur-[120px]" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute top-[40%] left-[50%] w-[350px] h-[350px] rounded-full bg-teal-400/[0.04] blur-[100px]" style={{ animationDelay: '1s', animationDuration: '5s' }} />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Diagonal decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column — Text */}
          <div>
            {/* Trust Badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08] mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm text-emerald-300/90 font-medium tracking-wide">
                Smart, Goal-Driven Mutual Fund Advisory
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <span className="text-white">Invest in Your</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>

            {/* Subtext */}
            <p
              className={`text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Discover the right mutual funds with personalized guidance from{' '}
              <strong className="text-white font-semibold">Sourav Dutta</strong>, backed by the
              30-year veteran mentorship of{' '}
              <strong className="text-white font-semibold">Alok Kumar Dutta</strong>.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <Link
                href="/goal-planner"
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(25,97,68,0.35)] hover:shadow-[0_0_50px_rgba(25,97,68,0.5)] hover:scale-[1.02] text-base flex items-center justify-center gap-2.5 overflow-hidden"
              >
                <span className="relative z-10">Plan Your Goals</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/funds"
                className="px-8 py-4 bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 text-base text-center"
              >
                Explore Funds
              </Link>
              <Link
                href="/enquiry"
                className="px-8 py-4 bg-emerald-500/[0.08] hover:bg-emerald-500/[0.15] backdrop-blur-sm text-emerald-300 font-semibold rounded-2xl border border-emerald-500/[0.15] hover:border-emerald-400/[0.3] transition-all duration-300 text-base text-center"
              >
                Request Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex items-center gap-8 transition-all duration-700 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AMFI Registered</p>
                  <p className="text-xs text-slate-500">Certified Distributor</p>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">30+ Years</p>
                  <p className="text-xs text-slate-500">Market Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Decorative Visual */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 shadow-2xl">
                {/* Mock Portfolio Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Portfolio Value</p>
                    <p className="text-3xl font-bold text-white mt-1">₹24,85,320</p>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/20">
                    <span className="text-emerald-400 text-sm font-bold">+18.4%</span>
                  </div>
                </div>

                {/* Mock Graph */}
                <div className="relative h-44 mb-8">
                  <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,120 C30,115 60,100 90,95 C120,90 140,105 170,85 C200,65 220,75 250,55 C280,35 310,45 340,25 C360,15 380,20 400,10"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,120 C30,115 60,100 90,95 C120,90 140,105 170,85 C200,65 220,75 250,55 C280,35 310,45 340,25 C360,15 380,20 400,10 L400,150 L0,150 Z"
                      fill="url(#graphGrad)"
                    />
                    {/* Data points */}
                    <circle cx="90" cy="95" r="4" fill="#34d399" opacity="0.8" />
                    <circle cx="170" cy="85" r="4" fill="#34d399" opacity="0.8" />
                    <circle cx="250" cy="55" r="4" fill="#34d399" opacity="0.8" />
                    <circle cx="340" cy="25" r="4" fill="#34d399" opacity="0.8" />
                    <circle cx="400" cy="10" r="5" fill="#34d399" />
                    <circle cx="400" cy="10" r="8" fill="#34d399" opacity="0.3" />
                  </svg>
                </div>

                {/* Mock Fund Allocation */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: 'Large Cap', pct: '45%', color: 'bg-emerald-400' },
                    { name: 'Mid Cap', pct: '30%', color: 'bg-teal-400' },
                    { name: 'Debt', pct: '25%', color: 'bg-cyan-400' },
                  ].map((fund) => (
                    <div key={fund.name} className="bg-white/[0.04] rounded-xl p-3.5 border border-white/[0.06]">
                      <div className={`w-2 h-2 rounded-full ${fund.color} mb-2`} />
                      <p className="text-xs text-slate-500">{fund.name}</p>
                      <p className="text-lg font-bold text-white">{fund.pct}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Accent Card — Top Right */}
              <div className="absolute -top-6 -right-6 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl px-5 py-3.5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">SIP Returns</p>
                    <p className="text-sm font-bold text-white">₹1.2 Cr <span className="text-emerald-400 text-xs">in 15 yrs</span></p>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card — Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl px-5 py-3.5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Goal Status</p>
                    <p className="text-sm font-bold text-emerald-400">On Track ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Service Cards ── */}
        <div
          className={`mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { icon: '🎯', title: 'Goal-Based Planning', desc: 'Inflation-adjusted SIP roadmaps for education, marriage, home & retirement.' },
            { icon: '🔍', title: 'Portfolio Review', desc: 'Optimize allocation, eliminate overlap, and maximize growth potential.' },
            { icon: '🛡️', title: 'Mentored Advisory', desc: 'Tech-first execution backed by 30+ years of institutional guidance.' },
          ].map((card) => (
            <div
              key={card.title}
              className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06]"
            >
              <span className="text-2xl mb-3 block">{card.icon}</span>
              <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-emerald-300 transition-colors">{card.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8faf9] to-transparent" />
    </section>
  );
}
