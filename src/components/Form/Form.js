import React from 'react';
import './Form.css';

export default function Form(props) {
	const disable = !props.playing;

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
						disabled={disable}
					/>
				</label>
				<br />
				<input
					className='btn'
					type='submit'
					value='Submit'
					disabled={disable}
				/>
			</form>
			<form onSubmit={e => props.handleWordSubmit(e)}>
				<label>
					Guess word:
					<input
						type='text'
						value={props.wordGuess}
						onChange={e => props.handleChange('word', e.target.value)}
						disabled={disable}
					/>
				</label>
				<br />
				<input
					className='btn'
					type='submit'
					value='Submit'
					disabled={disable}
				/>
			</form>
		</section>
	)
}