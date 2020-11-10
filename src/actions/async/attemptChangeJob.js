import { postJobs } from '../../API';
import changeJob from '../changeJob';
import changeCandidateRank from '../changeCandidateRank';
import changePoolRank from '../changePoolRank';

const attemptChangeJob = strength => dispatch => {
  postJobs(strength)
    .then(
      job => {
        dispatch(changeJob(job));
        // dispatch(changeCandidateRank(job));
        // dispatch(changePoolRank(job));
      },
    )
    .catch(
      // Error Handling
    );
};

export default attemptChangeJob;
