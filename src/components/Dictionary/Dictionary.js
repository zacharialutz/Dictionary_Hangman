import React from 'react';
import './Dictionary.css';

export default function Dictionary(props) {
	return(
		<section className='Dictionary'>
			<h2>{props.word}</h2>
		</section>
	)
}