import Link from 'next/link';
import { MOCK_LISTINGS, MOCK_FARMERS } from '@/lib/mockData';
import { Search, MapPin, ShieldCheck, ArrowRight, Filter, User } from 'lucide-react';

export default function BuyerDashboard() {
  const activeListings = MOCK_LISTINGS.filter(l => l.status === 'ACTIVE');

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Procurement Marketplace</h1>
          <p className="text-gray-800 mt-1">Browse verified produce and submit quotations directly to farmers.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
            <input 
              type="text" 
              placeholder="Search crops, locations..." 
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 font-medium placeholder:text-gray-600 placeholder:font-normal"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center bg-white text-gray-700">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeListings.map(listing => {
          const farmer = MOCK_FARMERS.find(f => f.id === listing.farmerId);

          return (
            <div key={listing.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                {/* Simulated Image placeholder since we don't have real assets */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-700 to-green-500 opacity-90 flex items-center justify-center text-white font-bold text-2xl tracking-widest uppercase">
                  {listing.crop}
                </div>
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                  Grade {listing.qualityGrade}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{listing.crop}</h3>
                    <p className="text-sm text-gray-800 font-medium">{listing.quantity} tonnes Available</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-800">Expected Price</p>
                    <p className="text-lg font-bold text-gray-900">₹{listing.expectedPrice}<span className="text-sm font-normal text-gray-800">/kg</span></p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <User className="w-4 h-4 text-gray-700" />
                    <span>{farmer?.name}</span>
                    {farmer?.verified && <span title="Platform Verified"><ShieldCheck className="w-4 h-4 text-blue-500" /></span>}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <MapPin className="w-4 h-4 text-gray-700" />
                    <span>{listing.location}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link 
                    href={`/buyer/quote/${listing.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors"
                  >
                    Submit Quotation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
