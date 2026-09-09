import Link from 'next/link';
import { MOCK_LISTINGS, MOCK_OFFERS, MOCK_BUYERS } from '@/lib/mockData';
import { PlusCircle, TrendingUp, Package, IndianRupee, MapPin, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function FarmerDashboard() {
  const listings = MOCK_LISTINGS.filter(l => l.farmerId === 'f1');
  
  // Find listings with offers
  const getOffersForListing = (listingId: string) => MOCK_OFFERS.filter(o => o.listingId === listingId);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Farm Dashboard</h1>
        <Link 
          href="/farmer/add" 
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-sm transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          List New Produce
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Listings</p>
            <p className="text-2xl font-bold text-gray-900">{listings.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Pending Offers</p>
            <p className="text-2xl font-bold text-gray-900">
              {listings.reduce((acc, curr) => acc + getOffersForListing(curr.id).length, 0)}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
            <IndianRupee className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Earned (This Season)</p>
            <p className="text-2xl font-bold text-gray-900">₹1,45,000</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Listings & Offers</h2>

      <div className="space-y-8">
        {listings.map(listing => {
          const offers = getOffersForListing(listing.id);
          const bestOffer = offers.reduce((prev, current) => (prev.offeredPrice > current.offeredPrice) ? prev : current, offers[0]);

          return (
            <div key={listing.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{listing.crop}</h3>
                    <span className="px-2.5 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      Grade {listing.qualityGrade}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {listing.quantity} tonnes • Expected: ₹{listing.expectedPrice}/kg
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 font-medium">Status</p>
                  <p className="text-green-600 font-semibold flex items-center gap-1 justify-end">
                    <span className="w-2 h-2 rounded-full bg-green-600 inline-block animate-pulse"></span>
                    Receiving Quotes
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  Live Quotations ({offers.length})
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {offers.map(offer => {
                    const buyer = MOCK_BUYERS.find(b => b.id === offer.buyerId);
                    const isRecommended = offer.id === bestOffer?.id;

                    return (
                      <div key={offer.id} className={`p-5 rounded-xl border-2 transition-all ${isRecommended ? 'border-green-500 bg-green-50/30' : 'border-gray-200 hover:border-gray-300'}`}>
                        {isRecommended && (
                          <div className="flex items-center gap-1 text-green-700 text-xs font-bold uppercase tracking-wider mb-3">
                            <CheckCircle2 className="w-4 h-4" /> Recommended Offer
                          </div>
                        )}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="font-bold text-gray-900 flex items-center gap-1">
                              {buyer?.name}
                              {buyer?.verified && <ShieldCheck className="w-4 h-4 text-blue-500" />}
                            </p>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {buyer?.location.split(',')[0]}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className={`text-2xl font-bold ${isRecommended ? 'text-green-600' : 'text-gray-900'}`}>
                              ₹{offer.offeredPrice}<span className="text-sm text-gray-500 font-normal">/kg</span>
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-6">
                          <p className="flex justify-between">
                            <span>Quantity Requested:</span>
                            <span className="font-medium text-gray-900">{offer.quantityRequested} tonnes</span>
                          </p>
                          <p className="flex justify-between">
                            <span>Logistics:</span>
                            <span className="font-medium text-gray-900 flex items-center gap-1">
                              <Truck className="w-3 h-3" /> 
                              {offer.logisticsType === 'BUYER_PICKUP' ? 'Buyer Pickup' : offer.logisticsType === 'PLATFORM_ASSISTED' ? 'Platform Transport' : 'Farmer Transport'}
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span>Payment:</span>
                            <span className="font-medium text-gray-900 truncate max-w-[120px]" title={offer.paymentTerms}>
                              {offer.paymentTerms}
                            </span>
                          </p>
                        </div>

                        <Link 
                          href={`/farmer/compare/${listing.id}`} 
                          className={`w-full py-2.5 rounded-lg font-medium text-center block ${isRecommended ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                        >
                          Review & Accept
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
