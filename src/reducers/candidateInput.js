import { CHANGE_CANDIDATE_INPUT } from '../constants';

const candidateInput = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CANDIDATE_INPUT:
      return action.input;
    default:
      return state;
  }
};

export default candidateInput;
