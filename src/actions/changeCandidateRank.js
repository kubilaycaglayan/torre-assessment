import { CHANGE_CANDIDATE_RANK } from '../constants';

const changeCandidateRank = job => ({
  type: CHANGE_CANDIDATE_RANK,
  job,
});

export default changeCandidateRank;
