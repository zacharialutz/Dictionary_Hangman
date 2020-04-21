import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

test.only('renders without crashing', () => {
	render(<Button />);
})

test('calls the onClick prop when clicked', () => {
	let clicked = false;
	const testFx = () => clicked = true;
	
	fireEvent.click(render(<Button onClick={testFx} />));
	expect(clicked);
})