import React from 'react';
import './Outcome.css';

import Button from '../Button/Button';

export default function Outcome(props) {
	const content = {
		header: props.win
			? 'Congratulations!'
			: 'Sorry, you lost the game!',
		body: props.win
			? 'You figured out the answer! The word was:'
			: 'You made too many wrong guesses! The answer was:'
	}

	return (
		<main className='Outcome bordered'>
			<h3>{content.header}</h3>
			<p>{content.body}</p>
			<h2>{props.word}</h2>
			<Button
				text='New Game'
				onClick={props.handleNewGame}
			/>
			<Button
				text='Learn More'
				onClick={props.handleLearnMore}
			/>
		</main>
	)
}