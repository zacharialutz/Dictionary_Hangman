import React from 'react';
import './Header.css';

import Button from '../Button/Button';

export default function Header(props) {
	return (
		<header>
			<Button
				text='Home/Help'
				onClick={props.handleHome}
			/>
			<h1>Dictionary Hangman</h1>
			<div className='placeholder'></div>
		</header>
	)
}