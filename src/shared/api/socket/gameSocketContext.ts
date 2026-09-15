import { createContext, useContext } from 'react';
import type { Socket } from 'socket.io-client';

export interface GameSocketContextValue {
  gameSocket: Socket | null;
  isGameConnected: boolean;
}

export const GameSocketContext = createContext<GameSocketContextValue | null>(
  null,
);

export const useGameSocket = () => {
  const context = useContext(GameSocketContext);
  return context ?? { gameSocket: null, isGameConnected: false };
};
