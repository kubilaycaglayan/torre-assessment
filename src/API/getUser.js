import { GET_USER, PROXY } from '../constants';

const getUser = (userName = 'csandoval') => {
  const endpoint = `${PROXY}${GET_USER(userName)}`;

  return fetch(endpoint, {
    mode: 'cors',
  })
    .then(
      response => response.json(),
    )
    .catch(
      () => {
        // Error handling
      },
    );
};

export default getUser;
