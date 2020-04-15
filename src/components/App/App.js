import React from 'react';
import './App.css';

import Answer from '../Answer/Answer';
import Word from '../Word/Word';
import WrongGuesses from '../WrongGuesses/WrongGuesses';

const STORE = {
  rightGuesses: ['A', 'B', 'C'],
  wrongGuesses: ['D', 'E', 'F']
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,

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
        <Answer word={this.state.word} />
        <div className={'row'}>
          <WrongGuesses list={STORE.wrongGuesses} />
          <Word readout={STORE.rightGuesses} />
        </div>
      </div>
    );
  }
}
