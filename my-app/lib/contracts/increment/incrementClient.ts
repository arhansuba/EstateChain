import { Contract } from 'stellar-sdk';
import { CONTRACT_IDS, NETWORK_PASSPHRASE, NETWORK_URL } from '../../../config/contracts';

export const getIncrementContract = () => {
  return new Contract(CONTRACT_IDS.INCREMENT);
};