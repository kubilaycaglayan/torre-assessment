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
        <nav />
        Hello Torre!
        <h1>
          All For Talent
        </h1>
        <p>
          What this application does?
          {' '}
        </p>
        <p>Imagine that you are a hiring company. </p>
        <p>You have a talent and you want to use Torre APIs to find the best job for your talent. </p>
        <p className="green-background">
          1. Find the username of your talent
          {' '}
          <a href="https://torre.co/en/search/people">in Torre</a>
          .
        </p>
        <p className="green-background">2. Fill the input with the username and click the "Find The Job" button.</p>
        <p className="green-background">3. Wait for the loading.</p>
        <p>First you will see that your talent will appear right below the input.</p>
        <p>Then according to your talents strengths, the best job fit will be fetched.</p>
        <p>After that, you can compare your talent with the other talents in your talent pool. All the ranks will be updated relative to the new job on the screen. So you will not miss the perfect fit!</p>
      </header>
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
