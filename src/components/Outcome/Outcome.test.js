import React from 'react';
import { render } from '@testing-library/react';

import Outcome from './Outcome';

it('renders without crashing', () => {
	render(<Outcome />);
})