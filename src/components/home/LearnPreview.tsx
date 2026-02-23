import Link from 'next/link';

export function LearnPreview() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">New to Investing?</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Don&apos;t worry, we&apos;ve got you covered. Our comprehensive learning center explains everything from the basics of mutual funds to advanced investment strategies.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Why Mutual Funds?</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Power of SIP</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Tax Saving Guide</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Portfolio Planning</span>
                            </div>
                        </div>
                        <Link href="/learn" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group">
                            Start Your Learning Journey
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                        <div className="absolute top-4 right-4 text-emerald-100">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 4.804A7.993 7.993 0 002 12a7.993 7.993 0 007 7.196V4.804z" />
                                <path fillRule="evenodd" d="M11 4.804V19.196A7.993 7.993 0 0018 12a7.993 7.993 0 00-7-7.196zm1 11.605V7.591a6.001 6.001 0 010 8.818z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full mb-4">MEMBER SPECIAL</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Masterclass: Building Your First 1 Cr Portfolio</h3>
                            <p className="text-gray-500 text-sm mb-6 font-inter">Join Alok Kumar Dutta as he reveals the strategies used by top investors to build multi-generational wealth.</p>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    15 Min
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    1.2k Views
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
