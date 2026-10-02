'use client';

import { useState, useId } from 'react';
import Link from 'next/link';

interface GoalPreset {
    id: string;
    title: string;
    icon: string;
    defaultCost: number; // in today's rupees
    defaultYears: number;
    defaultInflation: number; // %
    defaultReturn: number; // %
    description: string;
}

const GOAL_PRESETS: GoalPreset[] = [
    {
        id: 'education',
        title: "Child's Education",
        icon: '🎓',
        defaultCost: 2500000,
        defaultYears: 12,
        defaultInflation: 8,
        defaultReturn: 12,
        description: 'Higher education & college tuition costs rise at ~8-10% annually.',
    },
    {
        id: 'marriage',
        title: "Child's Marriage",
        icon: '💍',
        defaultCost: 2000000,
        defaultYears: 15,
        defaultInflation: 7,
        defaultReturn: 12,
        description: 'Plan ahead for ceremonial & wedding expenses with disciplined SIPs.',
    },
    {
        id: 'home',
        title: 'Dream Home',
        icon: '🏡',
        defaultCost: 3500000,
        defaultYears: 7,
        defaultInflation: 6,
        defaultReturn: 12,
        description: 'Accumulate a substantial down payment to reduce home loan burden.',
    },
    {
        id: 'car',
        title: 'New Car',
        icon: '🚗',
        defaultCost: 1200000,
        defaultYears: 4,
        defaultInflation: 5,
        defaultReturn: 11,
        description: 'Drive home your preferred vehicle without high-interest personal loans.',
    },
    {
        id: 'retirement',
        title: 'Retirement Corpus',
        icon: '🏖️',
        defaultCost: 15000000,
        defaultYears: 22,
        defaultInflation: 6,
        defaultReturn: 12,
        description: 'Build a solid, inflation-proof nest egg for a self-reliant retirement.',
    },
    {
        id: 'custom',
        title: 'Custom Wealth Goal',
        icon: '🌟',
        defaultCost: 2000000,
        defaultYears: 10,
        defaultInflation: 6,
        defaultReturn: 12,
        description: 'Any milestone: startup fund, international vacation, or wealth creation.',
    },
];

export default function GoalPlanner() {
    const todayCostInputId = useId();
    const existingSavingsInputId = useId();
    const [selectedGoalId, setSelectedGoalId] = useState<string>('education');
    const [customTitle, setCustomTitle] = useState<string>('Custom Goal');
    const [todayCost, setTodayCost] = useState<number>(2500000);
    const [years, setYears] = useState<number>(12);
    const [inflationRate, setInflationRate] = useState<number>(8);
    const [expectedReturn, setExpectedReturn] = useState<number>(12);
    const [existingSavings, setExistingSavings] = useState<number>(0);
    const [planMode, setPlanMode] = useState<'sip' | 'lumpsum'>('sip');

    const handleSelectPreset = (preset: GoalPreset) => {
        setSelectedGoalId(preset.id);
        setTodayCost(preset.defaultCost);
        setYears(preset.defaultYears);
        setInflationRate(preset.defaultInflation);
        setExpectedReturn(preset.defaultReturn);
    };

    // Financial Formulas:
    // 1. Future Value of Goal Cost (Adjusted for Inflation)
    // FV = PV * (1 + inflation)^years
    const futureGoalCost = Math.round(todayCost * Math.pow(1 + inflationRate / 100, years));

    // 2. Future Value of Existing Savings
    const futureExistingSavings = Math.round(existingSavings * Math.pow(1 + expectedReturn / 100, years));

    // 3. Net Target Corpus needed
    const netTarget = Math.max(0, futureGoalCost - futureExistingSavings);

    // 4. Monthly SIP Required:
    // Monthly rate i = expectedReturn / 12 / 100
    // Total months n = years * 12
    // SIP = NetTarget * i / [ ((1+i)^n - 1) * (1+i) ]
    const monthlyRate = expectedReturn / 12 / 100;
    const totalMonths = years * 12;
    const requiredSIP = netTarget > 0 && monthlyRate > 0
        ? Math.round((netTarget * monthlyRate) / ((Math.pow(1 + monthlyRate, totalMonths) - 1) * (1 + monthlyRate)))
        : 0;

    // 5. One-Time Lumpsum Required Today:
    // Lumpsum = NetTarget / (1 + expectedReturn / 100)^years
    const requiredLumpsum = netTarget > 0
        ? Math.round(netTarget / Math.pow(1 + expectedReturn / 100, years))
        : 0;

    // Total SIP Amount Invested over the period
    const totalSIPInvested = requiredSIP * totalMonths;
    const estimatedWealthGain = Math.max(0, netTarget - totalSIPInvested);

    const activeGoalTitle = selectedGoalId === 'custom'
        ? (customTitle || 'Custom Goal')
        : (GOAL_PRESETS.find(g => g.id === selectedGoalId)?.title || 'Financial Goal');

    // Recommendation logic based on time horizon
    const getRecommendation = (y: number) => {
        if (y >= 7) {
            return {
                strategy: 'Aggressive Wealth Growth',
                allocation: '70% Equity (Flexi Cap / Mid Cap) + 30% Large & Balanced Hybrid',
                desc: 'With a 7+ year horizon, equity mutual funds effectively beat inflation and build compounding wealth.',
            };
        } else if (y >= 3) {
            return {
                strategy: 'Balanced & Moderate Growth',
                allocation: '50% Large Cap / Multi Asset + 50% Balanced Advantage & Conservative Hybrid',
                desc: 'A medium 3-7 year horizon requires a mix of equity growth with hybrid stability to limit downside.',
            };
        } else {
            return {
                strategy: 'Capital Preservation & Short-Term Goal',
                allocation: '70% Short Duration / Corporate Debt + 30% Arbitrage / Liquid Funds',
                desc: 'Short horizons below 3 years should focus on capital safety and liquidity rather than high equity risk.',
            };
        }
    };

    const recommendation = getRecommendation(years);

    // Formatted INR helper
    const formatINR = (val: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(val);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                    <span>🎯</span> Comprehensive Financial Goal Planner
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                    Plan Your Life Milestones with <span className="text-emerald-700">Inflation-Adjusted SIPs</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    What costs ₹25 Lakhs today could easily exceed ₹50 Lakhs in 10-12 years. Calculate the exact monthly SIP or lumpsum needed to achieve your family goals on schedule.
                </p>
            </div>

            {/* Goal Presets Selection */}
            <div className="mb-10">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 text-center sm:text-left">
                    Select a Goal to Begin:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {GOAL_PRESETS.map((preset) => {
                        const isSelected = selectedGoalId === preset.id;
                        return (
                            <button
                                key={preset.id}
                                onClick={() => handleSelectPreset(preset)}
                                className={`p-4 rounded-xl text-center border transition-all duration-200 flex flex-col items-center justify-center gap-2 ${isSelected
                                    ? 'bg-emerald-50/80 border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                                    : 'bg-white border-gray-200 hover:border-emerald-300 hover:bg-gray-50/80'
                                    }`}
                            >
                                <span className="text-2xl">{preset.icon}</span>
                                <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-emerald-800' : 'text-slate-700'}`}>
                                    {preset.title}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Column: Input Sliders & Controls */}
                <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-6">

                    {/* Custom Title if selected */}
                    {selectedGoalId === 'custom' && (
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                                Goal Name
                            </label>
                            <input
                                type="text"
                                value={customTitle}
                                onChange={(e) => setCustomTitle(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm font-medium"
                                placeholder="e.g. World Tour, Startup Fund, Sister's Wedding"
                            />
                        </div>
                    )}

                    {/* Target Goal Cost Today */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor={todayCostInputId} className="text-sm font-semibold text-slate-800">
                                Target Cost in Today&apos;s Value
                            </label>
                            <div className="flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200/80">
                                <span className="text-xs text-emerald-800 font-bold">₹</span>
                                <input
                                    id={todayCostInputId}
                                    type="number"
                                    value={todayCost}
                                    onChange={(e) => setTodayCost(Math.max(10000, Number(e.target.value)))}
                                    className="w-28 bg-transparent text-emerald-900 font-bold text-sm text-right focus:outline-none"
                                />
                            </div>
                        </div>
                        <input
                            type="range"
                            min="100000"
                            max="30000000"
                            step="50000"
                            value={todayCost}
                            onChange={(e) => setTodayCost(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                            <span>₹1 Lakh</span>
                            <span>₹1 Crore</span>
                            <span>₹3 Crore</span>
                        </div>
                    </div>

                    {/* Time Horizon (Years) */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-slate-800">
                                Time to Achieve Goal
                            </label>
                            <span className="text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-lg text-sm font-bold">
                                {years} {years === 1 ? 'Year' : 'Years'}
                            </span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="35"
                            step="1"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                            <span>1 Year (Short)</span>
                            <span>10 Years (Mid)</span>
                            <span>35 Years (Long-Term)</span>
                        </div>
                    </div>

                    {/* Expected Inflation Rate */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <label className="text-sm font-semibold text-slate-800">
                                    Expected Annual Inflation Rate
                                </label>
                                <p className="text-[11px] text-gray-500">Education ~8%, Medical ~10%, General ~6%</p>
                            </div>
                            <span className="text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-lg text-sm font-bold">
                                {inflationRate}% p.a.
                            </span>
                        </div>
                        <input
                            type="range"
                            min="3"
                            max="12"
                            step="0.5"
                            value={inflationRate}
                            onChange={(e) => setInflationRate(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                            <span>3% (Low)</span>
                            <span>6% (Standard)</span>
                            <span>12% (High)</span>
                        </div>
                    </div>

                    {/* Expected Mutual Fund Return */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <label className="text-sm font-semibold text-slate-800">
                                    Expected Annual Return (CAGR)
                                </label>
                                <p className="text-[11px] text-gray-500">Historically 12-14% for diversified equity funds</p>
                            </div>
                            <span className="text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-lg text-sm font-bold">
                                {expectedReturn}% p.a.
                            </span>
                        </div>
                        <input
                            type="range"
                            min="6"
                            max="18"
                            step="0.5"
                            value={expectedReturn}
                            onChange={(e) => setExpectedReturn(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                            <span>6% (Debt)</span>
                            <span>12% (Equity)</span>
                            <span>18% (Aggressive)</span>
                        </div>
                    </div>

                    {/* Existing Savings / Current Investment */}
                    <div className="pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <label htmlFor={existingSavingsInputId} className="text-sm font-semibold text-slate-800">
                                    Existing Savings for this Goal (Optional)
                                </label>
                                <p className="text-[11px] text-gray-500">Any corpus already saved will compound and reduce your required SIP</p>
                            </div>
                            <div className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-200">
                                <span className="text-xs text-gray-500 font-bold">₹</span>
                                <input
                                    id={existingSavingsInputId}
                                    type="number"
                                    value={existingSavings}
                                    onChange={(e) => setExistingSavings(Math.max(0, Number(e.target.value)))}
                                    className="w-24 bg-transparent text-slate-900 font-bold text-sm text-right focus:outline-none"
                                />
                            </div>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max={Math.min(todayCost, 5000000)}
                            step="25000"
                            value={existingSavings}
                            onChange={(e) => setExistingSavings(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                            <span>₹0</span>
                            <span>₹25 Lakhs</span>
                            <span>₹50 Lakhs</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Calculated Results & Blueprint */}
                <div className="lg:col-span-5 space-y-6">

                    {/* Primary Results Card */}
                    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-slate-700 relative overflow-hidden">
                        {/* Decorative circle */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                        {/* Goal Tag */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                                {activeGoalTitle} Blueprint
                            </span>
                            <span className="text-xs text-gray-300">
                                In {years} {years === 1 ? 'Year' : 'Years'}
                            </span>
                        </div>

                        {/* Inflation Adjusted Future Cost */}
                        <div className="mb-6 pb-6 border-b border-white/10">
                            <p className="text-xs text-gray-400 mb-1">Inflation-Adjusted Target Cost</p>
                            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                {formatINR(futureGoalCost)}
                            </div>
                            <div className="mt-2 text-xs text-emerald-300/90 flex items-center gap-1.5">
                                <span>📈</span>
                                <span>Grows from {formatINR(todayCost)} due to {inflationRate}% yearly inflation</span>
                            </div>
                        </div>

                        {/* Toggle between SIP vs Lumpsum Plan */}
                        <div className="mb-5">
                            <div className="grid grid-cols-2 p-1 bg-white/10 rounded-xl">
                                <button
                                    onClick={() => setPlanMode('sip')}
                                    className={`py-2 text-xs font-bold rounded-lg transition-all ${planMode === 'sip'
                                        ? 'bg-emerald-600 text-white shadow-md'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    Monthly SIP Route
                                </button>
                                <button
                                    onClick={() => setPlanMode('lumpsum')}
                                    className={`py-2 text-xs font-bold rounded-lg transition-all ${planMode === 'lumpsum'
                                        ? 'bg-emerald-600 text-white shadow-md'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    One-Time Lumpsum
                                </button>
                            </div>
                        </div>

                        {/* The Key Figure */}
                        {planMode === 'sip' ? (
                            <div className="bg-white/10 rounded-xl p-5 border border-white/10 mb-6">
                                <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider mb-1">
                                    Required Monthly SIP
                                </p>
                                <div className="text-3xl font-extrabold text-emerald-400">
                                    {formatINR(requiredSIP)}
                                    <span className="text-xs text-gray-300 font-normal"> / month</span>
                                </div>
                                <p className="text-[11px] text-gray-300 mt-2">
                                    Invest for {totalMonths} months @ {expectedReturn}% expected return
                                </p>
                            </div>
                        ) : (
                            <div className="bg-white/10 rounded-xl p-5 border border-white/10 mb-6">
                                <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider mb-1">
                                    Required One-Time Investment Today
                                </p>
                                <div className="text-3xl font-extrabold text-emerald-400">
                                    {formatINR(requiredLumpsum)}
                                </div>
                                <p className="text-[11px] text-gray-300 mt-2">
                                    Compounding over {years} years @ {expectedReturn}% p.a.
                                </p>
                            </div>
                        )}

                        {/* Breakdown Metrics */}
                        <div className="space-y-3 text-xs mb-6 pt-2 border-t border-white/10">
                            {planMode === 'sip' && (
                                <div className="flex justify-between text-gray-300">
                                    <span>Total Amount You Invest:</span>
                                    <span className="font-semibold text-white">{formatINR(totalSIPInvested)}</span>
                                </div>
                            )}
                            {planMode === 'sip' && (
                                <div className="flex justify-between text-gray-300">
                                    <span>Wealth Gain from Compounding:</span>
                                    <span className="font-semibold text-emerald-400">{formatINR(estimatedWealthGain)}</span>
                                </div>
                            )}
                            {existingSavings > 0 && (
                                <div className="flex justify-between text-gray-300">
                                    <span>Existing Savings will grow to:</span>
                                    <span className="font-semibold text-emerald-300">{formatINR(futureExistingSavings)}</span>
                                </div>
                            )}
                        </div>

                        {/* Direct Action Link */}
                        <Link
                            href={`/enquiry?goal=${encodeURIComponent(activeGoalTitle)}&target=${futureGoalCost}&sip=${requiredSIP}&years=${years}`}
                            className="block w-full text-center py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-emerald-600/30 hover:scale-[1.02]"
                        >
                            Request Consultation for this Goal →
                        </Link>
                    </div>

                    {/* Asset Allocation Suggestion Card */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">📊</span>
                            <h3 className="text-sm font-bold text-slate-900">
                                Recommended Asset Allocation ({recommendation.strategy})
                            </h3>
                        </div>
                        <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 mb-3">
                            <p className="text-xs font-semibold text-emerald-900">{recommendation.allocation}</p>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                            {recommendation.desc}
                        </p>
                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                            <span>Personalized plan by Sourav Dutta</span>
                            <Link href="/about" className="text-emerald-700 font-semibold hover:underline">
                                About Advisory →
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Why Inflation Matters educational strip */}
            <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                    💡 Why Calculating for Inflation is Essential in Mutual Fund Planning
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 leading-relaxed">
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Purchasing Power Erosion</h4>
                        <p className="text-xs">
                            At 7% inflation, prices double approximately every 10 years. A ₹25 Lakh college degree today will require ₹50 Lakhs a decade later.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Beat Fixed Deposits</h4>
                        <p className="text-xs">
                            Traditional savings yielding 5-6% after tax fail to keep pace with real inflation. Equity mutual funds have historically delivered real, inflation-beating returns.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Discipline Beats Timing</h4>
                        <p className="text-xs">
                            A systematic monthly investment started early allows compounding to do the heavy lifting, where returns account for 50%+ of your final goal corpus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
