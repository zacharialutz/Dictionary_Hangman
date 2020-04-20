import React from 'react';
import './Dictionary.css';

export default function Dictionary(props) {
	return (
		<div className='Dictionary'>
			<h2>{props.word}</h2>
			<button
				className='btn'
				onClick={() => props.handleNewGame()}
			>
				New Game
			</button>
		</div>
	)
}