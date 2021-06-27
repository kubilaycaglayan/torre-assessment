import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCandidateInput, attemptChangeCandidate } from '../actions';

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

AddCandidateInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  candidateInput: PropTypes.string.isRequired,
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
