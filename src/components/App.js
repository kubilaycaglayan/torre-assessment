import React from 'react';
import getRank from '../helpers/ranking/getRank';
import {
  user1, user2, user3, user4,
} from '../state/users';
import job from '../state/jobs';

console.log(getRank(user1, job));
console.log(getRank(user2, job));
console.log(getRank(user3, job));
console.log(getRank(user4, job));

const App = () => (
  <header>
    Hello Torre!
  </header>
);

export default App;
