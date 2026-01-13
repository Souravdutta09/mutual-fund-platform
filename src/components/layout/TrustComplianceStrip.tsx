'use client';

const TrustComplianceStrip = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-blue-900 font-medium">SEBI Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-900 font-medium">Data Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-blue-900 font-medium">Transparent Investing</span>
            </div>
          </div>
          <div className="text-sm text-blue-700">
            Your trusted partner for secure mutual fund investments
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustComplianceStrip;
