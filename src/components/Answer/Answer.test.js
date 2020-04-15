import React from 'react';
import { render, screen } from '@testing-library/react';

import Answer from './Answer';

it('renders without crashing', () => {
	render(<Answer />)
});

it('renders word prop', () => {
	const testWord = 'sandwich';
	render(<Answer word={testWord} />);
	expect(screen.getByText(testWord));
})