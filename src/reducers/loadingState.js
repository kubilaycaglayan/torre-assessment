import { CHANGE_LOADING_STATE } from '../constants';

const loadingState = (state = '', action) => {
  switch (action.type) {
    case CHANGE_LOADING_STATE:
      return action.loading;
    default:
      return state;
  }
};

export default loadingState;
