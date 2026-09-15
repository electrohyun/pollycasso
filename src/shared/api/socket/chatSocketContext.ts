import { createContext, useContext } from 'react';
import type { Socket } from 'socket.io-client';

export interface ChatSocketContextValue {
  chatSocket: Socket | null;
  isChatConnected: boolean;
}

export const ChatSocketContext = createContext<ChatSocketContextValue | null>(
  null,
);

export const useChatSocket = () => {
  const context = useContext(ChatSocketContext);
  return context ?? { chatSocket: null, isChatConnected: false };
};
