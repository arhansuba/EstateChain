'use client';

import { Suspense } from 'react';
import WalletConnect from '@/components/WalletConnect';
import InvestmentCard from '@/components/InvestmentCard';


import { Investment } from '@/types';

// This is a Server Component
export default async function InvestmentsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvestmentsContent />
    </Suspense>
  );
}

// This is a Client Component

import { useWallet } from '@/hooks/useWallet';

function InvestmentsContent() {
  const { isConnected, publicKey } = useWallet();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Connect your wallet to view your investments</h1>
        <WalletConnect />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Investments</h1>
      {publicKey && (
        <Suspense fallback={<div>Loading investment data...</div>}>
          <InvestmentsData address={publicKey} />
        </Suspense>
      )}
    </div>
  );
}

// This is a Server Component
async function InvestmentsData({ address }: { address: string }) {
  // Mock data for total invested and total returns
  const totalInvested = 10000; // Replace with actual data fetching logic
  const totalReturns = 2000; // Replace with actual data fetching logic
  const investments: Investment[] = []; // Replace with actual data fetching logic

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Invested</h2>
          <p className="text-2xl font-bold">${totalInvested.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Returns</h2>
          <p className="text-2xl font-bold">${totalReturns.toLocaleString()}</p>
        </div>
      </div>

      {investments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment: Investment) => (
            <InvestmentCard key={investment.id} investment={investment} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-xl">You don't have any investments yet.</p>
          <a href="/properties" className="text-blue-500 hover:underline mt-2 inline-block">
            Explore properties to invest
          </a>
        </div>
      )}
    </>
  );
}