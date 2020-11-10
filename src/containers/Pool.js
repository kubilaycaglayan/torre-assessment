import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Candidate from '../components/Candidate';

const Pool = props => {
  const { candidatePool } = props;

  return (
    <section className="pool">
      { candidatePool
        .map(candidate => <Candidate candidate={candidate} key={candidate.person.subjectId} />) }
    </section>
  );
};

Pool.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  candidatePool: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  candidatePool: state.candidatePool,
});

export default connect(
  mapStateToProps,
  null,
)(Pool);
