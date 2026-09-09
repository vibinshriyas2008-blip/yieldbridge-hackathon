'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MOCK_LISTINGS, MOCK_FARMERS } from '@/lib/mockData';

export default function SubmitQuotePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resolvedParams = use(params);
  const listingId = resolvedParams.id;
  
  const listing = MOCK_LISTINGS.find(l => l.id === listingId);
  const farmer = MOCK_FARMERS.find(f => f?.id === listing?.farmerId);

  if (!listing) return <div>Listing not found.</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        router.push('/buyer');
      }, 2000);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Quotation Submitted!</h1>
        <p className="text-xl text-gray-600 mb-8">The farmer has been notified of your offer. You will be alerted if they accept.</p>
        <div className="animate-pulse flex items-center justify-center text-blue-600 font-medium">
          Redirecting to your dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/buyer" className="inline-flex items-center text-blue-600 font-medium mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Marketplace
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="p-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 h-48 md:h-auto bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-3xl tracking-widest uppercase shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <span className="relative z-10">{listing.crop}</span>
            <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm z-10">
              Grade {listing.qualityGrade}
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{listing.crop}</h1>
                <p className="text-lg text-gray-600 font-medium">{listing.quantity} tonnes available</p>
              </div>
              <div className="text-right bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-600 font-bold mb-1">Expected Price</p>
                <p className="text-2xl font-bold text-gray-900">₹{listing.expectedPrice}<span className="text-base font-normal text-gray-500">/kg</span></p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <User className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Farmer</p>
                  <p className="font-semibold text-gray-900 flex items-center gap-1">
                    {farmer?.name}
                    {farmer?.verified && <span title="Verified"><ShieldCheck className="w-3 h-3 text-blue-500" /></span>}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900 truncate" title={listing.location}>{listing.location.split(',')[0]}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
              " {listing.additionalInfo} "
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-blue-800 p-6 text-white">
          <h2 className="text-2xl font-bold">Submit Your Quotation</h2>
          <p className="text-blue-100 text-sm mt-1">Offer a competitive price to secure this produce.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Offer Price (₹ per kg)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">₹</span>
                <input required type="number" min="1" defaultValue={listing.expectedPrice} className="w-full pl-8 border border-gray-300 rounded-lg p-4 font-bold text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Required (Tonnes)</label>
              <input required type="number" min="0.1" max={listing.quantity} step="0.1" defaultValue={listing.quantity} className="w-full border border-gray-300 rounded-lg p-4 font-bold text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Logistics Preference</label>
              <select required className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option value="BUYER_PICKUP">I will arrange pickup (Buyer Pickup)</option>
                <option value="PLATFORM_ASSISTED">YieldBridge Transport (+₹2/kg estimated)</option>
                <option value="FARMER_TRANSPORT">Farmer Delivery Required</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
              <select required className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option value="Immediate upon pickup">Immediate upon pickup</option>
                <option value="50% advance, 50% on delivery">50% advance, 50% on delivery</option>
                <option value="Full payment within 2 days of delivery">Full payment within 2 days of delivery</option>
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
            <Link href="/buyer" className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md transition-colors disabled:opacity-70 flex items-center justify-center min-w-[200px]"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quotation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
