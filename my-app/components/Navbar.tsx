// components/Navbar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { useWallet } from '../context/WalletContext';

const Navbar: React.FC = () => {
  const { isConnected, connect, disconnect, publicKey, balance } = useWallet();

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet. Please make sure Freighter is installed and try again.');
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Stellar Estate
        </Link>

        <div className="flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/properties" className="text-gray-300 hover:text-white">
            Properties
          </Link>
          <Link href="/investments" className="text-gray-300 hover:text-white">
            Investments
          </Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isConnected ? (
            <>
              <span className="text-green-400 text-sm">
                Connected: {publicKey?.slice(0, 6)}...{publicKey?.slice(-4)}
              </span>
              <span className="text-white text-sm">
                Balance: {parseFloat(balance).toFixed(2)} XLM
              </span>
              <button
                onClick={disconnect}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              onClick={handleConnect}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;