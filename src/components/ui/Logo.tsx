'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
    variant?: 'light' | 'dark';
    className?: string;
}

const Logo = ({ size = 'md', showText = true, variant = 'dark', className = '' }: LogoProps) => {
    const sizes = {
        sm: { imgW: 38, imgH: 38, name: 'text-lg',   sub: 'text-[9px]',  gap: 'gap-2' },
        md: { imgW: 48, imgH: 48, name: 'text-xl',   sub: 'text-[10px]', gap: 'gap-2.5' },
        lg: { imgW: 58, imgH: 58, name: 'text-2xl',  sub: 'text-[11px]', gap: 'gap-2.5' },
    };

    const s = sizes[size];

    const dividerColor  = variant === 'dark' ? 'bg-slate-200'   : 'bg-white/20';
    const nameColor     = variant === 'dark' ? 'text-slate-900'  : 'text-white';
    const subColor      = variant === 'dark' ? 'text-emerald-700' : 'text-emerald-400';

    return (
        <Link href="/" className={`inline-flex items-center ${s.gap} group ${className}`}>

            {/* Logo Mark */}
            <div className="relative shrink-0" style={{ width: s.imgW, height: s.imgH }}>
                <Image
                    src="/green.png"
                    alt="InvestCare Logo"
                    width={s.imgW}
                    height={s.imgH}
                    className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    priority
                />
            </div>

            {/* Vertical Divider */}
            <div className={`shrink-0 w-px self-stretch my-1 ${dividerColor}`} />

            {/* Brand Text */}
            {showText && (
                <div className="flex flex-col leading-none justify-center">
                    <span className={`${s.name} font-black ${nameColor} tracking-wide`}>
                        Invest<span className={subColor}>Care</span>
                    </span>
                    <span className={`${s.sub} ${subColor} font-semibold tracking-[0.2em] uppercase mt-1 opacity-80`}>
                        Mutual Funds
                    </span>
                </div>
            )}
        </Link>
    );
};

export default Logo;
