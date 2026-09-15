import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { useAuthStore } from '@/entities/user';
import { GameSocketContext } from './gameSocketContext';
import { getGameSocket } from './gameSocketInstance';

export const GameSocketProvider = ({ children }: { children: ReactNode }) => {
  const gameSocket = getGameSocket();

  const [isGameConnected, setIsGameConnected] = useState(gameSocket.connected);

  const token = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (!token || !gameSocket) return;

    gameSocket.auth = { token };

    const handleConnect = () => setIsGameConnected(true);
    const handleDisconnect = () => setIsGameConnected(false);

    gameSocket.on('connect', handleConnect);
    gameSocket.on('disconnect', handleDisconnect);

    if (!gameSocket.connected) {
      gameSocket.connect();
    }

    return () => {
      gameSocket.off('connect', handleConnect);
      gameSocket.off('disconnect', handleDisconnect);
    };
  }, [token, gameSocket]);

  return (
    <GameSocketContext.Provider value={{ gameSocket, isGameConnected }}>
      {children}
    </GameSocketContext.Provider>
  );
};
