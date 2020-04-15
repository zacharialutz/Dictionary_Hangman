import React from 'react';
import './Answer.css';

export default function Answer(props) {
	const display = props.word ? props.word : 'Guess the word one letter at a time!';

	return (
		<h2 className={'Answer'}>{display}</h2>
	)
}