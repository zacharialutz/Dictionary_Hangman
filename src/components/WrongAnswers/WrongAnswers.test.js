import React from 'react';
import { render, screen } from '@testing-library/react';

import WrongAnswers from './WrongAnswers';

it('renders without crashing', () => {
	render(<WrongAnswers list={[]}/>)
})

it('renders array', () => {
	const testArray = ['A', 'B', 'C', 'D'];
	render(<WrongAnswers list={testArray} />);
	expect(screen.getByText('ABCD'))
})