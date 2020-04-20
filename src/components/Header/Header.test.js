import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

it('renders without crashing', () => {
	render(<Header />);
});

// describe('renders based on input', () => {
// 	it('renders word prop', () => {
// 		const testWord = 'sandwich';
// 		render(<Header word={testWord} />);
// 		expect(screen.getByText(testWord));
// 	});

// 	it('accounts for null input representing in-progress game', () => {
// 		render(<Header word={null} />);
// 		expect(screen.getByText('Guess the word one letter at a time!'));
// 	})
// });
