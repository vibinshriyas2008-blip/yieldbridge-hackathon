import Link from 'next/link';
import { Leaf, User, Bell, LogOut } from 'lucide-react';

export default function FarmerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-green-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="w-8 h-8" />
              <span className="text-xl font-bold">YieldBridge Farmer</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-green-600 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 bg-green-800 px-3 py-1.5 rounded-full">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Ramesh Kumar</span>
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
