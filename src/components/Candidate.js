import React from 'react';

const Candidate = props => {
  const { candidate } = props;
  return (
    <article>
      <div className="rank-box">
        <h4>
          Rank
        </h4>
        <h5 className="rank">
            { candidate.rank }
        </h5>
      </div>
      <h4>
        Professional Headline
      </h4>
      <h5>
        { candidate.person.professionalHeadline }
      </h5>
      <h4>
        Name
      </h4>
      <h5 className="name">
        { candidate.person.name }
        <span> "" </span>
        { candidate.person.publicId }
      </h5>
    </article>
  );
};

export default Candidate;
