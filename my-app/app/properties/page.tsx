<<<<<<< Updated upstream
// app/properties/page.tsx

import React from 'react';

import { useWallet } from '@/hooks/useWallet';
import PropertyCard from '../../components/Propertycard';
import WalletConnect from '@/components/WalletConnect';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
=======
"use client"; 
import React, { useState, useEffect } from 'react';
import { initKit, loadedPublicKey } from '../../utils/stellar-wallets-kit'; // Cüzdan yönetimi için
import CreateProperty from '../../components/CreateProperty'; // CreateProperty componenti import
>>>>>>> Stashed changes

import { useState, useEffect } from 'react';

export default function PropertiesPage() {
<<<<<<< Updated upstream
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [properties, setProperties] = useState<any[]>([]);

  const { isConnected } = useWallet();

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
      setProperties([{ id: 1, name: 'Property 1' }, { id: 2, name: 'Property 2' }]); // Example properties
    }, 2000);
  }, []);

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Connect your wallet to view properties</h1>
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
    function refreshProperties(event: React.MouseEvent<HTMLButtonElement>): void {
      throw new Error('Function not implemented.');
    }

    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-xl mb-4">{error}</p>
        <button 
          onClick={refreshProperties}
=======
  const [kit, setKit] = useState<any>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Wallet kitini başlatmak için useEffect kullanıyoruz
  useEffect(() => {
    initKit().then(setKit).catch(err => {
      console.error("Error initializing kit:", err);
      setError("Failed to initialize wallet kit");
    });
  }, []);

  // Cüzdan bağlantısını kontrol et
  useEffect(() => {
    const publicKey = loadedPublicKey();
    setIsWalletConnected(!!publicKey); // Cüzdan bağlı mı diye kontrol et
  }, [kit]);

  // Eğer cüzdan bağlı değilse kullanıcıya cüzdan bağlaması için mesaj göster
  if (!isWalletConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Connect your wallet to create a property</h1>
        <button
          onClick={() => window.open('https://freighter.app', '_blank')}
>>>>>>> Stashed changes
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  // Cüzdan bağlıysa property oluşturma formunu göster
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create a New Property</h1>
      <CreateProperty kit={kit} /> {/* Property oluşturma formu */}
    </div>
  );
}
