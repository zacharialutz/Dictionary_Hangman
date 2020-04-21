import React from 'react';
import './Button.css';

export default function Button(props) {
	return (
		<button
			className='btn'
			value={props.text}
			onClick={() => props.onClick()}
		/>
	)
}