import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getRank from '../helpers/ranking/getRank';
import Candidate from '../components/Candidate';
import Job from '../components/Job';
import Pool from './Pool';
import AddCandidateInput from './AddCandidateInput';
import { changeCandidateRank, changePoolRank } from '../actions';

const App = props => {
  const {
    currentCandidate, currentJob, currentCandidatePool, updateRanks,
  } = props;

  useEffect(() => {
    updateRanks(currentJob);
  }, [currentJob]);

  return (
    <>
      <header>
        Hello Torre!
      </header>
      <section className="query">
        <AddCandidateInput />
        <Candidate candidate={currentCandidate} className="single-candidate" />
      </section>
      <section className="">
        <Job job={currentJob} />
      </section>
      <section className="">
        <h3 className="pool-title">
          Talent Pool
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

const mapDispatchToProps = dispatch => ({
  updateRanks: job => {
    dispatch(changeCandidateRank(job));
    dispatch(changePoolRank(job));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
