import { loginTemplate } from './loginTemplate';
import { logoutTemplate } from './logoutTemplate';
import { messageTemplate } from './messageTemplate';
import { addMessage } from './addMessage';

export const messages = socket => {
  socket.on('login', user => addMessage(loginTemplate(user)));
  socket.on('logout', user => addMessage(logoutTemplate(user)));
  socket.on('message', message => addMessage(messageTemplate(message)));
};
