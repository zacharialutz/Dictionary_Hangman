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
  words: ['sandwich', 'pizza', 'gymnasium', 'cat', 'ukelele']
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

      rightLetters: [],
      wrongLetters: [],
      wrongWords: [],
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

      rightLetters: [],
      wrongLetters: [],
      wrongWords: [],
      mistakes: 0
    });
  }

  handleChange = (type, value) => {
    type === 'letter'
      ? this.setState({ letterGuess: value })
      : this.setState({ wordGuess: value })
  }

  handleLetterSubmit = event => {
    event.preventDefault();
    const { word, letterGuess, rightLetters, wrongLetters, mistakes } = this.state;
    const newRightLetters = [...rightLetters, letterGuess];

    if (this.processDisplayWord(word, newRightLetters) === word) {
      this.setState({
        win: true,
        stage: 'ending'
      })
    }
    else if (word.includes(letterGuess)) {
      this.setState({
        rightLetters: newRightLetters,
        letterGuess: ''
      })
    }
    else if (mistakes === 6) {
      this.setState({
        win: false,
        stage: 'ending'
      })
    }
    else this.setState({
      wrongLetters: [...wrongLetters, letterGuess],
      mistakes: mistakes + 1,
      letterGuess: ''
    })
  }

  handleWordSubmit = event => {
    event.preventDefault();
    const { word, wordGuess, wrongWords, mistakes } = this.state;

    if (word === wordGuess) {
      this.setState({
        win: true,
        stage: 'ending',
        wordGuess: ''
      })
    }
    else if (mistakes === 6) {
      this.setState({
        win: false,
        stage: 'ending'
      })
    }
    else {
      this.setState({
        wrongWords: [...wrongWords, wordGuess],
        mistakes: mistakes + 1,
        wordGuess: ''
      })
    }
  }

  handleLearnMore = () => {
    this.setState({ stage: 'learning' })
  }

  processDisplayWord(word, check) {
    let output = '';
    for (let i = 0; i < word.length; i++) {
      if (check.includes(word[i])) output += word[i];
      else output += '_';
    }
    return output;
  }

  renderContent() {
    const {
      stage,
      word,
      win,
      letterGuess,
      wordGuess,
      rightLetters,
      wrongLetters,
      wrongWords
    } = this.state

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
          <main className={'row'}>
            <WrongAnswers letterList={wrongLetters} wordList={wrongWords} />
            <Word readout={this.processDisplayWord(word, rightLetters)} />
            <Form
              playing={this.state.stage === 'playing'}
              letterGuess={letterGuess}
              wordGuess={wordGuess}
              handleChange={this.handleChange}
              handleLetterSubmit={this.handleLetterSubmit}
              handleWordSubmit={this.handleWordSubmit}
            />
          </main>
        )
      case 'ending':
        return (
          <Outcome
            win={win}
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
        {this.renderContent()}
      </div>
    );
  }
}
