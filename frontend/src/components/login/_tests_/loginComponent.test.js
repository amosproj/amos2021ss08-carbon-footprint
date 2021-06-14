import React from 'react';
import { render } from '@testing-library/react';
import LoginComponent from './../LoginComponent';
/**
 * Test What user would see
 */
test('renders the form correctly', () => {
    const { getByText, getByLabelText } = render(<LoginComponent />);
    const nameLabel = getByText(/Name:/i);
    const passwordLabel = getByText(/Password:/i);
    expect(nameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    const input1 = getByLabelText(/Name:/i);
    const input2 = getByLabelText(/Password:/i);
    expect(input1).toHaveAttribute('type', 'text');
    expect(input2).toHaveAttribute('type', 'password');
});
