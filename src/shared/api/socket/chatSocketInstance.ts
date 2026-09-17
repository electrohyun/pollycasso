import type { Socket } from './io';
import { io } from './io';

let chatSocket: Socket | null = null;

export const getChatSocket = (token?: string | null): Socket => {
  if (!chatSocket) {
    chatSocket = io(`${import.meta.env.VITE_SOCKET_URL}/chat`, {
      transports: ['websocket'],
      autoConnect: false,
      auth: { token },
    });
  }

  if (token !== undefined) {
    chatSocket.auth = { token };
  }

  return chatSocket;
};
