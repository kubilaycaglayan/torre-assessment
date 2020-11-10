import { combineReducers } from 'redux';
import candidate from './candidate';
import candidatePool from './candidatePool';
import job from './job';
import candidateInput from './candidateInput';

const reducer = combineReducers({
  candidate,
  candidatePool,
  job,
  candidateInput,
});

export default reducer;
