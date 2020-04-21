import React from 'react';
import './Outcome.css';

import Button from '../Button/Button';

export default function Outcome(props) {
	const content = {
		header: props.win
			? 'Congratulations!'
			: 'Sorry, that was wrong!',
		body: props.win
			? 'You figured out the answer! The word was:'
			: `You guessed "${props.guess}," but the answer was:`
	}

	return (
		<section className='Outcome bordered'>
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
		</section>
	)
}