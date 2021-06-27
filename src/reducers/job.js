import { CHANGE_JOB } from '../constants';

const job = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_JOB:
      return {
        ...action.job,
      };
    default:
      return state;
  }
};

export default job;
