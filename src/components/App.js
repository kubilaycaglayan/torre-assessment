import React from 'react';
import getInterests from '../helpers/getInterests';
import getStrengths from '../helpers/getStrengths';
import { user1 as user } from '../state/users';

console.log(getInterests(user));

const App = () => (
  <header>
    Hello Torre!
  </header>
);

export default App;
