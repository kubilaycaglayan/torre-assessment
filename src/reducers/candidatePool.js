import { ADD_CANDIDATE, CHANGE_POOL_RANK } from '../constants';
import getRank from '../helpers/ranking/getRank';

const candidatePool = (state = {}, action) => {
  switch (action.type) {
    case ADD_CANDIDATE:
      return [
        ...state,
        { ...action.candidate, rank: 0 },
      ];
    case CHANGE_POOL_RANK:
      return state.map(
        candidate => ({
          ...candidate,
          rank: getRank(candidate, action.job),
        }),
      );
    default:
      return state;
  }
};

export default candidatePool;
