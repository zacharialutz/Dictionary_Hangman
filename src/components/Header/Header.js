import React from 'react';
import './Header.css';

export default function Header(props) {
	return (
		<header>
			<button onClick={() => props.handleHome()}>Home/Help</button>
			<h1>Dictionary Hangman</h1>
			<div className='placeholder'></div>
		</header>
	)
}