import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getRank from '../helpers/ranking/getRank';
import Candidate from '../components/Candidate';
import Job from '../components/Job';
import Loading from '../components/Loading';
import Pool from './Pool';
import AddCandidateInput from './AddCandidateInput';
import { changeCandidateRank, changePoolRank } from '../actions';

const App = props => {
  const {
    currentCandidate, currentJob, loadingState, updateRanks,
  } = props;

  useEffect(() => {
    updateRanks(currentJob);
  }, [currentJob]);

  return (
    <>
      <header>
        Hello Torre!
      </header>
      <section>
        <p>
          This is a great product...
          This is a great product...
          This is a great product...
        </p>
      </section>
      <section className="query">
        <h3>
          Find The Best Job For Your Talent
        </h3>
        <AddCandidateInput />
        <Candidate candidate={currentCandidate} className="single-candidate" loadingState={loadingState} />
      </section>
      <section className="job-fit">
        <h3>
          Best Job Fit
        </h3>
        <Job job={currentJob} loadingState={loadingState} />
      </section>
      <section className="pool-wrapper">
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
  loadingState: state.loadingState,
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
