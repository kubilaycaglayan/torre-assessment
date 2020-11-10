const getExperienceRank = candidate => {
  const result = candidate.experiences
    .filter(experience => experience.weight !== 0).length * 100;
  console.log('candid exp', candidate.experiences);
  console.log('candid exp rank', result);

  return result;
};

export default getExperienceRank;
