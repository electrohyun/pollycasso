import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { useAuthStore } from '@/entities/user';
import { ChatSocketContext } from './chatSocketContext';
import { getChatSocket } from './chatSocketInstance';

export const ChatSocketProvider = ({ children }: { children: ReactNode }) => {
  const chatSocket = getChatSocket();
  const [isChatConnected, setIsChatConnected] = useState(chatSocket.connected);
  const token = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (!token || !chatSocket) return;

    chatSocket.auth = { token };

    const handleConnect = () => setIsChatConnected(true);
    const handleDisconnect = () => setIsChatConnected(false);

    chatSocket.on('connect', handleConnect);
    chatSocket.on('disconnect', handleDisconnect);

    if (!chatSocket.connected) {
      chatSocket.connect();
    }

    return () => {
      chatSocket.off('connect', handleConnect);
      chatSocket.off('disconnect', handleDisconnect);
    };
  }, [token, chatSocket]);

  return (
    <ChatSocketContext.Provider value={{ chatSocket, isChatConnected }}>
      {children}
    </ChatSocketContext.Provider>
  );
};
