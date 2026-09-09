import Link from 'next/link';
import { Users, Search, Bell, User } from 'lucide-react';

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-blue-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Users className="w-8 h-8" />
              <span className="text-xl font-bold">YieldBridge Buyer</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-blue-700 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-blue-700 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 bg-blue-900 px-3 py-1.5 rounded-full">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">FreshMart Supermarkets</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
