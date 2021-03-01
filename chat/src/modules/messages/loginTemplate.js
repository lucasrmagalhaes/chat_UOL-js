import moment from 'moment';

export const loginTemplate = user =>
  `<li class="message">${moment().format(
    '(HH:mm:ss)'
  )} <span class="message-user">${user.username}</span> entrou na sala!</li>`;
