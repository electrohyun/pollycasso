import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { useAuthStore } from '@/entities/user';
import { FriendSocketContext, getFriendSocket } from '@/shared/api';

export const FriendSocketProvider = ({ children }: { children: ReactNode }) => {
  const token = useAuthStore((state) => state.accessToken);
  const friendSocket = getFriendSocket(token);

  const [isFriendConnected, setIsFriendConnected] = useState(
    friendSocket.connected,
  );

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
