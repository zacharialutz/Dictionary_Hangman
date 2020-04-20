import React from 'react';
import './Landing.css';

export default function Landing(props) {
	return (
		<div className='Landing'>
			<h2>Guess the word one letter at a time!</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante diam, auctor eget nisi nec,
				luctus feugiat ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
				ac turpis egestas. Donec scelerisque ipsum eget ipsum ultricies ornare. Phasellus sit amet
				egestas dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			{props.word &&
				<button
					className='btn'
					onClick={() => props.handleReturn()}
				>
					Return
				</button>
			}
			<button
				className='btn'
				onClick={() => props.handleNewGame()}
			>
				New Game
			</button>
		</div>
	)
}