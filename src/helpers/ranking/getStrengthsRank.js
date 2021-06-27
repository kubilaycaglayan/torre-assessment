import getSkills from '../job/getSkills';
import getStrengths from '../candidate/getStrengths';
import getInterests from '../candidate/getInterests';

const getStrengthsRank = (candidate, job) => {
  let points = 0;

  const jobSkills = getSkills(job);
  const candidateStrengths = getStrengths(candidate);
  const candidateInterests = getInterests(candidate);

  jobSkills.forEach(skill => {
    if (candidateInterests.includes(skill)) {
      points += 50;
    }

    if (candidateStrengths.includes(skill)) {
      points += 100;
    }
  });

  return points;
};

export default getStrengthsRank;
