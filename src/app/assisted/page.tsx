'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mic, ArrowLeft, Headphones, MonitorSmartphone, CheckCircle } from 'lucide-react';

export default function AssistedAccessSimulation() {
  const [activeTab, setActiveTab] = useState<'VOICE' | 'IVR' | 'CENTER'>('VOICE');
  const [voiceStep, setVoiceStep] = useState(0);

  const handleVoiceNext = () => setVoiceStep(prev => Math.min(prev + 1, 3));
  const handleVoiceReset = () => setVoiceStep(0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 font-sans">
      <div className="max-w-3xl w-full">
        <Link href="/" className="inline-flex items-center text-orange-600 font-medium mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Assisted Access Prototype</h1>
          <p className="text-xl text-gray-800">Bridging the digital divide for farmers with limited smartphone literacy.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button 
              className={`flex-1 py-4 text-center font-bold border-b-2 transition-colors ${activeTab === 'VOICE' ? 'border-orange-500 text-orange-600 bg-orange-50' : 'border-transparent text-gray-900 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('VOICE')}
            >
              <Mic className="w-5 h-5 inline-block mr-2" /> Voice Interface
            </button>
            <button 
              className={`flex-1 py-4 text-center font-bold border-b-2 transition-colors ${activeTab === 'IVR' ? 'border-orange-500 text-orange-600 bg-orange-50' : 'border-transparent text-gray-900 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('IVR')}
            >
              <Phone className="w-5 h-5 inline-block mr-2" /> IVR System
            </button>
            <button 
              className={`flex-1 py-4 text-center font-bold border-b-2 transition-colors ${activeTab === 'CENTER' ? 'border-orange-500 text-orange-600 bg-orange-50' : 'border-transparent text-gray-900 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('CENTER')}
            >
              <MonitorSmartphone className="w-5 h-5 inline-block mr-2" /> Service Center
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'VOICE' && (
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-12 h-12 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Voice Assistant (Demo)</h2>
                <p className="text-gray-800 font-medium mb-8 max-w-lg mx-auto">Farmers can list produce and review offers simply by speaking in their native language.</p>

                <div className="bg-gray-900 rounded-xl p-6 text-left max-w-lg mx-auto mb-6 h-64 flex flex-col justify-end relative overflow-hidden">
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-300 font-mono tracking-widest uppercase">Recording</span>
                  </div>

                  {voiceStep >= 0 && (
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-orange-600 rounded-full p-2 mt-1">
                        <Headphones className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-2xl rounded-tl-none text-sm">
                        Welcome to YieldBridge. What would you like to sell today?
                      </div>
                    </div>
                  )}
                  {voiceStep >= 1 && (
                    <div className="flex items-start gap-3 mb-4 justify-end">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-2xl rounded-tr-none text-sm">
                        "I have 3 tonnes of carrots to sell."
                      </div>
                    </div>
                  )}
                  {voiceStep >= 2 && (
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-orange-600 rounded-full p-2 mt-1">
                        <Headphones className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-2xl rounded-tl-none text-sm">
                        3 tonnes of carrots. What is your expected price per kg?
                      </div>
                    </div>
                  )}
                  {voiceStep >= 3 && (
                    <div className="flex items-start gap-3 mb-4 justify-end">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-2xl rounded-tr-none text-sm">
                        "Thirty-five rupees."
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-center gap-4">
                  <button onClick={handleVoiceReset} className="px-6 py-2 border border-gray-300 rounded-lg text-gray-800 font-medium hover:bg-gray-50">Reset</button>
                  <button onClick={handleVoiceNext} disabled={voiceStep >= 3} className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 disabled:opacity-50">
                    Simulate Next Interaction
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'IVR' && (
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-12 h-12 text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic Phone IVR</h2>
                <p className="text-gray-800 mb-8 max-w-lg mx-auto">For completely offline farmers using basic feature phones. Dial a toll-free number to interact with the marketplace.</p>

                <div className="max-w-sm mx-auto bg-gray-100 border-4 border-gray-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
                  <div className="w-16 h-1 bg-gray-300 mx-auto rounded-full mb-6"></div>
                  <p className="font-mono text-center text-lg mb-8 text-gray-800">Call Connected...</p>
                  
                  <div className="text-left space-y-4 font-mono text-sm text-gray-800 bg-white p-4 border border-gray-300 rounded-lg shadow-inner">
                    <p>Welcome to YieldBridge KisanLine.</p>
                    <p>For Tamil, press 1.</p>
                    <p>For English, press 2.</p>
                    <p>---</p>
                    <p>Press 1 to Sell Produce.</p>
                    <p>Press 2 to Hear Current Offers.</p>
                    <p>Press 3 to Check Your Listings.</p>
                    <p>Press 9 to talk to an agent.</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-8">
                    {[1,2,3,4,5,6,7,8,9,'*',0,'#'].map(key => (
                      <div key={key} className="bg-gray-200 aspect-square rounded-full flex items-center justify-center text-xl font-bold text-gray-700 hover:bg-gray-300 cursor-pointer shadow-sm">
                        {key}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'CENTER' && (
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MonitorSmartphone className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Assisted Service Centers</h2>
                <p className="text-gray-800 mb-8 max-w-lg mx-auto">Authorized local operators help farmers without devices to list their produce securely.</p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto text-left">
                  <h3 className="font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">Center Operator Flow</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-500 shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">Farmer Verification</p>
                        <p className="text-sm text-gray-800">Farmer arrives at center and provides registered phone number. OTP verifies identity.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-500 shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">Digital Capture</p>
                        <p className="text-sm text-gray-800">Operator inputs crop details and takes photographs of the produce using center equipment.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-gray-300 shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">Offer Explanation</p>
                        <p className="text-sm text-gray-800">Operator visually shows the farmer the competing offers, explaining logistics and price breakdowns clearly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-gray-300 shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">Printed Receipt</p>
                        <p className="text-sm text-gray-800">Farmer selects offer and receives a printed physical receipt of the transaction and pickup details.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
