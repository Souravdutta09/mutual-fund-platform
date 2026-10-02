import { Suspense } from 'react';
import EnquiryForm from '@/src/components/enquiry/EnquiryForm';

export const metadata = {
    title: 'Request Consultation — Sourav Dutta Mutual Funds',
    description: 'Get personalized mutual fund investment and goal planning advice from Sourav Dutta, backed by the 30-year mentorship of veteran advisor Alok Kumar Dutta.',
};

export default function EnquiryPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-1/4 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl" />
            </div>

            {/* Main content — single viewport layout */}
            <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                    {/* Left side — Hero text + trust badges */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                        <p className="text-emerald-400 font-semibold tracking-[0.2em] uppercase text-sm mb-3">Free Consultation</p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                            Let&apos;s Plan Your <span className="text-emerald-400">Financial Goals</span>
                        </h1>
                        <p className="text-gray-300 text-base mb-8 leading-relaxed">
                            Fill out the form and <strong className="text-white">Sourav Dutta</strong> will personally analyze your requirements and get back to you within 24 hours.
                        </p>

                        {/* Contact info inline */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 lg:justify-start justify-center">
                                <div className="w-9 h-9 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-medium">Direct Phone</p>
                                    <a href="tel:8768436800" className="text-white font-semibold text-sm hover:text-emerald-400 transition-colors">8768436800</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 lg:justify-start justify-center">
                                <div className="w-9 h-9 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-medium">Email Address</p>
                                    <a href="mailto:sourav.academics09@gmail.com" className="text-white font-semibold text-sm hover:text-emerald-400 transition-colors break-all">sourav.academics09@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 lg:justify-start justify-center">
                                <div className="w-9 h-9 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-medium">Office Location</p>
                                    <p className="text-white font-semibold text-sm">Chakulia, East Singhbhum, Jharkhand - 832301</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust points */}
                        <div className="space-y-2">
                            {[
                                'Mentored by 30-year veteran advisor Alok Kumar Dutta',
                                'AMFI Registration (ARN Applied / In Process)',
                                'Comprehensive Goal & SIP Planning',
                                '100% Free, no-obligation consultation',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2 lg:justify-start justify-center">
                                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side — Form card */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                            <h2 className="text-lg font-bold text-white mb-5">Get Free Advisory Consultation</h2>
                            <Suspense fallback={<div className="animate-pulse h-64 bg-white/5 rounded-xl" />}>
                                <EnquiryForm />
                            </Suspense>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
