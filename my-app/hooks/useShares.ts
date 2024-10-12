import { useState } from 'react';
import { getSharesContract } from '../lib/contracts/shares/sharesClient';
import { useWallet } from './useWallet';

export const useShares = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { publicKey, signTransaction } = useWallet();

  const buyShares = async (propertyId: string, amount: string) => {
    if (!publicKey) throw new Error('Wallet not connected');

    setIsLoading(true);
    try {
      const contract = getSharesContract();
      const transaction = await contract.buyShares({ propertyId, amount });
      const signedTransaction = await signTransaction(transaction);
      const result = await contract.submitTransaction(signedTransaction);
      return result;
    } finally {
      setIsLoading(false);
    }
  };

  const getSharesBalance = async (propertyId: string) => {
    if (!publicKey) throw new Error('Wallet not connected');

    const contract = getSharesContract();
    const balance = await contract.getSharesBalance({ propertyId, address: publicKey });
    return balance;
  };

  return { buyShares, getSharesBalance, isLoading };
};
