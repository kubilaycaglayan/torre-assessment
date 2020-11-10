import { GET_USER, PROXY } from '../constants';

const getUser = (userName = 'kblycaglayan') => {
  const endpoint = `${PROXY}${GET_USER(userName)}`;

  return fetch(endpoint)
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
