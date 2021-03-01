import { getElement, getElementValue } from '../utils';

export const addMessage = message => {
  const messagesListEl = getElement('#messages-list');

  messagesListEl.innerHTML = `${messagesListEl.innerHTML}${message}`;
};
