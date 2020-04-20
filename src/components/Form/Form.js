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
					Guess entire word:
					<input
						type='text'
						value={props.wordGuess}
						onChange={e => props.handleChange('word', e.target.value)}
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