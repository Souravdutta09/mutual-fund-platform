'use client';

import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Banner — Light Theme */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50">
                {/* Subtle decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-emerald-200/30 rounded-full blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
                    <div className="text-center">
                        <p className="text-emerald-600 font-semibold tracking-[0.2em] uppercase text-sm mb-6">About Us</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                            Building Trust,
                        </h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-600 mb-8 tracking-tight leading-tight">
                            One Investment at a Time
                        </h1>
                        {/* Decorative divider */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-12 h-px bg-emerald-400/50" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <div className="w-12 h-px bg-emerald-400/50" />
                        </div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            With decades of experience in Mumbai&apos;s financial landscape, we help families build lasting wealth through disciplined mutual fund investing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Photo */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Decorative background */}
                            <div className="absolute -inset-5 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-3xl transform rotate-2" />
                            <div className="absolute -inset-5 bg-gradient-to-tl from-emerald-400/10 to-transparent rounded-3xl transform -rotate-2" />
                            <div className="relative w-72 h-80 sm:w-80 sm:h-[26rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/founder.jpg"
                                    alt="Alok Kumar Dutta - Founder"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            {/* Experience badge */}
                            <div className="absolute -bottom-5 -right-5 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-lg border-2 border-emerald-500/30">
                                <div className="text-2xl font-extrabold leading-none">30+</div>
                                <div className="text-xs font-medium opacity-80">Years Exp.</div>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <p className="text-emerald-600 font-semibold tracking-widest uppercase text-xs mb-2">Meet Our Founder</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Alok Kumar Dutta
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Alok Kumar Dutta is one of Mumbai&apos;s most trusted and experienced mutual fund distributors. With over three decades in the financial services industry, he has guided hundreds of families toward achieving their financial goals through disciplined and informed investing.
                            </p>
                            <p>
                                Starting his career in the early 1990s, Alok witnessed the transformation of India&apos;s capital markets first-hand. He embraced mutual funds as the ideal wealth-building tool for everyday investors and dedicated his career to spreading financial awareness and helping clients make smart investment decisions.
                            </p>
                            <p>
                                As an AMFI-registered distributor (ARN-111686), he upholds the highest standards of transparency and compliance. His client-first philosophy, rooted in personal relationships and genuine care, has earned him the trust and loyalty of investors across generations.
                            </p>
                            <p>
                                Based in Mumbai, Alok continues to serve investors with the same dedication and passion that defined the start of his career — making wealth creation accessible, understandable, and achievable for everyone.
                            </p>
                        </div>

                        {/* Key highlights */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
                                <div className="text-2xl font-extrabold text-emerald-600">500+</div>
                                <div className="text-xs text-gray-500 font-medium mt-1">Families Served</div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
                                <div className="text-2xl font-extrabold text-emerald-600">₹50Cr+</div>
                                <div className="text-xs text-gray-500 font-medium mt-1">AUM Managed</div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm col-span-2 sm:col-span-1">
                                <div className="text-2xl font-extrabold text-emerald-600">30+</div>
                                <div className="text-xs text-gray-500 font-medium mt-1">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
                    <div className="text-center mb-12">
                        <p className="text-emerald-600 font-semibold tracking-widest uppercase text-xs mb-2">Our Values</p>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">What We Stand For</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Trust &amp; Transparency</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Every recommendation is made with complete honesty. We believe trust is the foundation of long-term wealth creation.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Relationships</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We know our clients by name, not account number. Every family gets personalized attention and guidance tailored to their life goals.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Disciplined Investing</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We champion SIPs and long-term investing over speculative bets. Patience and discipline are the true keys to wealth creation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA — Kept emerald but lighter feel */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Ready to Start Your Investment Journey?</h2>
                    <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
                        Let us help you plan your financial future. Reach out for a free, no-obligation consultation.
                    </p>
                    <a href="tel:9982264133" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-emerald-700 px-8 py-3.5 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Us: 9982264133
                    </a>
                </div>
            </section>
        </div>
    );
}
