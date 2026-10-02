'use client';

import Link from 'next/link';
import Logo from '@/src/components/ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">

          <div className="lg:col-span-2 xl:col-span-2">
            <Logo size="lg" variant="light" />
            <p className="text-gray-400 mb-4 max-w-sm leading-relaxed text-sm">
              Technology-driven mutual fund distribution and goal planning by Sourav Dutta, guided by the 30-year veteran market direction of Alok Kumar Dutta.
            </p>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-400">
                <strong className="text-amber-400">SEBI Disclaimer:</strong> Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/funds" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Mutual Funds Explorer</Link></li>
              <li><Link href="/goal-planner" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-1.5">Goal Planner <span className="text-[9px] uppercase px-1 py-0.5 rounded bg-emerald-900 text-emerald-300 font-bold">New</span></Link></li>
              <li><Link href="/sip-calculator" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">SIP Calculator</Link></li>
              <li><Link href="/enquiry" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Portfolio Review</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">About &amp; Advisory</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">About Sourav Dutta</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Mentorship by Alok Kumar Dutta</Link></li>
              <li><Link href="/learn" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Financial Education</Link></li>
              <li><Link href="/enquiry" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Book Free Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Terms &amp; Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">SEBI Risk Disclaimer</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Investor Charter</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 xl:col-span-2">
            <h4 className="text-base font-semibold text-white mb-4">Contact &amp; Support</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:8768436800" className="text-emerald-400 hover:text-emerald-300">8768436800</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:sourav.academics09@gmail.com" className="text-emerald-400 hover:text-emerald-300 break-all">sourav.academics09@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Office Address</p>
                  <p className="text-gray-400">Chakulia, East Singhbhum, Jharkhand - 832301</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Support Hours</p>
                  <p className="text-gray-400">Mon - Fri: 9 AM - 6 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Disclaimer & Investor Information Section ── */}
        <div className="border-t border-slate-800 mt-12 pt-8 space-y-6">

          {/* Attention Investors */}
          <div>
            <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">Attention Investors</h4>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-400 leading-relaxed">
              <li>Investors should be cautious on unsolicited emails and SMS advising to buy, sell or hold securities and trade only on the basis of informed decision.</li>
              <li>Investors are advised to invest after conducting appropriate analysis of respective companies and not to blindly follow unfounded rumours, tips etc.</li>
              <li>You are also requested to share your knowledge or evidence of systemic wrongdoing, potential frauds or unethical behaviour through the anonymous portal facility provided on BSE &amp; NSE website.</li>
              <li>Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.</li>
              <li>Update your mobile number &amp; email ID with your stock broker/depository participant and receive OTP directly from depository on your email ID and/or mobile number to create pledge.</li>
              <li>Pay 20% upfront margin of the transaction value to trade in cash market segment.</li>
              <li>Check your Securities /MF/ Bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3 italic">Issued in the interest of Investors.</p>
          </div>

          {/* SEBI / AMFI Information */}
          <div className="border-t border-slate-800 pt-6">
            <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">AMFI / Regulatory Information</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Sourav Dutta is an AMFI-registered Mutual Fund Distributor (ARN: In-Process). Mentored by veteran financial advisor Alok Kumar Dutta.
              For any grievances related to Mutual Fund distribution, please write to <span className="text-emerald-400">sourav.academics09@gmail.com</span>.
              Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI/AMFI.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mt-2">
              Procedure to file a complaint on SEBI SCORES: Register on the{' '}
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">SCORES</a>{' '}
              portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
              Benefits: Effective Communication, Speedy redressal of the grievances.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-slate-800 pt-6">
            <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">Disclaimer</h4>
            <div className="space-y-3 text-xs text-gray-400 leading-relaxed">
              <p>
                Sourav Dutta makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services.
              </p>
              <p>
                Unless otherwise specified, all returns, expense ratio, NAV, etc. are historical and for illustrative purposes only. Future performance will vary greatly and depends on personal and market circumstances. The information provided on this website is educational only and is not investment or tax advice.
              </p>
              <p>
                Investment in Securities Market are subject to market risks, read all the related documents carefully before investing.
              </p>
              <p className="font-semibold text-gray-300">
                Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance of the schemes is neither an indicator nor a guarantee of future performance.
              </p>
              <p>
                Terms and conditions of the website/app are applicable. Privacy policy of the website is applicable.
              </p>
            </div>
          </div>
        </div>

        {/* ── Copyright & Socials ── */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">&copy; {currentYear} Sourav Dutta. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </Link>
              <Link href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
