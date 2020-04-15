import React from 'react';
import './Word.css';

export default function Word(props) {
	return (
		<header>
			<h1 className='Readout'>{props.readout}</h1>
		</header>
	)
}