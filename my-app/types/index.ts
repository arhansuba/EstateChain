


export interface Investment {
    id: string;
    propertyName: string;
    propertyAddress: string;
    investedAmount: number;
    currentValue: number;
    tokensOwned: number;
    returns: number;
  }


export interface WalletContextType {

  isConnected: boolean;

  address: string; 

}

export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  imageUrl: string;
  tokenSupply: number;
  availableTokens: number;
}

export interface UserInvestment {
  id: string;
  propertyName: string;
  location: string;
  sharesOwned: number;
  currentValue: number;
  ownershipPercentage: number;
}

export interface Investment {
  id: string;
  propertyName: string;
  propertyAddress: string;
  investedAmount: number;
  currentValue: number;
  tokensOwned: number;
  returns: number;
}


