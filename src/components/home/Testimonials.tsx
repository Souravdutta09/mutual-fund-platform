'use client';

import { useEffect, useRef } from 'react';

const row1Testimonials = [
  { id: 1, name: 'Sourav Dutta', role: 'Software Engineer', company: 'Infosys', content: 'This platform made investing in mutual funds so simple and transparent. The portfolio tracking features are excellent and I can see all my investments in one place!', avatar: 'SD' },
  { id: 2, name: 'Debjani Shaha', role: 'Business Owner', company: 'Self-employed', content: 'I love the detailed fund analysis and historical performance data. It helped me make informed investment decisions.', avatar: 'DS' },
  { id: 3, name: 'Amit Kumar', role: 'Marketing Professional', company: 'HUL', content: 'The user interface is intuitive and the customer support is outstanding. Highly recommend for both beginners and experienced investors.', avatar: 'AK' },
  { id: 4, name: 'Sneha Desai', role: 'Doctor', company: 'Apollo Hospitals', content: 'As a busy professional, I needed a trustworthy advisor. Alok sir simplified everything and my portfolio has grown steadily over 5 years. His patience in explaining every detail is commendable.', avatar: 'SD' },
  { id: 5, name: 'Vikram Joshi', role: 'Retired Bank Manager', company: 'SBI', content: 'After retirement, I wanted safe yet growing investments. The guidance I received here was exceptional — my money works for me now.', avatar: 'VJ' },
  { id: 6, name: 'Anita Mehta', role: 'School Teacher', company: 'DPS', content: 'Started with just \u20B91,000 SIP and now my children\'s education fund is well on track. Grateful for the patient and honest advice.', avatar: 'AM' },
  { id: 7, name: 'Rajesh Iyer', role: 'IT Manager', company: 'TCS', content: 'I was skeptical about mutual funds initially, but the transparent approach and consistent returns over 3 years have made me a believer. Excellent advisory!', avatar: 'RI' },
  { id: 8, name: 'Pooja Reddy', role: 'Architect', company: 'Self-employed', content: 'The SIP recommendations were perfectly aligned with my financial goals. I appreciate the regular portfolio reviews and honest feedback.', avatar: 'PR' },
];

const row2Testimonials = [
  { id: 9, name: 'Somojit Dutta', role: 'Chartered Accountant', company: 'Deloitte', content: 'The tax-saving ELSS recommendations were spot on. Professional service with a personal touch — exactly what you need in a financial advisor. I have recommended Alok sir to many of my clients.', avatar: 'SD' },
  { id: 10, name: 'Meera Nair', role: 'Homemaker', company: '', content: 'I had zero knowledge about mutual funds. The team explained everything patiently and helped me start investing confidently.', avatar: 'MN' },
  { id: 11, name: 'Sanjay Gupta', role: 'Entrepreneur', company: 'TechVentures', content: 'Managing business finances and personal investments is complex. Having a dedicated advisor who understands both has been invaluable for my family\'s financial security.', avatar: 'SG' },
  { id: 12, name: 'Kavita Sharma', role: 'HR Director', company: 'Wipro', content: 'What sets this service apart is the personal attention. Alok sir remembers every conversation and always follows up. My portfolio has grown 18% in just two years.', avatar: 'KS' },
  { id: 13, name: 'Nikhil Banerjee', role: 'Civil Engineer', company: 'L&T', content: 'I started investing late at 40, but the customized plan helped me catch up fast. Now I feel confident about my retirement. Best decision I ever made.', avatar: 'NB' },
  { id: 14, name: 'Deepa Krishnan', role: 'Pharmacist', company: 'Cipla', content: 'The monthly performance reports and market insights keep me informed without overwhelming me. Truly professional and caring service.', avatar: 'DK' },
  { id: 15, name: 'Arjun Malhotra', role: 'Consultant', company: 'McKinsey', content: 'I have worked with many financial advisors, but none have been as transparent and dedicated as Alok sir. His risk assessment approach is thorough and methodical.', avatar: 'AM' },
  { id: 16, name: 'Sunita Agarwal', role: 'Retired Professor', company: 'IIT Bombay', content: 'After my husband passed, I needed someone trustworthy to manage our savings. Alok sir handled everything with utmost care and sensitivity. Forever grateful.', avatar: 'SA' },
];

const gradients = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-fuchsia-600',
  'from-orange-500 to-red-500',
  'from-cyan-500 to-blue-600',
  'from-pink-500 to-rose-600',
  'from-teal-500 to-emerald-600',
  'from-violet-500 to-purple-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-indigo-500 to-violet-600',
  'from-lime-500 to-green-600',
  'from-sky-500 to-cyan-600',
  'from-fuchsia-500 to-purple-600',
  'from-red-500 to-orange-600',
  'from-green-500 to-emerald-600',
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof row1Testimonials[0]; index: number }) {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0`}>
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-slate-900 text-sm truncate">{testimonial.name}</div>
          <div className="text-xs text-gray-400 truncate">
            {testimonial.role}{testimonial.company ? ` \u2022 ${testimonial.company}` : ''}
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
        <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-xs text-gray-500 font-medium">{testimonial.role}</span>
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

function useInfiniteScroll(direction: 'left' | 'right') {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 2;
    const speed = 0.2; // very slow, smooth scroll

    let scrollPos = direction === 'right' ? singleSetWidth : 0;
    container.scrollLeft = scrollPos;

    let animationId: number;

    const animate = () => {
      if (direction === 'left') {
        scrollPos += speed;
        if (scrollPos >= singleSetWidth) scrollPos -= singleSetWidth;
      } else {
        scrollPos -= speed;
        if (scrollPos <= 0) scrollPos += singleSetWidth;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, [direction]);

  return scrollRef;
}

export function Testimonials() {
  const ref1 = useInfiniteScroll('left');
  const ref2 = useInfiniteScroll('right');

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold tracking-widest uppercase text-xs mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Investors Say</h2>
          <p className="text-lg text-gray-500">Join thousands of satisfied investors who trust us with their financial future</p>
        </div>
      </div>

      <div className="relative space-y-5">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <div
          ref={ref1}
          className="flex gap-5 overflow-hidden px-4 items-stretch"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...row1Testimonials, ...row1Testimonials].map((t, idx) => (
            <TestimonialCard key={`r1-${t.id}-${idx}`} testimonial={t} index={t.id - 1} />
          ))}
        </div>

        {/* Row 2 — scrolls right (opposite) */}
        <div
          ref={ref2}
          className="flex gap-5 overflow-hidden px-4 items-stretch"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...row2Testimonials, ...row2Testimonials].map((t, idx) => (
            <TestimonialCard key={`r2-${t.id}-${idx}`} testimonial={t} index={t.id - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
