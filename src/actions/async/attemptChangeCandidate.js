import { getUser } from '../../API';
import changeCandidate from '../changeCandidate';
import getStrengths from '../../helpers/candidate/getStrengths';
import attemptChangeJob from './attemptChangeJob';

const attemptChangeCandidate = input => dispatch => {
  getUser(input)
    .then(
      candidate => {
        console.log('in atttempt candidate:', candidate);
        dispatch(changeCandidate(candidate));
        const firstStrength = getStrengths(candidate, 1)[0];
        dispatch(attemptChangeJob(firstStrength));
      },
    )
    .catch(
      // Error Handling
    );
};

export default attemptChangeCandidate;
