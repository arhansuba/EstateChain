// app/properties/page.tsx

import React from 'react';
import { usePropertyData } from '@/hooks/usePropertyData';
import { useWallet } from '@/hooks/useWallet';
import PropertyCard from '../../components/Propertycard';
import WalletConnect from '@/components/WalletConnect';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function PropertiesPage() {
  const { properties, loading, error, refreshProperties } = usePropertyData();
  const { isConnected } = useWallet();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Connect your wallet to view properties</h1>
        <WalletConnect />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-xl mb-4">{error}</p>
        <button 
          onClick={refreshProperties}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">No properties available at the moment.</p>
      )}
    </div>
  );
}