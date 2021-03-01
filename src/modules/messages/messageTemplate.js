import moment from 'moment';

export const messageTemplate = message => `
<li class="message">${moment(message.date).format(
  '(HH:mm:ss)'
)} <span class="message-user">${
  message.from
}</span> <span class="message-type">${message.type}</span> ${message.to}: ${
  message.content
}</li>
`;
