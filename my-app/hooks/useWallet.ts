"use client";
import { useState, useEffect } from 'react';
import { Keypair } from 'stellar-sdk';
// hooks/useWalletHook.ts
"use client";

import { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';

export function useWalletHook() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletHook must be used within a WalletProvider');
  }
  return context;
}
export function useWallet() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [secretKey, setSecretKey] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const storedPublicKey = localStorage.getItem('stellarPublicKey');
    const storedSecretKey = localStorage.getItem('stellarSecretKey');
    if (storedPublicKey && storedSecretKey) {
      setPublicKey(storedPublicKey);
      setSecretKey(storedSecretKey);
      setIsConnected(true);
    }
  }, []);

  const connect = () => {
    const keypair = Keypair.random();
    const publicKey = keypair.publicKey();
    const secret = keypair.secret();

    setPublicKey(publicKey);
    setSecretKey(secret);
    setIsConnected(true);

    localStorage.setItem('stellarPublicKey', publicKey);
    localStorage.setItem('stellarSecretKey', secret);
  };

  const disconnect = () => {
    setPublicKey(null);
    setSecretKey(null);
    setIsConnected(false);

    localStorage.removeItem('stellarPublicKey');
    localStorage.removeItem('stellarSecretKey');
  };

  return {
    publicKey,
    secretKey,
    isConnected,
    connect,
    disconnect,
  };
}