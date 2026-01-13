'use client';

const SEBIRiskDisclaimer = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-amber-900 mb-3">
          Investment Risk Disclaimer
        </h3>
        <div className="text-amber-800 space-y-3">
          <p className="leading-relaxed">
            Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
          <p className="leading-relaxed">
            Past performance may or may not be sustained in future and the same may not necessarily be replicated in future.
          </p>
          <p className="leading-relaxed">
            NAV is subject to daily change. The information contained herein does not constitute any advice or recommendation.
          </p>
          <p className="leading-relaxed">
            Investors are advised to consult their financial advisors before making any investment decisions.
          </p>
          <div className="mt-4 pt-4 border-t border-amber-300">
            <p className="text-sm text-amber-700">
              <strong>Regulatory Compliance:</strong> This platform complies with SEBI (Securities and Exchange Board of India) regulations for mutual fund distribution and investment advisory services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEBIRiskDisclaimer;
