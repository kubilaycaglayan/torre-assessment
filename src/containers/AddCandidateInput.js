import React from 'react';
import { connect } from 'react-redux';
import { changeCandidateInput } from '../actions';
import { attemptChangeCandidate } from '../actions';

const AddCandidateInput = props => {
  const { handleInput, handleSubmit, candidateInput } = props;

  return (
    <form>
      <input onChange={e => { handleInput(e.target.value); }} placeholder="search with username" />
      <button type="button" onClick={() => { handleSubmit(candidateInput); }}>
        Find The Job
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  candidateInput: state.candidateInput,
});

const mapDispatchToProps = dispatch => ({
  handleInput: input => dispatch(changeCandidateInput(input)),
  handleSubmit: input => dispatch(attemptChangeCandidate(input)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCandidateInput);
