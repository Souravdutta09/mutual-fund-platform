'use client';

import { useState } from 'react';

const SIPCalculator = () => {
  const [calculationType, setCalculationType] = useState<'goal' | 'sip'>('goal');
  const [monthlyAmount, setMonthlyAmount] = useState(10000);
  const [period, setPeriod] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [goalAmount, setGoalAmount] = useState(1000000);

  // Calculate SIP returns
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

  // Calculate required SIP for goal
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
  const investedPercentage = calculationType === 'goal' 
    ? (results.investedAmount / results.corpusAmount) * 100
    : (results.investedAmount / results.corpusAmount) * 100;
  const returnsPercentage = 100 - investedPercentage;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SIP Calculator</h2>
          <p className="text-lg text-gray-600">Calculate your Systematic Investment Plan returns</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setCalculationType('goal')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  calculationType === 'goal'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Goal Amount
              </button>
              <button
                onClick={() => setCalculationType('sip')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  calculationType === 'sip'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                SIP Amount
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              {calculationType === 'goal' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Goal Amount: ₹{goalAmount.toLocaleString('en-IN')}
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Amount: ₹{monthlyAmount.toLocaleString('en-IN')}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={monthlyAmount}
                    onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1K</span>
                    <span>₹50L</span>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Period: {period} Years
                </label>
                <input
                  type="range"
                  min="1"
                  max="70"
                  value={period}
                  onChange={(e) => setPeriod(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1Y</span>
                  <span>70Y</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Annual Return: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2%</span>
                  <span>30%</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Donut Chart */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#e5e7eb"
                      strokeWidth="32"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#3b82f6"
                      strokeWidth="32"
                      fill="none"
                      strokeDasharray={`${investedPercentage * 5.03} 503`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#10b981"
                      strokeWidth="32"
                      fill="none"
                      strokeDasharray={`${returnsPercentage * 5.03} 503`}
                      strokeDashoffset={`${investedPercentage * 5.03}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-gray-900">
                      ₹{results.corpusAmount.toLocaleString('en-IN')}
                    </div>
                    <div className="text-sm text-gray-600">Corpus Amount</div>
                  </div>
                </div>
              </div>

              {/* Results Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Invested Amount</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    ₹{results.investedAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Estimated Returns</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    ₹{results.estimatedReturns.toLocaleString('en-IN')}
                  </span>
                </div>
                {calculationType === 'goal' && (
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-blue-700 font-medium">Required Monthly SIP</span>
                    <span className="text-sm font-semibold text-blue-900">
                      ₹{(results as any).requiredSIP?.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start SIP
              </button>

              {/* Disclaimer */}
              <div className="text-xs text-gray-500 text-center">
                <p>
                  Calculator is for educational purposes only. Returns are not guaranteed and depend on market performance.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIPCalculator;
