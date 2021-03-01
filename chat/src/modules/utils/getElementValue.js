import { getElement } from './getElement';

export const getElementValue = selector => {
  const el = getElement(selector);

  if (el) {
    return el.value;
  }

  return '';
};
