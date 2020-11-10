import { CHANGE_LOADING_STATE } from '../constants';

const changeLoadingState = loading => ({
  type: CHANGE_LOADING_STATE,
  loading,
});

export default changeLoadingState;
