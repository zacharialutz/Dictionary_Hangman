import React from 'react';
import './Form.css';

export default function Form(props) {
	this.handleSubmit(event) {
		event.preventDefault();
		const guess = event.target.value;
	}

	return (
		<form>
			<label>
				Guess letter:
				<input
					type='text'
					value={props.letterGuess}
					onChange={e => props.handleChange('letter', e.target.value)}
				/>
			</label>
			<br />
			<label>
				Guess word:
				<input
					type='text'
					value={props.wordGuess}
					onChange={e => props.handleChange('word', e.target.value)}
				/>
			</label>
			<input
				className='btn'
				type='submit'
				value='Sumbit'
			/>
		</form>
	)
}