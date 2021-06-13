import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import SidebarComponent from 'sidebarSidebarComponent.js';

afterEach(cleanup);

it('renders a clickable button', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Clickable</Button>);

    const button = getByText('Clickable');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});

it('renders a disabled button', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
        <Button disabled onClick={handleClick}>
            Disabled
        </Button>
    );

    const button = getByText('Disabled');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(0);
});
