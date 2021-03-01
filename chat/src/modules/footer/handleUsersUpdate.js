import { getElement } from '../utils';

export const handleUsersUpdate = users => {
  const usersSelect = getElement('#message-to');
  const selectedValue = usersSelect.value;
  const hasUser = users.find(({ username }) => username === selectedValue);

  const options = users.reduce(
    (options, { username }) =>
      `${options}<option value="${username}">${username}</option>`,
    '<option value="Todos">Todos</>'
  );

  usersSelect.innerHTML = options;

  if (hasUser) {
    usersSelect.value = selectedValue;
  }
};
