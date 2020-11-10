import React from 'react';

const Job = props => {
  const { job } = props;
  return (
    <section>
      <h4>
        Job Description
      </h4>
      <h5>
        { job.objective }
      </h5>
      <h4>
        Organization
      </h4>
      <h5>
        { job.organizations[0].name }
      </h5>
      <h4>
        Location
      </h4>
      <h5>
        { job.locations[0] }
      </h5>
    </section>
  );
};

export default Job;
