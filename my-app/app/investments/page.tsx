// app/investments/page.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import { useWallet } from '@/hooks/useWallet';
import { useInvestments } from '@/hooks/useInvestments';
import WalletConnect from '@/components/WalletConnect';
import InvestmentCard from '@/components/InvestmentCard';
import { Investment } from '@/types';

interface InvestmentsPageProps {
  // Add any server-side props here if needed
}

export default function InvestmentsPage({}: InvestmentsPageProps) {
  const { isConnected, address } = useWallet();
  const { investments, totalInvested, totalReturns } = useInvestments(address);

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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch any server-side data here if needed
  return {
    props: {}, // Will be passed to the page component as props
  };
};