/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from '@testing-library/react';
import Greet from './greet';

test('Greet renders correctly', () => {
	render(<Greet />)
	// /hello/ match the text, i means ignore the case
	const textElement = screen.getByText(/hello/i)
	expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name', () => {
	render(<Greet name='Sandy' />)
	const textElement = screen.getByText('Hello Sandy')
	expect(textElement).toBeInTheDocument()
})