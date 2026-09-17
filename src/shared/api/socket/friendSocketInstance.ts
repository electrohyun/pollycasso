import type { Socket } from './io';
import { io } from './io';

let socket: Socket | null = null;

export const getFriendSocket = (token?: string | null): Socket => {
  if (!socket) {
    socket = io(`${import.meta.env.VITE_SOCKET_URL}/friends`, {
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
