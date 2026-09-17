import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { useAuthStore } from '@/entities/user';
import { GameSocketContext, getGameSocket } from '@/shared/api';

export const GameSocketProvider = ({ children }: { children: ReactNode }) => {
  const token = useAuthStore((state) => state.accessToken);
  const gameSocket = getGameSocket(token);

  const [isGameConnected, setIsGameConnected] = useState(gameSocket.connected);

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
