import {
  user1, user2, user3, user4, user5,
} from './users';
import job from './jobs';

const initialState = {
  candidate: user1,
  job,
  candidatePool: [
    { ...user2, rank: 0 },
    { ...user3, rank: 0 },
    { ...user4, rank: 0 },
    { ...user5, rank: 0 },
  ],
  candidateInput: '',
};

export default initialState;
