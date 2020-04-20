import React from 'react';
import { render, screen } from '@testing-library/react';

import Word from './Word';

it('renders without crashing', () => {
	render(<Word />);
})

it('renders word prop', () => {
	const testWord = 's_ndwi__';
	render(<Word word={testWord} />);
	expect(screen.getByText(testWord));
})