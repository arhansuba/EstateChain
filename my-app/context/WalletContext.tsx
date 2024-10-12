// context/WalletContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the WalletContextType
export interface WalletContextType {
  isConnected: boolean;
  publicKey: string | null;
  balance: string;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState('0');

  const connect = async () => {
    // Implement your connection logic here
    // For example:
    // const connectedPublicKey = await someWalletLibrary.connect();
    // setPublicKey(connectedPublicKey);
    // setIsConnected(true);
    // await fetchBalance(connectedPublicKey);
  };

  const disconnect = () => {
    setIsConnected(false);
    setPublicKey(null);
    setBalance('0');
  };

  const fetchBalance = async (publicKey: string) => {
    // Implement balance fetching logic
    // For example:
    // const server = new Server('https://horizon-testnet.stellar.org');
    // const account = await server.loadAccount(publicKey);
    // const balance = account.balances.find(b => b.asset_type === 'native')?.balance || '0';
    // setBalance(balance);
  };

  useEffect(() => {
    // Check if wallet is already connected on component mount
    // Implement your logic here
  }, []);

  const value: WalletContextType = {
    isConnected,
    publicKey,
    balance,
    connect,
    disconnect,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}