import { CHANGE_JOB } from '../constants';

const changeJob = job => ({
  type: CHANGE_JOB,
  job,
});

export default changeJob;
