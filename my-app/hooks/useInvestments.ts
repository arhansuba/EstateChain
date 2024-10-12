// hooks/useInvestments.ts

import { useState, useEffect } from 'react';
import { Investment } from '@/types';
import { fetchInvestments } from '@/services/stellarService';

export function useInvestments(address: string | null) {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);

  useEffect(() => {
    if (address) {
      fetchInvestments(address).then((data: any[] | ((prevState: Investment[]) => Investment[])) => {
        if (Array.isArray(data)) {
          setInvestments(data);
          setTotalInvested(data.reduce((sum: any, inv: { investedAmount: any; }) => sum + inv.investedAmount, 0));
          setTotalReturns(data.reduce((sum: any, inv: { returns: any; }) => sum + inv.returns, 0));
        }
      });
    }
  }, [address]);

  return { investments, totalInvested, totalReturns };
}