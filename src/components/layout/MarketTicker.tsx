'use client';

import { useEffect, useState } from 'react';

interface StockData {
    symbol: string;
    price: string;
    change: string;
    changePercent: string;
    isPositive: boolean;
}

export default function MarketTicker() {
    const [stocks, setStocks] = useState<StockData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/market-data');
                const json = await res.json();
                if (json.data && json.data.length > 0) {
                    setStocks(json.data);
                }
            } catch (err) {
                console.error('Failed to fetch market data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // Refresh every 60 seconds
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="bg-slate-950 border-b border-slate-800 py-2 overflow-hidden">
                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        Loading market data...
                    </div>
                </div>
            </div>
        );
    }

    if (stocks.length === 0) return null;

    // Duplicate the ticker content for seamless looping
    const tickerContent = [...stocks, ...stocks];

    return (
        <div className="bg-slate-950 border-b border-slate-800 py-2 overflow-hidden">
            <div className="ticker-wrapper">
                <div className="ticker-content">
                    {tickerContent.map((stock, index) => (
                        <div key={index} className="inline-flex items-center mx-6 whitespace-nowrap">
                            <span className="text-gray-400 text-xs font-medium mr-2">{stock.symbol}</span>
                            <span className="text-white text-xs font-semibold mr-2">{'\u20B9'}{stock.price}</span>
                            <span className={`text-xs font-semibold ${stock.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                                {stock.isPositive ? '\u25B2' : '\u25BC'} {stock.change} ({stock.changePercent}%)
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .ticker-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
        }
        .ticker-content {
          display: flex;
          animation: ticker-scroll 40s linear infinite;
          white-space: nowrap;
        }
        .ticker-content:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
}
