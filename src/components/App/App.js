import React from 'react';
import './App.css';

import Dictionary from '../Dictionary/Dictionary';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Landing from '../Landing/Landing';
import Outcome from '../Outcome/Outcome';
import Word from '../Word/Word';
import WrongAnswers from '../WrongAnswers/WrongAnswers';

const STORE = {
  words: ['sandwich', 'pizza', 'gymnasium']
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'landing', // landing, playing, ending, learning
      word: null,
      win: null,

      letterGuess: '',
      wordGuess: '',

      rightGuesses: [],
      wrongGuesses: [],
      mistakes: 0,

      error: null
    }
  }

  // random from sample array but to be rewritten to access random word from Words API
  getNewWord() {
    const randomIndex = Math.floor(Math.random() * STORE.words.length);

    return (
      STORE.words[randomIndex]
    );
  }

  handleChange = (type, value) => {
    type === 'letter'
      ? this.setState({ letterGuess: value })
      : this.setState({ wordGuess: value })
  }

  handleLetterSubmit(event) {
    event.preventDefault();
    const letter = this.state.letterGuess;
    console.log(letter);
    // check if letter is in word
    // update arrays and display word accordingly
    // check mistake count and win conditions
    // move to win or loss if over
  }

  handleWordSubmit = event => {
    event.preventDefault();
    const { word, wordGuess } = this.state;
    const win = wordGuess === word;
    this.setState({
      win,
      stage: 'ending'
    });
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
      win: null,

      letterGuess: '',
      wordGuess: '',

      rightGuesses: [],
      wrongGuesses: [],
      mistakes: 0
    });
  }

  handleLearnMore = () => {
    this.setState({ stage: 'learning' })
  }

  processDisplayWord() {
    const { word, rightGuesses } = this.state;

    let output = '';
    for (let i = 0; i < word.length; i++) {
      if (rightGuesses.includes(word[i])) output += word[i];
      else output += '_';
    }
    return output;
  }

  renderCenter() {
    const { stage, word, win, letterGuess, wordGuess, rightGuesses, wrongGuesses } = this.state

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
        return (
          <div className={'row'}>
          <WrongAnswers list={wrongGuesses} />
          <Word readout={this.processDisplayWord()} />
          <Form
            playing={this.state.stage === 'playing'}
            letterGuess={letterGuess}
            wordGuess={wordGuess}
            handleChange={this.handleChange}
            handleLetterSubmit={this.handleLetterSubmit}
            handleWordSubmit={this.handleWordSubmit}
          />
        </div>
        )
      case 'ending':
        return (
          <Outcome
            win={win}
            guess={wordGuess}
            word={word}
            handleNewGame={this.handleNewGame}
            handleLearnMore={this.handleLearnMore}
          />
        );
      case 'learning':
        return (
          <Dictionary
            word={word}
            handleNewGame={this.handleNewGame}
          />
        );
      default:
        console.error('Something went wrong with the game stage');
    }
  }

  render() {
    console.log(this.state)

    return (
      <div className='App'>
        <Header word={this.state.word} handleHome={this.handleHome} />
        {this.renderCenter()}
      </div>
    );
  }
}
