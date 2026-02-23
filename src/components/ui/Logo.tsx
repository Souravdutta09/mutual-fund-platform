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
        sm: { w: 68, h: 44, name: 'text-base', sub: 'text-[7px]', gap: 'gap-0.5' },
        md: { w: 88, h: 56, name: 'text-xl', sub: 'text-[8px]', gap: 'gap-0.5' },
        lg: { w: 110, h: 70, name: 'text-2xl', sub: 'text-[9px]', gap: 'gap-0.5' },
    };

    const s = sizes[size];

    const nameColor = variant === 'dark' ? 'text-slate-900' : 'text-white';
    const subColor = variant === 'dark' ? 'text-emerald-600' : 'text-emerald-400';

    return (
        <Link href="/" className={`flex items-center ${s.gap} group ${className}`}>
            {/* Logo image */}
            <div className="relative shrink-0 -mr-2 mt-2" style={{ width: s.w, height: s.h }}>
                <Image
                    src="/tahi.png"
                    alt="Alok Dutta Logo"
                    width={s.w}
                    height={s.h}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Brand Text */}
            {showText && (
                <div className="flex flex-col leading-none">
                    <span className={`${s.name} font-extrabold ${nameColor} tracking-tight uppercase`}>
                        Alok Dutta
                    </span>
                    <span className={`${s.sub} ${subColor} font-bold tracking-[0.25em] uppercase mt-0.5`}>
                        Mutual Funds
                    </span>
                </div>
            )}
        </Link>
    );
};

export default Logo;
