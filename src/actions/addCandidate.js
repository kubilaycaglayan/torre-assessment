import { ADD_CANDIDATE } from '../constants';

const addCandidate = candidate => ({
  type: ADD_CANDIDATE,
  candidate,
});

export default addCandidate;
