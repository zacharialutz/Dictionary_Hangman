import React from 'react';
import './Form.css';

export default function Form(props) {
	return (
		<section className='Form bordered'>
			<h3>Make guesses</h3>
			<form onSubmit={e => props.handleLetterSubmit(e)}>
				<label>
					Guess letter:
					<input
						type='text'
						value={props.letterGuess}
						onChange={e => props.handleChange('letter', e.target.value)}
						maxLength='1'
						size='1'
						pattern='[A-Za-z]'
						title='Single letter, case insensitive'
					/>
				</label>
				<br />
				<input
					className='btn'
					type='submit'
					value='Submit'
				/>
			</form>
			<form onSubmit={e => props.handleWordSubmit(e)}>
				<label>
					Guess word:
					<input
						type='text'
						value={props.wordGuess}
						onChange={e => props.handleChange('word', e.target.value)}
						// pattern='[A-Za-z]'
						// title='Single word, case insensitive'
					/>
				</label>
				<br />
				<input
					className='btn'
					type='submit'
					value='Submit'
				/>
			</form>
		</section>
	)
}