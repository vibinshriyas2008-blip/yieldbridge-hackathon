'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UploadCloud, Leaf } from 'lucide-react';

export default function AddProducePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      router.push('/farmer');
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/farmer" className="inline-flex items-center text-green-600 font-medium mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-green-700 p-6 text-white flex items-center gap-3">
          <Leaf className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">List New Produce</h1>
            <p className="text-green-100 text-sm mt-1">Publish your crop directly to verified buyers.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Crop Type</label>
              <select required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
                <option value="">Select Crop...</option>
                <option value="Carrot">Carrot</option>
                <option value="Beetroot">Beetroot</option>
                <option value="Tomato">Tomato</option>
                <option value="Onion">Onion</option>
                <option value="Potato">Potato</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (Tonnes)</label>
              <input required type="number" min="0.1" step="0.1" placeholder="e.g. 5" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected Price (₹ per kg)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                <input required type="number" min="1" placeholder="e.g. 35" className="w-full pl-8 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quality Grade</label>
              <select required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
                <option value="A">Grade A (Premium)</option>
                <option value="B">Grade B (Standard)</option>
                <option value="C">Grade C (Processing)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input required type="text" defaultValue="Coimbatore, Tamil Nadu" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-gray-50" readOnly />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected Harvest Date</label>
              <input required type="date" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 cursor-pointer transition-colors">
              <UploadCloud className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Click to upload photos of your crop</p>
              <p className="text-gray-400 text-sm mt-1">PNG, JPG up to 10MB</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
            <textarea rows={3} placeholder="E.g., Organic, specific variety, recent weather impact..." className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"></textarea>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
            <Link href="/farmer" className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-sm transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
