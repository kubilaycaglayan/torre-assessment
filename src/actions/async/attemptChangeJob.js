import { postJobs } from '../../API';
import changeJob from '../changeJob';

const attemptChangeJob = strength => dispatch => {
  postJobs(strength)
    .then(
      job => {
        dispatch(changeJob(job));
      },
    )
    .catch(
      // Error Handling
    );
};

export default attemptChangeJob;
