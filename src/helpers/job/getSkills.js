const getSkills = job => {
  const result = job.skills.map(skill => skill.name.toLowerCase());
  return result;
};

export default getSkills;
