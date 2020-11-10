import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { LOADING_TALENT } from '../constants';

const Candidate = props => {
  const { candidate, className, loadingState } = props;

  return (
    loadingState === LOADING_TALENT
      ? (
        <article className={`candidate ${className || ''}`}>
          <Loading />
        </article>
      )
      : (
        <article className={`candidate ${className || ''}`}>
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
            <span> (</span>
            { candidate.person.publicId }
            <span>)</span>
          </h5>
          <a href={`http://bio.torre.co/${candidate.person.publicId}`}>
            See talent at Torre
          </a>
        </article>
      )

  );
};

Candidate.propTypes = {
  candidate: PropTypes.shape({
    rank: PropTypes.number.isRequired,
    person: PropTypes.shape({
      name: PropTypes.string.isRequired,
      publicId: PropTypes.string.isRequired,
      professionalHeadline: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
  loadingState: PropTypes.string.isRequired,
};

export default Candidate;
