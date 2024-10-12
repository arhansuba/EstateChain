// my-app/lib/contracts/escrowClient.ts
import { Contract } from 'stellar-sdk';
import { CONTRACT_IDS, NETWORK_PASSPHRASE, NETWORK_URL } from '../../../config/contracts';

export const getMarketplaceContract = () => {
  return new Contract(CONTRACT_IDS.ESCROW, );
};

// Repeat this pattern for marketplaceClient.ts, propertyClient.ts, sharesClient.ts, and incrementClient.ts