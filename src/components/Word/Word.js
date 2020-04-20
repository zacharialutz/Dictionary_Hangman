import React from 'react';
import './Word.css';

export default function Word(props) {
	return (
		<header>
			<h1 className='Readout'>{props.word}</h1>
		</header>
	)
}