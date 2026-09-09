import Link from 'next/link';
import { ArrowRight, Leaf, Users, Phone, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Leaf className="w-12 h-12 text-green-600" />
            <h1 className="text-5xl font-bold text-gray-900">YieldBridge</h1>
          </div>
          <p className="text-xl text-gray-600">
            Direct Farmer-to-Market Platform with Competitive Bidding & Price Transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/farmer" className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 hover:shadow-md hover:border-green-300 transition-all group">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Leaf className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Farmer Portal</h2>
            <p className="text-gray-700 mb-4 font-medium">List produce, receive quotes, and choose the best offer.</p>
            <div className="flex items-center text-green-700 font-bold">
              Enter Dashboard <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>

          <Link href="/buyer" className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md hover:border-blue-300 transition-all group">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Buyer Portal</h2>
            <p className="text-gray-700 mb-4 font-medium">Browse verified produce, submit quotations, and secure supply.</p>
            <div className="flex items-center text-blue-700 font-bold">
              Enter Dashboard <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>

          <Link href="/assisted" className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md hover:border-orange-300 transition-all group">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assisted Access</h2>
            <p className="text-gray-700 mb-4 font-medium">Voice/IVR and Service Center simulation for digital inclusion.</p>
            <div className="flex items-center text-orange-700 font-bold">
              Start Simulation <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>

          <Link href="/impact" className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md hover:border-purple-300 transition-all group">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Impact & Transparency</h2>
            <p className="text-gray-700 mb-4 font-medium">View price transparency breakdown and platform impact metrics.</p>
            <div className="flex items-center text-purple-700 font-bold">
              View Analytics <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
