import React from 'react';
import { connect } from 'react-redux';
import { changeCandidateInput } from '../actions';

const AddCandidateInput = props => {
  const { candidateInput, handleInput } = props;

  return (
    <form>
      <input onChange={e => handleInput(e.target.value)} />
      <button type="button">
        Add
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  candidateInput: state.candidateInput,
});

const mapDispatchToProps = dispatch => ({
  handleInput: input => dispatch(changeCandidateInput(input)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCandidateInput);
