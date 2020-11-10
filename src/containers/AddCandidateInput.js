import React from 'react';

const AddCandidateInput = () => {
  return (
    <form>
      <input onChange={handleInput} />
      <button type="button">
        Add
      </button>
    </form>
  );
}