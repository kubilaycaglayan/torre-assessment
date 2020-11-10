import getExperienceRank from './getExperienceRank';
import getStrengthsRank from './getStrengthsRank';

const getRank = (candidate, job) => {
  let rank = 0;

  rank += getExperienceRank(candidate);
  rank += getStrengthsRank(candidate, job);

  return rank;
};

export default getRank;
