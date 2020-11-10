const getSkills = job => {
  const result = job.skills.map(skill => skill.name.toLowerCase());

  console.log('job skills: ', result);

  return result;
};

export default getSkills;
