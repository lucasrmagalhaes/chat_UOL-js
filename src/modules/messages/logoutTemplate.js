import moment from 'moment';

export const logoutTemplate = user =>
  `<li class="message">${moment().format(
    '(HH:mm:ss)'
  )} <span class="message-user">${user.username}</span> saiu da sala!</li>`;
