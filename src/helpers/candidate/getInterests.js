const getInterests = candidate => {
  const result = candidate.interests
    .map(interest => interest.name.toLowerCase());
  return result;
};

export default getInterests;
