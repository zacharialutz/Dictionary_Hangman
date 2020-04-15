import React from 'react';
import './App.css';

import Answer from '../Answer/Answer';
import WrongGuesses from '../WrongGuesses/WrongGuesses';

const STORE = {
  rightGuesses: ['A', 'B', 'C'],
  wrongGuesses: ['D', 'E', 'F']
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: null,
      rightGuesses: [],
      wrongGuesses: [],
      mistakes: 0,

      error: null
    }
  }

  render() {
    return (
      <div className='App'>
        <Answer word={'sandwich'} />
        <WrongGuesses list={STORE.rightGuesses} />
      </div>
    );
  }
}
