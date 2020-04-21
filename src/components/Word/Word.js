import React from 'react';
import './Word.css';

export default function Word(props) {
	return (
		<section className='Word'>
			<h2 className='Readout'>{props.readout}</h2>
		</section>
	)
}