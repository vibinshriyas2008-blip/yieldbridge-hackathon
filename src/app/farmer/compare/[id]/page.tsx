'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, MapPin, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { MOCK_LISTINGS, MOCK_OFFERS, MOCK_BUYERS } from '@/lib/mockData';

export default function CompareOffersPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [acceptedOffer, setAcceptedOffer] = useState<string | null>(null);

  const resolvedParams = use(params);
  const listingId = resolvedParams.id;
  
  const listing = MOCK_LISTINGS.find(l => l.id === listingId);
  const offers = MOCK_OFFERS.filter(o => o.listingId === listingId);
  const bestOffer = offers.reduce((prev, current) => (prev.offeredPrice > current.offeredPrice) ? prev : current, offers[0]);

  if (!listing) return <div>Listing not found.</div>;

  const handleAccept = (offerId: string) => {
    setAcceptedOffer(offerId);
    setTimeout(() => {
      // Navigate to success or back to dashboard
      router.push('/farmer');
    }, 1500);
  };

  if (acceptedOffer) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Offer Accepted!</h1>
        <p className="text-xl text-gray-600 mb-8">You have successfully locked in the price for your {listing.crop}. The buyer will be notified immediately.</p>
        <div className="animate-pulse flex items-center justify-center text-green-600 font-medium">
          Redirecting to your dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/farmer" className="inline-flex items-center text-green-600 font-medium mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="p-6 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Compare Offers for {listing.crop}</h1>
            <p className="text-gray-600">Available: {listing.quantity} tonnes • Expected: ₹{listing.expectedPrice}/kg</p>
          </div>
          <div className="px-4 py-2 bg-green-100 text-green-800 font-bold rounded-lg">
            {offers.length} Active Offers
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {offers.map(offer => {
          const buyer = MOCK_BUYERS.find(b => b.id === offer.buyerId);
          const isRecommended = offer.id === bestOffer?.id;

          // Calculate final farmer revenue considering transport
          const transportCostPerKg = offer.estimatedTransportCost;
          const netPrice = offer.offeredPrice - transportCostPerKg;

          return (
            <div key={offer.id} className={`bg-white rounded-2xl p-6 relative overflow-hidden transition-all ${isRecommended ? 'border-2 border-green-500 shadow-md' : 'border border-gray-200 shadow-sm'}`}>
              {isRecommended && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-xl font-bold text-sm flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" /> Platform Recommended
                </div>
              )}

              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4 mt-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        {buyer?.name}
                        {buyer?.verified && <span title="Platform Verified Buyer"><ShieldCheck className="w-5 h-5 text-blue-500" /></span>}
                      </h3>
                      <p className="text-gray-600 flex items-center gap-1 mt-1 text-sm">
                        <MapPin className="w-4 h-4" /> {buyer?.location}
                      </p>
                    </div>
                    <div className="text-right bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">Trust Score</p>
                      <p className="font-bold text-gray-900 flex items-center gap-1 justify-end">
                        <span className="text-yellow-500">★</span> {buyer?.trustScore}/5.0
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-gray-500 mb-1">Quantity Requested</p>
                      <p className="font-semibold text-gray-900">{offer.quantityRequested} tonnes</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-gray-500 mb-1">Logistics</p>
                      <p className="font-semibold text-gray-900 flex items-center gap-1">
                        <Truck className="w-4 h-4" /> 
                        {offer.logisticsType === 'BUYER_PICKUP' ? 'Buyer Pickup' : offer.logisticsType === 'PLATFORM_ASSISTED' ? 'Platform Assisted' : 'Farmer Transport'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm">
                    <p className="text-gray-500 mb-1">Payment Terms</p>
                    <p className="font-semibold text-gray-900">{offer.paymentTerms}</p>
                  </div>
                </div>

                <div className="md:w-72 bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col">
                  <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Price Breakdown</h4>
                  
                  <div className="space-y-3 text-sm flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Offered Price:</span>
                      <span className="font-medium text-gray-900">₹{offer.offeredPrice}/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transport Ded.:</span>
                      <span className="font-medium text-red-600">-₹{transportCostPerKg}/kg</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="font-bold text-gray-900">Net to you:</span>
                      <span className="font-bold text-green-600 text-lg">₹{netPrice}/kg</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleAccept(offer.id)}
                    className={`w-full mt-6 py-3 rounded-xl font-bold shadow-sm transition-colors text-white ${isRecommended ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    Accept Offer
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
