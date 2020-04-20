import React from 'react';
import './App.css';

import Dictionary from '../Dictionary/Dictionary';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Landing from '../Landing/Landing';
import Word from '../Word/Word';
import WrongAnswers from '../WrongAnswers/WrongAnswers';

const STORE = {
  words: ['sandwich', 'pizza', 'gymnasium'],
  rightGuesses: ['A', 'B', 'C'],
  wrongGuesses: ['D', 'E', 'F']
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'landing',
      word: null,

      letterGuess: '',
      wordGuess: '',

      rightGuesses: [],
      wrongGuesses: [],
      mistakes: 0,

      error: null
    }
  }

  getNewWord() {
    return(
      STORE.words[0]
    );
  }

  handleChange(type, value) {
    type === 'letter'
      ? this.setState({ letterGuess: value })
      : this.setState({ wordGuess: value })
  }

  handleLetterSubmit(event) {
    event.preventDefault();
    console.log('letter submit!');
    // check if letter is in word
    // update arrays and display word accordingly
    // check mistake count and win conditions
    // move to win or loss if over
  }

  handleWordSubmit(event) {
    event.preventDefault();
    console.log('word submit!');
    // check if guess is same as word
    // move to win or loss
  }

  handleHome = () => {
    this.setState({ stage: 'landing' });
  }

  handleReturn = () => {
    this.setState({ stage: 'playing' });
  }

  handleNewGame = () => {
    this.setState({
      stage: 'playing',
      word: this.getNewWord(),

      letterGuess: '',
      wordGuess: '',

      rightGuesses: [],
      wrongGuesses: [],
      mistakes: 0
    });
  }

  renderCenter(stage, word) {
    switch (stage) {
      case 'landing':
        return (
          <Landing
            word={word}
            handleReturn={this.handleReturn}
            handleNewGame={this.handleNewGame}
          />
        );
      case 'playing':
        return (<Word word={word} />);
      case 'learning':
        return (<Dictionary word={word} />);
      default:
        console.error('Something went wrong with the game stage');
    }
  }

  render() {
    const { stage, word, letterGuess, wordGuess } = this.state;
    console.log(word)

    return (
      <div className='App'>
        <Header word={word} handleHome={this.handleHome}/>
        <div className={'row'}>
          <WrongAnswers list={STORE.wrongGuesses} />
          {this.renderCenter(stage, word)}
          <Form
            letterGuess={letterGuess}
            wordGuess={wordGuess}
            handleChange={this.handleChange}
            handleLetterSubmit={this.handleLetterSubmit}
            handleWordSubmit={this.handleWordSubmit}
          />
        </div>
      </div>
    );
  }
}
