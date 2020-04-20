import React from 'react';
import { render } from '@testing-library/react';

import Dictionary from './Dictionary';

it('renders without crashing', () => {
	render(<Dictionary />);
})