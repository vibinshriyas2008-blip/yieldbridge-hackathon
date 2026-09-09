import Link from 'next/link';
import { ArrowLeft, PieChart, ShieldCheck, TrendingDown, TrendingUp } from 'lucide-react';

export default function ImpactDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 font-sans">
      <div className="max-w-5xl w-full">
        <Link href="/" className="inline-flex items-center text-purple-600 font-medium mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Price Transparency & Impact</h1>
          <p className="text-xl text-gray-600">Revealing hidden margins and empowering the agricultural ecosystem.</p>
          <div className="mt-4 inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
            Demo Data
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
            <p className="text-sm text-gray-500 font-medium mb-1">Farmers Connected</p>
            <p className="text-3xl font-bold text-purple-600">12,450</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
            <p className="text-sm text-gray-500 font-medium mb-1">Produce Traded</p>
            <p className="text-3xl font-bold text-purple-600">8,200 <span className="text-lg font-normal text-gray-500">tonnes</span></p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
            <p className="text-sm text-gray-500 font-medium mb-1">Avg. Farmer Revenue Increase</p>
            <p className="text-3xl font-bold text-green-600 flex justify-center items-center gap-1">
              <TrendingUp className="w-6 h-6" /> 18%
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
            <p className="text-sm text-gray-500 font-medium mb-1">Avg. Buyer Cost Reduction</p>
            <p className="text-3xl font-bold text-blue-600 flex justify-center items-center gap-1">
              <TrendingDown className="w-6 h-6" /> 12%
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">The YieldBridge Price Difference</h2>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Traditional Chain */}
            <div>
              <h3 className="text-lg font-bold text-gray-500 mb-6 flex items-center justify-center gap-2">
                Traditional Chain (Estimated)
              </h3>
              
              <div className="relative">
                <div className="absolute left-6 top-6 bottom-6 w-1 bg-gray-200"></div>
                
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center z-10 font-bold text-gray-700 shadow-sm">1</div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">Farmer receives</p>
                      <p className="text-xl font-bold text-red-600">₹24.00 <span className="text-sm font-normal">/kg</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center z-10 font-bold text-gray-700 shadow-sm">2</div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700">Aggregator Margin</p>
                      <p className="font-bold text-gray-500">+₹4.00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center z-10 font-bold text-gray-700 shadow-sm">3</div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700">Transport & Handling</p>
                      <p className="font-bold text-gray-500">+₹5.00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center z-10 font-bold text-gray-700 shadow-sm">4</div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700">Wholesaler Margin</p>
                      <p className="font-bold text-gray-500">+₹3.00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 border-4 border-white flex items-center justify-center z-10 font-bold text-white shadow-sm">5</div>
                    <div className="flex-1 bg-gray-800 p-4 rounded-xl text-white shadow-md">
                      <p className="text-sm text-gray-300 mb-1">Final Buyer pays</p>
                      <p className="text-2xl font-bold">₹36.00 <span className="text-sm font-normal">/kg</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* YieldBridge Chain */}
            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-6 flex items-center justify-center gap-2">
                YieldBridge Platform
              </h3>
              
              <div className="relative">
                <div className="absolute left-6 top-6 bottom-6 w-1 bg-purple-200"></div>
                
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center z-10 font-bold text-purple-700 shadow-sm">1</div>
                    <div className="flex-1 bg-purple-50 p-4 rounded-xl border border-purple-200 border-l-4 border-l-green-500">
                      <p className="text-sm text-purple-600 mb-1">Farmer receives</p>
                      <p className="text-2xl font-bold text-green-600">₹32.00 <span className="text-sm font-normal">/kg</span></p>
                      <p className="text-xs text-green-700 mt-1 font-medium">+33% improvement</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center z-10 font-bold text-purple-700 shadow-sm">2</div>
                    <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700">Transparent Transport Cost</p>
                      <p className="font-bold text-gray-500">+₹3.00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center z-10 font-bold text-purple-700 shadow-sm">3</div>
                    <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-700">Platform Verification Fee</p>
                      <p className="font-bold text-gray-500">+₹0.50</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-600 border-4 border-white flex items-center justify-center z-10 font-bold text-white shadow-sm">4</div>
                    <div className="flex-1 bg-purple-600 p-4 rounded-xl text-white shadow-md border-l-4 border-l-blue-400">
                      <p className="text-sm text-purple-200 mb-1">Final Buyer pays</p>
                      <p className="text-2xl font-bold">₹35.50 <span className="text-sm font-normal">/kg</span></p>
                      <p className="text-xs text-blue-200 mt-1 font-medium">-1.4% cost reduction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
