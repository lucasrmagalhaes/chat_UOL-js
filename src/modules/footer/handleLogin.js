import { getElementValue, getElement } from '../utils';
import { loggedInTemplate } from './loggedInTemplate';
import { loggedOutTemplate } from './loggedOutTemplate';

export const handleLogin = socket => ({ target: button }) => {
  const footerUserEl = getElement('.footer-user');
  const messageInput = getElement('#message-content');
  const submitButton = getElement('#message-submit');
  const username = getElementValue('#username');
  const isLogin = button.innerText === 'Entrar';

  if (username !== '' && isLogin) {
    socket.emit('login', { username });
  } else if (!isLogin) {
    socket.emit('logout', { username });
  }

  footerUserEl.innerHTML = isLogin
    ? loggedInTemplate(username)
    : loggedOutTemplate();
  button.innerText = isLogin ? 'Sair' : 'Entrar';
  messageInput.disabled = !isLogin;
  submitButton.disabled = !isLogin;

  if (isLogin) {
    messageInput.focus();
  }
};
