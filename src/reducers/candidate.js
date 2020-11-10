import { CHANGE_CANDIDATE, CHANGE_CANDIDATE_RANK } from '../constants';
import getRank from '../helpers/ranking/getRank';

const candidate = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CANDIDATE:
      return {
        ...action.candidate,
        rank: 0,
      };
    case CHANGE_CANDIDATE_RANK:
      return {
        ...state,
        rank: getRank(state, action.job),
      };
    default:
      return state;
  }
};

export default candidate;
