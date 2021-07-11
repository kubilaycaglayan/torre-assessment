/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Candidate from '../components/Candidate';
import Job from '../components/Job';
import Pool from './Pool';
import AddCandidateInput from './AddCandidateInput';
import { changeCandidateRank, changePoolRank } from '../actions';
import { wakeUp } from '../API';

const App = props => {
  const {
    currentCandidate, currentJob, loadingState, updateRanks,
  } = props;

  useEffect(() => {
    updateRanks(currentJob);
  }, [currentJob]);

  useEffect(() => {
    wakeUp();
  }, []);

  return (
    <>
      <header>
        <nav />
        Hello Torre!
        <h1>
          All For Talent
          {' '}
          <span role="img" aria-label="img"> 🌠 </span>
        </h1>
        <p>
          What does this application do?
          {' '}
        </p>
        <p>
          {' '}
          You are a Talent Hunter company and you have a candidate looking for a job.
          <br />
          You can use Torre APIs to find the best job for your candidate.
          {' '}
        </p>
        <p className="green-background">
          1. Find the username of your candidate
          {' '}
          <a href="https://torre.co/en/search/people">in Torre</a>
          .
        </p>
        <p className="green-background">2. Fill the input with the username and click the "Find The Job" button.</p>
        <p className="green-background">3. Wait for the loading.</p>
        <p>First you will see that your talent will appear right below the input.</p>
        <p>Then according to your candidate&apos;s strengths, the best job fit will be fetched.</p>
        <p>
          After that, you can compare your candidate with the others in your talent pool.
          All the ranks will be updated relative to the new job on the screen.
          So you will not miss the perfect fit!
        </p>
      </header>
      <section className="query">
        <h3>
          Find The Best Job For Your Candidate
        </h3>
        <AddCandidateInput />
        <h3>
          Your Candidate
        </h3>
        <Candidate candidate={currentCandidate} className="single-candidate" loadingState={loadingState} />
      </section>
      <section className="job-fit">
        <h3>
          Best Job Fit For Your Candidate
        </h3>
        <Job job={currentJob} loadingState={loadingState} />
      </section>
      <section className="pool-wrapper">
        <h3 className="pool-title">
          Talent Pool
        </h3>
        <Pool />
      </section>
      <footer>
        <div className="wrapper">
          <a href="https://github.com/kubilaycaglayan/torre-assessment/tree/documentation">
            GitHub
          </a>
          |
          <a href="http://www.kubilaycaglayan.com">
            Kubilay Caglayan
          </a>
          |
          <a href="https://torre.co/">
            Torre
          </a>
        </div>
      </footer>
    </>
  );
};

App.propTypes = {
  currentCandidate: PropTypes.object.isRequired,
  currentJob: PropTypes.object.isRequired,
  loadingState: PropTypes.string.isRequired,
  updateRanks: PropTypes.func.isRequired,
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
