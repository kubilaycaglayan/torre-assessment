import React from 'react';
import { connect } from 'react-redux';
import Candidate from '../components/Candidate';

const Pool = props => {
  const { candidatePool } = props;

  return (
    <section>
      { candidatePool
        .map(candidate => <Candidate candidate={candidate} key={candidate.person.subjectId} />) }
    </section>
  );
};

const mapStateToProps = state => ({
  candidatePool: state.candidatePool,
});

export default connect(
  mapStateToProps,
  null,
)(Pool);
