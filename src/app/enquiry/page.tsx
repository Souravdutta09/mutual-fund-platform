import { Suspense } from 'react';
import EnquiryForm from '@/src/components/enquiry/EnquiryForm';

export const metadata = {
    title: 'Request Consultation — Alok Kumar Dutta',
    description: 'Get personalized mutual fund investment advice from one of Mumbai\'s most experienced advisors. Free consultation available.',
};

export default function EnquiryPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-emerald-400/8 rounded-full blur-3xl" />
            </div>

            {/* Main content — single viewport layout */}
            <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                    {/* Left side — Hero text + trust badges */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                        <p className="text-emerald-400 font-semibold tracking-[0.2em] uppercase text-sm mb-3">Free Consultation</p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                            Let&apos;s Plan Your <span className="text-emerald-400">Financial Future</span>
                        </h1>
                        <p className="text-gray-300 text-base mb-8 leading-relaxed">
                            Fill out the form and our experienced advisor will get back to you within 24 hours.
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
                                    <p className="text-gray-400 text-xs font-medium">Phone</p>
                                    <a href="tel:9982264133" className="text-white font-semibold text-sm hover:text-emerald-400 transition-colors">9982264133</a>
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
                                    <p className="text-gray-400 text-xs font-medium">Office</p>
                                    <p className="text-white font-semibold text-sm">Bandra, Mumbai</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 lg:justify-start justify-center">
                                <div className="w-9 h-9 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-medium">Available</p>
                                    <p className="text-white font-semibold text-sm">Mon - Fri, 9 AM - 6 PM IST</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust points */}
                        <div className="space-y-2">
                            {[
                                '30+ years of experience',
                                'AMFI-registered (ARN-111686)',
                                '500+ families served',
                                'Free, no-obligation consultation',
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
                            <h2 className="text-lg font-bold text-white mb-5">Get Free Consultation</h2>
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
