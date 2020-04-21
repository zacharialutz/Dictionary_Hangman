import React from 'react';
import './Dictionary.css';

import Button from '../Button/Button';

export default function Dictionary(props) {
	return (
		<section className='Dictionary bordered'>
			<h2>{props.word}</h2>
			<Button
				text='New Game'
				onClick={props.handleNewGame}
			/>
		</section>
	)
}