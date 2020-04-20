import React from 'react';
import './Word.css';

export default function Word(props) {
	return (
		<div className='Word'>
			<h2 className='Readout'>{props.readout}</h2>
		</div>
	)
}