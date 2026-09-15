import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { useAuthStore } from '@/entities/user';
import { WaitingSocketContext } from './waitingSocketContext';
import { getWaitingSocket } from './waitingSocketInstance';

export const WaitingSocketProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const waitingSocket = getWaitingSocket();

  const [isWaitingConnected, setIsWaitingConnected] = useState(
    waitingSocket.connected,
  );

  // 리액트 상태 구독용 (변경 감지용)
  const token = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (!token || !waitingSocket) return;

    waitingSocket.auth = { token };

    const handleConnect = () => setIsWaitingConnected(true);
    const handleDisconnect = () => setIsWaitingConnected(false);

    waitingSocket.on('connect', handleConnect);
    waitingSocket.on('disconnect', handleDisconnect);

    if (!waitingSocket.connected) {
      waitingSocket.connect();
    }

    return () => {
      waitingSocket.off('connect', handleConnect);
      waitingSocket.off('disconnect', handleDisconnect);
    };
  }, [token, waitingSocket]);

  return (
    <WaitingSocketContext.Provider
      value={{ waitingSocket, isWaitingConnected }}
    >
      {children}
    </WaitingSocketContext.Provider>
  );
};
