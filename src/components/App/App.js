import React from 'react';
import './App.css';

import Answer from '../Answer/Answer';

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Answer word={'sandwich'} />
      </div>
    );
  }
}
