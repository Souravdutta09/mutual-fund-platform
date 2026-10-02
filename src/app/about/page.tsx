'use client';

import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50">
                {/* Subtle decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-emerald-200/30 rounded-full blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #196144 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-emerald-700 font-semibold tracking-[0.2em] uppercase text-xs mb-4">About Sourav Dutta Mutual Funds</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                            Technology Meets
                        </h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-700 mb-6 tracking-tight leading-tight">
                            Decades of Market Wisdom
                        </h1>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px bg-emerald-400/50" />
                            <div className="w-2 h-2 rounded-full bg-emerald-600" />
                            <div className="w-12 h-px bg-emerald-400/50" />
                        </div>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            Combining modern computer engineering discipline with the 30-year veteran market mentorship of <strong className="text-slate-800">Alok Kumar Dutta</strong>, we help individuals and families build lasting, goal-oriented wealth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder & Mentorship Story Section */}
            <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Profile Visual Card */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-600/15 to-emerald-800/10 rounded-3xl transform rotate-1" />
                            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white flex items-center justify-center text-3xl font-extrabold shadow-md mb-6 mx-auto sm:mx-0">
                                    SD
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1 text-center sm:text-left">
                                    Sourav Dutta
                                </h3>
                                <p className="text-sm font-semibold text-emerald-700 mb-4 text-center sm:text-left">
                                    Founder &amp; Mutual Fund Distributor
                                </p>

                                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-600">
                                    <div className="flex items-start gap-2.5">
                                        <span className="text-emerald-700 text-base">🎓</span>
                                        <div>
                                            <p className="font-semibold text-slate-800">Education</p>
                                            <p className="text-gray-500 text-xs">Computer Engineering, Savitribai Phule Pune University (Pune)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <span className="text-emerald-700 text-base">🏛️</span>
                                        <div>
                                            <p className="font-semibold text-slate-800">Mentorship</p>
                                            <p className="text-gray-500 text-xs">Under the direct guidance of Alok Kumar Dutta (30+ Years Financial Expert)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <span className="text-emerald-700 text-base">📍</span>
                                        <div>
                                            <p className="font-semibold text-slate-800">Location</p>
                                            <p className="text-gray-500 text-xs">Chakulia, East Singhbhum, Jharkhand - 832301</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <span className="text-emerald-700 text-base">📜</span>
                                        <div>
                                            <p className="font-semibold text-slate-800">AMFI ARN</p>
                                            <p className="text-gray-500 text-xs">Registered Distributor (ARN Applied / In Process)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                    <span>Phone: <a href="tel:8768436800" className="text-emerald-700 font-semibold hover:underline">8768436800</a></span>
                                    <span>•</span>
                                    <span className="truncate max-w-[170px]" title="sourav.academics09@gmail.com">sourav.academics09@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio & Inspiration */}
                    <div className="lg:col-span-7">
                        <p className="text-emerald-700 font-semibold tracking-widest uppercase text-xs mb-2">Our Founder &amp; Story</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Building a Tech-Driven, Goal-Centric Advisory
                        </h2>

                        <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                            <p>
                                <strong className="text-slate-800 font-semibold">Sourav Dutta</strong> is a Computer Engineer graduated from <strong className="text-slate-800">Savitribai Phule Pune University (Pune)</strong>. Blending rigorous analytical training with an affinity for financial technology, Sourav is dedicated to modernizing how everyday investors approach wealth creation.
                            </p>
                            <p>
                                His entry into the mutual fund distribution business is inspired and directed by his uncle, <strong className="text-slate-800 font-semibold">Alok Kumar Dutta</strong> — a veteran financial expert with over <strong className="text-emerald-800 font-semibold">30 years of seasoned experience</strong> in Mumbai&apos;s capital markets. Under Alok sir&apos;s close direction and mentorship, Sourav has established this platform to bring transparent, institutional-grade guidance directly to clients.
                            </p>
                            <p>
                                Rather than chasing speculative market fads or relying on arbitrary return claims, our advisory philosophy centers around <strong className="text-slate-800 font-semibold">real life goals</strong>: children&apos;s education, marriage, home ownership, and stress-free retirement. We leverage inflation-adjusted modeling and scientific portfolio rebalancing to keep your money working effectively.
                            </p>
                            <p>
                                Headquartered in <strong className="text-slate-800 font-semibold">Chakulia, East Singhbhum, Jharkhand</strong>, Sourav serves clients locally and across India digitally, offering complete transparency, paperless onboarding, and ongoing personal support.
                            </p>
                        </div>

                        {/* Three Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-xs">
                                <div className="text-2xl mb-1">💻</div>
                                <div className="font-bold text-slate-900 text-sm">Tech Precision</div>
                                <div className="text-xs text-gray-500 mt-1">Algorithmic goal calculations &amp; portfolio tracking</div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-xs">
                                <div className="text-2xl mb-1">🏛️</div>
                                <div className="font-bold text-slate-900 text-sm">30-Year Wisdom</div>
                                <div className="text-xs text-gray-500 mt-1">Mentored by veteran financial advisor Alok Kumar Dutta</div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-xs">
                                <div className="text-2xl mb-1">🎯</div>
                                <div className="font-bold text-slate-900 text-sm">Goal-First Focus</div>
                                <div className="text-xs text-gray-500 mt-1">Inflation-adjusted SIPs crafted for your milestones</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
                    <div className="text-center mb-12">
                        <p className="text-emerald-700 font-semibold tracking-widest uppercase text-xs mb-2">Our Values</p>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">What We Stand For</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Trust &amp; Transparency</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Every scheme recommendation is unbiased and honest. We prioritize your financial wellbeing above all else.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Attention</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                You receive direct, individual attention tailored to your exact life goals, whether planning for ₹10 Lakhs or ₹5 Crores.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Disciplined Investing</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We champion disciplined SIPs and patient long-term compounding over speculative market timing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white">
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Ready to Start Your Investment Journey?</h2>
                    <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
                        Plan your life goals with clarity. Reach out for a free, comprehensive mutual fund consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/goal-planner"
                            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 hover:bg-gray-100 px-8 py-3.5 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        >
                            <span>Use Goal Planner</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <a
                            href="tel:8768436800"
                            className="inline-flex items-center justify-center gap-2 bg-emerald-700/80 hover:bg-emerald-700 text-white px-8 py-3.5 font-semibold rounded-xl border border-emerald-600/50 transition-all duration-200 shadow-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Call Us: 8768436800</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
