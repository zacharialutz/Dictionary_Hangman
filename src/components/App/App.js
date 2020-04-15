import React from 'react';
import './App.css';

import Answer from '../Answer/Answer';
import Form from '../Form/Form';
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

      letterGuess: '',
      wordGuess: '',

      word: null,
      rightGuesses: [],
      wrongGuesses: [],
      mistakes: 0,

      error: null
    }
  }

  handleChange(type, value) {
    type === 'letter'
      ? this.setState({ letterGuess: value })
      : this.setState({ wordGuess: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.value = '';
  }

  render() {
    const { word, letterGuess, wordGuess } = this.state;

    return (
      <div className='App'>
        <Answer word={word} />
        <div className={'row'}>
          <WrongGuesses list={STORE.wrongGuesses} />
          <Word readout={STORE.rightGuesses} />
          <Form
            letterGuess={letterGuess}
            wordGuess={wordGuess}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
