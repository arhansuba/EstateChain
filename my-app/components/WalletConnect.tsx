// components/WalletConnect.tsx

import React from 'react';
import { Button } from './ui/button';


const WalletConnect: React.FC = () => {
  const { isConnected, publicKey, connectWallet, disconnectWallet } = useWallet();
  const { toast } = useToast();

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      toast({
        title: "Wallet connected",
        description: "Your wallet has been successfully connected.",
      });
    } catch (error) {
      toast({
        title: "Connection failed",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const handleDisconnectWallet = () => {
    disconnectWallet();
    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected.",
    });
  };

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {publicKey.slice(0, 6)}...{publicKey.slice(-4)}
          </span>
          <Button onClick={handleDisconnectWallet} variant="outline" size="sm">
            Disconnect
          </Button>
        </div>
      ) : (
        <Button onClick={handleConnectWallet} size="sm">
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default WalletConnect;

function useWallet(): { isConnected: any; publicKey: any; connectWallet: any; disconnectWallet: any; } {
  throw new Error('Function not implemented.');
}


function useToast(): { toast: any; } {
  throw new Error('Function not implemented.');
}
