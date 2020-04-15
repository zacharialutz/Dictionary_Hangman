import React from 'react';
import { render, screen } from '@testing-library/react';

import WrongGuesses from './WrongGuesses';

it('renders without crashing', () => {
	render(<WrongGuesses list={[]}/>)
})

it('renders array', () => {
	const testArray = ['A', 'B', 'C', 'D'];
	render(<WrongGuesses list={testArray} />);
	expect(screen.getByText('ABCD'))
})