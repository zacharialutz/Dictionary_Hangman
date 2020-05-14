import React from 'react';
import './WrongAnswers.css';

export default function WrongAnswers(props) {
	return(
		<section className={'WrongAnswers bordered'}>
			<h3>Wrong answers:</h3>
			{props.letterList}
			<br />
			{props.wordList}
		</section>
	)
}