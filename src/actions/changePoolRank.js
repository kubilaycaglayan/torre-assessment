import { CHANGE_POOL_RANK } from '../constants';

const changePoolRank = job => ({
  type: CHANGE_POOL_RANK,
  job,
});

export default changePoolRank;
