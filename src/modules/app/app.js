import io from 'socket.io-client';

import { messages } from '../messages';
import { footer } from '../footer';

export const app = () => {
  const socket = io('http://socket.celsohenrique.com');

  messages(socket);
  footer(socket);
};
