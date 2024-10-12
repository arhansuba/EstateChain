// app/dashboard/page.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import WalletConnect from '@/components/WalletConnect';
import { useWallet } from '@/context/WalletContext';
import Dashboard from '@/components/dashboard';


interface DashboardPageProps {
  // Add any server-side props here if needed
}

export default function DashboardPage({}: DashboardPageProps) {
  const { isConnected, address } = useWallet();
  const { properties, investments, totalValue } = usePropertyData(address);

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
      <Dashboard
        properties={properties}
        investments={investments}
        totalValue={totalValue}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch any server-side data here if needed
  return {
    props: {}, // Will be passed to the page component as props
  };
};

function usePropertyData(address: any): { properties: any; investments: any; totalValue: any; } {
  throw new Error('Function not implemented.');
}
