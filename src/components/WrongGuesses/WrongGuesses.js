import React from 'react';
import './WrongGuesses.css';

export default function WrongGuesses(props) {
	return(
		<div className={'WrongGuesses bordered'}>
			<h3>Wrong guesses:</h3>
			{props.list}
		</div>
	)
}