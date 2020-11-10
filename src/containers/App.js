import React from 'react';
import {connect} from 'react-redux';
import getRank from '../helpers/ranking/getRank';
import Candidate from '../components/Candidate';
import Job from '../components/Job';
import Pool from '../containers/Pool';
import AddCandidateInput from '../containers/AddCandidateInput';

/* import {
  user1, user2, user3, user4,
} from '../state/users';
import job from '../state/jobs';
import { connect } from 'react-redux';

console.log(getRank(user1, job));
console.log(getRank(user2, job));
console.log(getRank(user3, job));
console.log(getRank(user4, job)); */

const App = props => {
  const { currentCandidate, currentJob, currentCandidatePool } = props;
  return (
    <>
      <header>
        Hello Torre!
      </header>
      <section className="border">
        <AddCandidateInput />
        <Candidate candidate={currentCandidate} />
      </section>
      <section className="border">
        <Job job={currentJob} />
      </section>
      <section className="border">
        <h3>
          Candidate Pool
        </h3>
        <Pool />
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  currentCandidate: state.candidate,
  currentJob: state.job,
  currentCandidatePool: state.candidatePool,
});

export default connect(
  mapStateToProps,
  null,
)(App);
