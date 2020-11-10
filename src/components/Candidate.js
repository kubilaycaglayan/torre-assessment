import React from 'react';

const Candidate = props => {
  const { candidate } = props;
  return (
    <article>
      <h4>
        Professional Headline
      </h4>
      <h5>
        { candidate.person.professionalHeadline }
      </h5>
      <h4>
        Name
      </h4>
      <h5>
        { candidate.person.name }
      </h5>
      <h4>
        Rank
      </h4>
      <h5>
        { candidate.rank ? candidate.rank : 'TBD' }
      </h5>
    </article>
  );
};

export default Candidate;
