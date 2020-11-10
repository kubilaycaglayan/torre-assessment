const getStrengths = (candidate, count = 3) => {
  const result = candidate.strengths
    .sort(
      (strength1, strength2) => strength2.weight - strength1.weight,
    )
    .map(strength => strength.name.toLowerCase()).slice(0, count);

  console.log('candid strengths: ', result);

  return result;
};

export default getStrengths;
