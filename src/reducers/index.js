import { combineReducers } from 'redux';
import candidate from './candidate';
import candidatePool from './candidatePool';
import job from './job';
import candidateInput from './candidateInput';
import loadingState from './loadingState';

const reducer = combineReducers({
  candidate,
  candidatePool,
  job,
  candidateInput,
  loadingState,
});

export default reducer;
