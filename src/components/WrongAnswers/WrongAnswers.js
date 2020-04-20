import React from 'react';
import './WrongAnswers.css';

export default function WrongAnswers(props) {
	return(
		<div className={'WrongAnswers bordered'}>
			<h3>Wrong answers:</h3>
			{props.list}
		</div>
	)
}