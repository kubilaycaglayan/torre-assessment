import { postJobs } from '../../API';
import changeJob from '../changeJob';
import changeLoadingState from '../changeLoadingState';
import { NOT_LOADING, LOADING_JOB } from '../../constants';

const attemptChangeJob = strength => dispatch => {
  dispatch(changeLoadingState(LOADING_JOB));
  postJobs(strength)
    .then(
      job => {
        if (job.organizations !== undefined) {
          dispatch(changeJob(job));
        }
        dispatch(changeLoadingState(NOT_LOADING));
      },
    )
    .catch(
      // Error Handling
    );
};

export default attemptChangeJob;
