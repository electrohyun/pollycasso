import { io, Socket } from 'socket.io-client';

import { useAuthStore } from '@/entities/user';

let socket: Socket | null = null;

export const getWaitingSocket = (): Socket => {
  const token = useAuthStore.getState().accessToken;

  if (!socket) {
    socket = io(`${import.meta.env.VITE_SOCKET_URL}/waiting`, {
      transports: ['websocket'],
      autoConnect: false,
      auth: { token },
    });
  }

  if (socket) {
    socket.auth = { token };
  }

  return socket;
};
