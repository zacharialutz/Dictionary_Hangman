import React from 'react';
import { render, screen } from '@testing-library/react';

import Answer from './Answer';

it('renders without crashing', () => {
	render(<Answer />);
});

describe('renders based on input', () => {
	it('renders word prop', () => {
		const testWord = 'sandwich';
		render(<Answer word={testWord} />);
		expect(screen.getByText(testWord));
	});

	it('accounts for null input representing in-progress game', () => {
		render(<Answer word={null} />);
		expect(screen.getByText('Guess the word one letter at a time!'));
	})
});


