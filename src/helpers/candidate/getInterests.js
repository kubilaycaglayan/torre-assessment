const getInterests = candidate => {
  const result = candidate.interests
    .map(interest => interest.name.toLowerCase());

  console.log('candid interests: ', result);

  return result;
};

export default getInterests;
