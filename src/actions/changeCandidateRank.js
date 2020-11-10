import { CHANGE_CANDIDATE_INPUT } from '../constants';

const changeCandidateInput = input => ({
  type: CHANGE_CANDIDATE_INPUT,
  input,
});

export default changeCandidateInput;
