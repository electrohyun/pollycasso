import type { Socket } from './io';
import { io } from './io';

let socket: Socket | null = null;

export const getWaitingSocket = (token?: string | null): Socket => {
  if (!socket) {
    socket = io(`${import.meta.env.VITE_SOCKET_URL}/waiting`, {
      transports: ['websocket'],
      autoConnect: false,
      auth: { token },
    });
  }

  if (token !== undefined) {
    socket.auth = { token };
  }

  return socket;
};
