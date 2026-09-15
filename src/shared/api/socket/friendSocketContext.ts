import { createContext, useContext } from 'react';
import type { Socket } from 'socket.io-client';

export interface FriendSocketContextValue {
  friendSocket: Socket | null;
  isFriendConnected: boolean;
}

export const FriendSocketContext =
  createContext<FriendSocketContextValue | null>(null);

export const useFriendSocket = () => {
  const context = useContext(FriendSocketContext);
  return context ?? { friendSocket: null, isFriendConnected: false };
};
