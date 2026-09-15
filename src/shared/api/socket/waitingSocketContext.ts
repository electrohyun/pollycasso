import { createContext, useContext } from 'react';
import type { Socket } from 'socket.io-client';

export interface WaitingSocketContextValue {
  waitingSocket: Socket | null;
  isWaitingConnected: boolean;
}

export const WaitingSocketContext =
  createContext<WaitingSocketContextValue | null>(null);

export const useWaitingSocket = () => {
  const context = useContext(WaitingSocketContext);
  return context ?? { waitingSocket: null, isWaitingConnected: false };
};
