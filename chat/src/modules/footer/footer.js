import { addEventListener } from '../utils';
import { handleLogin } from './handleLogin';
import { handleUsersUpdate } from './handleUsersUpdate';
import { handleSubmit } from './handleSubmit';

export const footer = socket => {
  addEventListener('#login')('click')(handleLogin(socket));
  addEventListener('#message-submit')('click')(handleSubmit(socket));
  socket.on('users update', handleUsersUpdate);
};
