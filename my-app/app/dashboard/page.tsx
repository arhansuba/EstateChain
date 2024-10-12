import { Suspense } from 'react';
import WalletConnect from '@/components/WalletConnect';
import Dashboard from '@/components/dashboard';
import { getPropertyContract } from '../../lib/contracts/property/propertyClient';

// This is a Server Component
export default async function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

// This is a Client Component
'use client';

import { useWallet } from '@/context/WalletContext';
import { useState, useEffect } from 'react';

function DashboardContent() {
  const { isConnected, publicKey } = useWallet();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Connect your wallet to view your dashboard</h1>
        <WalletConnect />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Suspense fallback={<div>Loading dashboard data...</div>}>
        {publicKey && <DashboardData address={publicKey} />}
      </Suspense>
    </div>
  );
}

// This is a Client Component
function DashboardData({ address }: { address: string }) {
  const [properties, setProperties] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const contract = getPropertyContract();
      const fetchedProperties = await contract.getProperties(address);
      const fetchedInvestments = await contract.getInvestments(address);
      const fetchedTotalValue = await contract.getTotalValue(address);

      setProperties(fetchedProperties);
      setInvestments(fetchedInvestments);
      setTotalValue(fetchedTotalValue);
    }

    fetchData();
  }, [address]);

  return (
    <Dashboard 
      properties={properties}
      investments={investments}
      totalValue={totalValue}
    />
  );
}