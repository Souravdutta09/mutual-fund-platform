'use client';

import { useState } from 'react';

const SIPCalculator = () => {
  const [calculationType, setCalculationType] = useState<'goal' | 'sip'>('goal');
  const [monthlyAmount, setMonthlyAmount] = useState(10000);
  const [period, setPeriod] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [goalAmount, setGoalAmount] = useState(1000000);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = period * 12;
    const futureValue = monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvested = monthlyAmount * months;
    const estimatedReturns = futureValue - totalInvested;
    return {
      corpusAmount: Math.round(futureValue),
      investedAmount: totalInvested,
      estimatedReturns: Math.round(estimatedReturns)
    };
  };

  const calculateGoalSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = period * 12;
    const requiredSIP = goalAmount / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvested = Math.round(requiredSIP) * months;
    const estimatedReturns = goalAmount - totalInvested;
    return {
      corpusAmount: goalAmount,
      investedAmount: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      requiredSIP: Math.round(requiredSIP)
    };
  };

  const results = calculationType === 'goal' ? calculateGoalSIP() : calculateSIP();
  const investedPercentage = (results.investedAmount / results.corpusAmount) * 100;
  const returnsPercentage = 100 - investedPercentage;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">SIP Calculator</h2>
          <p className="text-lg text-gray-500">Calculate your Systematic Investment Plan returns</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-xl bg-gray-100 p-1">
              <button
                onClick={() => setCalculationType('goal')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${calculationType === 'goal'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Goal Amount
              </button>
              <button
                onClick={() => setCalculationType('sip')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${calculationType === 'sip'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                SIP Amount
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Input Section */}
            <div className="space-y-8">
              {calculationType === 'goal' ? (
                <div>
                  <label className="flex justify-between items-center text-sm font-semibold text-slate-700 mb-3">
                    <span>Goal Amount</span>
                    <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">{'\u20B9'}{goalAmount.toLocaleString('en-IN')}</span>
                  </label>
                  <input type="range" min="100000" max="10000000" step="50000" value={goalAmount} onChange={(e) => setGoalAmount(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{'\u20B9'}1L</span><span>{'\u20B9'}1Cr</span>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="flex justify-between items-center text-sm font-semibold text-slate-700 mb-3">
                    <span>Monthly Amount</span>
                    <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">{'\u20B9'}{monthlyAmount.toLocaleString('en-IN')}</span>
                  </label>
                  <input type="range" min="1000" max="500000" step="1000" value={monthlyAmount} onChange={(e) => setMonthlyAmount(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{'\u20B9'}1K</span><span>{'\u20B9'}50L</span>
                  </div>
                </div>
              )}

              <div>
                <label className="flex justify-between items-center text-sm font-semibold text-slate-700 mb-3">
                  <span>Investment Period</span>
                  <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">{period} Years</span>
                </label>
                <input type="range" min="1" max="70" value={period} onChange={(e) => setPeriod(Number(e.target.value))} className="w-full" />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1Y</span><span>70Y</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between items-center text-sm font-semibold text-slate-700 mb-3">
                  <span>Expected Annual Return</span>
                  <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">{expectedReturn}%</span>
                </label>
                <input type="range" min="2" max="30" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-full" />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>2%</span><span>30%</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Donut Chart */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="#e2e8f0" strokeWidth="32" fill="none" />
                    <circle cx="96" cy="96" r="80" stroke="#334155" strokeWidth="32" fill="none"
                      strokeDasharray={`${investedPercentage * 5.03} 503`} strokeLinecap="round" />
                    <circle cx="96" cy="96" r="80" stroke="#10b981" strokeWidth="32" fill="none"
                      strokeDasharray={`${returnsPercentage * 5.03} 503`} strokeDashoffset={`${investedPercentage * 5.03}`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-xl font-bold text-slate-900">{'\u20B9'}{results.corpusAmount.toLocaleString('en-IN')}</div>
                    <div className="text-xs text-gray-500 font-medium">Corpus Amount</div>
                  </div>
                </div>
              </div>

              {/* Results Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-slate-700 rounded-full mr-3"></div>
                    <span className="text-sm text-slate-600 font-medium">Invested Amount</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{'\u20B9'}{results.investedAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="text-sm text-slate-600 font-medium">Estimated Returns</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-600">{'\u20B9'}{results.estimatedReturns.toLocaleString('en-IN')}</span>
                </div>
                {calculationType === 'goal' && (
                  <div className="flex justify-between items-center p-3.5 bg-emerald-50 rounded-xl border border-emerald-100">
                    <span className="text-sm text-slate-700 font-semibold">Required Monthly SIP</span>
                    <span className="text-sm font-bold text-emerald-700">{'\u20B9'}{(results as any).requiredSIP?.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01]">
                Start SIP
              </button>

              <div className="text-xs text-gray-400 text-center">
                <p>Calculator is for educational purposes only. Returns are not guaranteed and depend on market performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIPCalculator;
