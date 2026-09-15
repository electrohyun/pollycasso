import { useAuthStore } from '@/entities/user';
import type { Socket } from './io';
import { io } from './io';

let socket: Socket | null = null;

export const getGameSocket = (): Socket => {
  const token = useAuthStore.getState().accessToken;

  if (!socket) {
    socket = io(`${import.meta.env.VITE_SOCKET_URL}/game`, {
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
