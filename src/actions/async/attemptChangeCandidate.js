import { getUser } from '../../API';
import changeCandidate from '../changeCandidate';
import changeLoadingState from '../changeLoadingState';
import getStrengths from '../../helpers/candidate/getStrengths';
import attemptChangeJob from './attemptChangeJob';
import { LOADING_TALENT, NOT_LOADING } from '../../constants';

const attemptChangeCandidate = input => dispatch => {
  if (input === '') return;
  dispatch(changeLoadingState(LOADING_TALENT));
  getUser(input)
    .then(
      candidate => {
        if (candidate !== undefined && candidate.person !== undefined) {
          dispatch(changeCandidate(candidate));
          const firstStrength = getStrengths(candidate, 1)[0];
          dispatch(changeLoadingState(NOT_LOADING));
          dispatch(attemptChangeJob(firstStrength));
        }
      },
    )
    .catch(
      // Error Handling
    );
};

export default attemptChangeCandidate;
