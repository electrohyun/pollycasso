import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { useAuthStore } from '@/entities/user';
import { FriendSocketContext } from './friendSocketContext';
import { getFriendSocket } from './friendSocketInstance';

export const FriendSocketProvider = ({ children }: { children: ReactNode }) => {
  const friendSocket = getFriendSocket();

  const [isFriendConnected, setIsFriendConnected] = useState(
    friendSocket.connected,
  );

  const token = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (!token || !friendSocket) return;

    friendSocket.auth = { token };

    const handleConnect = () => setIsFriendConnected(true);
    const handleDisconnect = () => setIsFriendConnected(false);

    friendSocket.on('connect', handleConnect);
    friendSocket.on('disconnect', handleDisconnect);

    if (!friendSocket.connected) {
      friendSocket.connect();
    }

    return () => {
      friendSocket.off('connect', handleConnect);
      friendSocket.off('disconnect', handleDisconnect);
    };
  }, [token, friendSocket]);

  return (
    <FriendSocketContext.Provider value={{ friendSocket, isFriendConnected }}>
      {children}
    </FriendSocketContext.Provider>
  );
};
