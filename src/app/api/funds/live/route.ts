import { NextResponse } from 'next/server';

// Popular Indian mutual fund scheme codes from MFAPI
const FUND_SCHEMES = [
    { code: '120503', name: 'HDFC Top 100 Fund', category: 'Large Cap', risk: 'Moderate', house: 'HDFC' },
    { code: '120465', name: 'Axis Bluechip Fund', category: 'Large Cap', risk: 'Moderate', house: 'Axis' },
    { code: '125497', name: 'SBI Small Cap Fund', category: 'Small Cap', risk: 'High', house: 'SBI' },
    { code: '120586', name: 'ICICI Pru Bluechip Fund', category: 'Large Cap', risk: 'Moderate', house: 'ICICI' },
    { code: '122639', name: 'Parag Parikh Flexi Cap Fund', category: 'Flexi Cap', risk: 'Moderate', house: 'PPFAS' },
    { code: '118778', name: 'Nippon India Small Cap Fund', category: 'Small Cap', risk: 'High', house: 'Nippon' },
    { code: '119598', name: 'Mirae Asset Large Cap Fund', category: 'Large Cap', risk: 'Moderate', house: 'Mirae' },
    { code: '120716', name: 'Kotak Emerging Equity Fund', category: 'Mid Cap', risk: 'Moderate-High', house: 'Kotak' },
    { code: '119551', name: 'Motilal Oswal Midcap Fund', category: 'Mid Cap', risk: 'Moderate-High', house: 'Motilal' },
    { code: '120837', name: 'Tata Digital India Fund', category: 'Sectoral', risk: 'High', house: 'Tata' },
    { code: '125354', name: 'Canara Robeco Bluechip Equity', category: 'Large Cap', risk: 'Moderate', house: 'Canara' },
    { code: '118989', name: 'DSP Midcap Fund', category: 'Mid Cap', risk: 'Moderate-High', house: 'DSP' },
];

interface NavData {
    date: string;
    nav: string;
}

async function fetchFundData(schemeCode: string) {
    try {
        const res = await fetch(`https://api.mfapi.in/mf/${schemeCode}`, {
            next: { revalidate: 300 }, // cache for 5 minutes
        });

        if (!res.ok) return null;

        const data = await res.json();
        const navHistory: NavData[] = data?.data || [];

        if (navHistory.length < 2) return null;

        const latestNav = parseFloat(navHistory[0].nav);
        const prevNav = parseFloat(navHistory[1].nav);
        const dailyChange = latestNav - prevNav;
        const dailyChangePercent = (dailyChange / prevNav) * 100;

        // Calculate 1Y, 3Y, 5Y returns (approximate from NAV history)
        const getReturn = (daysBack: number) => {
            const entry = navHistory.find((_, i) => i >= daysBack && i <= daysBack + 10);
            if (!entry) return null;
            const oldNav = parseFloat(entry.nav);
            return ((latestNav - oldNav) / oldNav) * 100;
        };

        // ~252 trading days = 1 year, ~756 = 3 years, ~1260 = 5 years
        const ret1Y = getReturn(250);
        const ret3Y = getReturn(750);
        const ret5Y = getReturn(1250);

        return {
            nav: latestNav.toFixed(2),
            navDate: navHistory[0].date,
            dailyChange: dailyChange.toFixed(2),
            dailyChangePercent: dailyChangePercent.toFixed(2),
            isPositive: dailyChange >= 0,
            returns: {
                '1Y': ret1Y ? ret1Y.toFixed(1) : null,
                '3Y': ret3Y ? ret3Y.toFixed(1) : null,
                '5Y': ret5Y ? ret5Y.toFixed(1) : null,
            },
        };
    } catch {
        return null;
    }
}

export async function GET() {
    try {
        const promises = FUND_SCHEMES.map(async (scheme) => {
            const data = await fetchFundData(scheme.code);
            if (!data) return null;
            return {
                id: scheme.code,
                name: scheme.name,
                category: scheme.category,
                risk: scheme.risk,
                house: scheme.house,
                ...data,
            };
        });

        const results = await Promise.all(promises);
        const validResults = results.filter(Boolean);

        return NextResponse.json({
            data: validResults,
            lastUpdated: new Date().toISOString(),
            source: validResults.length > 0 ? 'live' : 'error',
        });
    } catch {
        return NextResponse.json({ data: [], source: 'error' }, { status: 500 });
    }
}
