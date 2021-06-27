import { CHANGE_CANDIDATE } from '../constants';

const changeCandidate = candidate => ({
  type: CHANGE_CANDIDATE,
  candidate,
});

export default changeCandidate;
