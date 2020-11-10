const getStrengths = (candidate, count = 2) => candidate.strengths
  .sort(
    (strength1, strength2) => strength2.weight - strength1.weight,
  )
  .map(strength => strength.name).slice(0, count);

export default getStrengths;
