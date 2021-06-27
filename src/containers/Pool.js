import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Candidate from '../components/Candidate';

const Pool = props => {
  const { candidatePool } = props;

  return (
    <section className="pool">
      { candidatePool
        .map(candidate => <Candidate candidate={candidate} key={candidate.person.subjectId} className="pool-candidate" />) }
    </section>
  );
};

Pool.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  candidatePool: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  candidatePool: state.candidatePool,
});

export default connect(
  mapStateToProps,
  null,
)(Pool);
