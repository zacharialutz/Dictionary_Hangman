import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

it('renders without crashing', () => {
	render(<Button />);
})

it('calls the onClick prop when clicked', () => {
	
})