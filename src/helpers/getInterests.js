const getInterests = candidate => candidate.interests
  .map(interest => interest.name);

export default getInterests;
