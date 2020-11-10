import { combineReducers } from 'redux';
import candidate from './candidate';
import candidatePool from './candidatePool';
import job from './job';

const reducer = combineReducers({
  candidate,
  candidatePool,
  job,
});

export default reducer;
