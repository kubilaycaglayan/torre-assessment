import { postJobs } from '../../API';
import changeJob from '../changeJob';
import changeCandidateRank from '../changeCandidateRank';
import changePoolRank from '../changePoolRank';

const attemptChangeJob = strength => dispatch => {
  postJobs(strength)
    .then(
      job => {
        console.log('in atttempt job', job);
        if (job.organizations !== undefined) {
          dispatch(changeJob(job));
        }
      },
    )
    .catch(
      // Error Handling
    );
};

export default attemptChangeJob;
