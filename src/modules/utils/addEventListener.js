import { getElement } from './getElement';

export const addEventListener = selector => type => handler => {
  const el = getElement(selector);

  if (el) {
    el.addEventListener(type, handler);
  }

  return el;
};
