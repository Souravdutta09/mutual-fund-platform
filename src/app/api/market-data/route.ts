import { NextResponse } from 'next/server';

const SYMBOLS = [
    { symbol: '^NSEI', name: 'NIFTY 50' },
    { symbol: '^BSESN', name: 'SENSEX' },
    { symbol: 'RELIANCE.NS', name: 'RELIANCE' },
    { symbol: 'TCS.NS', name: 'TCS' },
    { symbol: 'HDFCBANK.NS', name: 'HDFC BANK' },
    { symbol: 'INFY.NS', name: 'INFOSYS' },
    { symbol: 'ICICIBANK.NS', name: 'ICICI BANK' },
    { symbol: 'HINDUNILVR.NS', name: 'HUL' },
    { symbol: 'ITC.NS', name: 'ITC' },
    { symbol: 'SBIN.NS', name: 'SBI' },
    { symbol: 'BHARTIARTL.NS', name: 'AIRTEL' },
    { symbol: 'KOTAKBANK.NS', name: 'KOTAK' },
    { symbol: 'LT.NS', name: 'L&T' },
    { symbol: 'AXISBANK.NS', name: 'AXIS BANK' },
    { symbol: 'WIPRO.NS', name: 'WIPRO' },
];

async function fetchQuote(symbol: string, name: string) {
    try {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=1d&interval=1d`;
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
            next: { revalidate: 60 }, // cache for 60 seconds
        });

        if (!res.ok) return null;

        const data = await res.json();
        const result = data?.chart?.result?.[0];
        if (!result) return null;

        const meta = result.meta;
        const price = meta.regularMarketPrice;
        const prevClose = meta.chartPreviousClose ?? meta.previousClose;
        const change = price - prevClose;
        const changePercent = (change / prevClose) * 100;

        return {
            symbol: name,
            price: price.toFixed(2),
            change: change.toFixed(2),
            changePercent: changePercent.toFixed(2),
            isPositive: change >= 0,
        };
    } catch {
        return null;
    }
}

export async function GET() {
    try {
        const promises = SYMBOLS.map((s) => fetchQuote(s.symbol, s.name));
        const results = await Promise.all(promises);
        const validResults = results.filter(Boolean);

        if (validResults.length === 0) {
            // Return fallback data if API fails
            return NextResponse.json({
                data: SYMBOLS.slice(0, 10).map((s, i) => ({
                    symbol: s.name,
                    price: (1000 + Math.random() * 3000).toFixed(2),
                    change: ((Math.random() - 0.4) * 50).toFixed(2),
                    changePercent: ((Math.random() - 0.4) * 3).toFixed(2),
                    isPositive: Math.random() > 0.4,
                })),
                source: 'fallback',
            });
        }

        return NextResponse.json({ data: validResults, source: 'live' });
    } catch {
        return NextResponse.json({ data: [], source: 'error' }, { status: 500 });
    }
}
