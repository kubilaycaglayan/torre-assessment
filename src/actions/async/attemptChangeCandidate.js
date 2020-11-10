import { getUser } from '../../API';
import changeCandidate from '../changeCandidate';

const attemptChangeCandidate = input => dispatch => {
  getUser(input)
    .then(
      candidate => {
        dispatch(changeCandidate(candidate));
      },
    )
    .catch(
      // Error Handling
    );
};

export default attemptChangeCandidate;
