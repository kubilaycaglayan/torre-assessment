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
        <span> "" </span>
        { candidate.person.publicId }
      </h5>
      <h4>
        Rank
      </h4>
      <h5>
        <span className="rank-box">
          { candidate.rank ? candidate.rank : 'TBD' }
        </span>
      </h5>
    </article>
  );
};

export default Candidate;
