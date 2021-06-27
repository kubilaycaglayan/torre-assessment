import { POST_JOBS, PROXY } from '../constants';

const postJobs = (keyWords = 'ruby on rails') => {
  const endpoint = `${PROXY}${POST_JOBS}`;

  const data = JSON.stringify(
    {
      'skill/role': {
        text: keyWords,
        experience: 'potential-to-develop',
      },
    },
  );

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then(
      res => res.json(),
    )
    .then(
      res => res.results[0],
    )
    .catch(
      () => {
        // Error handling
      },
    );
};

export default postJobs;
