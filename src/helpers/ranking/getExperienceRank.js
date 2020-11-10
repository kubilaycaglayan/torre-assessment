const getExperienceRank = candidate => {
  const result = candidate.experiences
    .filter(experience => experience.weight !== 0).length * 100;
  return result;
};

export default getExperienceRank;
